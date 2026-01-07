import React, { useEffect, useState } from "react";
import homecontents from "../api/contents/homecontents";

const Home = () => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const fetchContents = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) return; // redirect to login if no token

      const data = await homecontents(token);
      if (data) setContents(data);
      setLoading(false);
    };
    fetchContents();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  // Group by category
  const groupedContents = contents.reduce((acc, item) => {
    const category = item.Content_category || "Other";
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});
  const categories = Object.keys(groupedContents);
  const heroContent = contents[0];

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      {heroContent && (
        <div className="relative h-screen overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.5)" }}
          >
            <source src={heroContent.Video} type="video/mp4" />
          </video>
          <div className="relative z-10 flex items-center h-full px-12 md:px-16 lg:px-20">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">{heroContent.Title}</h1>
              <p className="text-lg md:text-xl mb-6 text-gray-200 line-clamp-3">{heroContent.Description}</p>
              <div className="flex items-center gap-4 mb-8">
                <span className="px-3 py-1 bg-red-600 text-sm font-semibold rounded">{heroContent.Content_category}</span>
                <span className="text-gray-300">{heroContent.Duration_in_minutes} mins</span>
                <span className="text-gray-300">{heroContent.Released_date}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Rows */}
      <div className="relative z-20 -mt-32 pb-20">
        {categories.map((category, categoryIndex) => (
          <div key={category} className="mb-12 px-12 md:px-16 lg:px-20">
            <h2 className="text-2xl font-bold mb-4">{category}</h2>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4 scroll-smooth">
              {groupedContents[category].map((item, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-64 cursor-pointer transition-transform duration-300"
                  onMouseEnter={() => setHoveredItem(`${categoryIndex}-${index}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    transform: hoveredItem === `${categoryIndex}-${index}` ? "scale(1.1)" : "scale(1)",
                    zIndex: hoveredItem === `${categoryIndex}-${index}` ? 10 : 1,
                  }}
                >
                  <img
                    src={item.Thumbnain}
                    alt={item.Title}
                    className="w-full h-36 object-cover rounded"
                  />
                  <h3 className="text-sm font-semibold mt-2">{item.Title}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Home;
