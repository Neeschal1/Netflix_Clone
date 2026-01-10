import React, { useState, useEffect } from 'react';
import { Play, Info, Search, Bell } from 'lucide-react';

const Home = () => {
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://127.0.0.1:8000/contents/homecontents/');
      
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      
      const data = await response.json();
      setMovies(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching movies:', err);
    } finally {
      setLoading(false);
    }
  };

  // Group movies by genre
  const getMoviesByGenre = (genre) => {
    return movies.filter(movie => movie.Genre === genre);
  };

  // Get unique genres
  const genres = [...new Set(movies.map(movie => movie.Genre))];

  const categories = [
    { name: "Trending Now", movies: movies },
    { name: "Romantic Comedies", movies: getMoviesByGenre("ROMANTIC_COMEDY") },
    { name: "Action", movies: getMoviesByGenre("ACTION") },
    { name: "Drama", movies: getMoviesByGenre("DRAMA") },
    { name: "Popular on Netflix", movies: movies },
    { name: "New Releases", movies: [...movies].sort((a, b) => 
      new Date(b.Released_date) - new Date(a.Released_date)
    ) },
  ].filter(category => category.movies.length > 0);

  if (loading) {
    return (
      <div className="bg-black min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-500 mb-4">Error: {error}</p>
          <button 
            onClick={fetchMovies}
            className="bg-red-600 px-6 py-2 rounded hover:bg-red-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="bg-black min-h-screen text-white flex items-center justify-center">
        <p className="text-xl">No movies available</p>
      </div>
    );
  }

  const featuredMovie = movies[0];

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Netflix Header */}
      <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black via-black/80 to-transparent">
        <div className="flex items-center justify-between px-4 md:px-12 py-4">
          <div className="flex items-center space-x-8">
            <h1 className="text-red-600 text-2xl md:text-3xl font-bold">NETFLIX</h1>
            <nav className="hidden md:flex space-x-6 text-sm">
              <a href="#" className="font-semibold">Home</a>
              <a href="#" className="hover:text-gray-300">TV Shows</a>
              <a href="#" className="hover:text-gray-300">Movies</a>
              <a href="#" className="hover:text-gray-300">New & Popular</a>
              <a href="#" className="hover:text-gray-300">My List</a>
              <a href="#" className="hover:text-gray-300">Browse by Languages</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <Search className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            <span className="hidden md:inline text-sm cursor-pointer hover:text-gray-300">Kids</span>
            <Bell className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            <div className="w-8 h-8 bg-blue-600 rounded cursor-pointer"></div>
          </div>
        </div>
      </header>

      {/* Hero Billboard */}
      <div className="relative h-[80vh] md:h-[90vh]">
        <div className="absolute inset-0">
          <img 
            src={featuredMovie.Thumbnail} 
            alt={featuredMovie.Title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1920x1080/000000/FFFFFF/?text=No+Image';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="relative h-full flex items-center px-4 md:px-12">
          <div className="max-w-xl md:max-w-2xl space-y-4 md:space-y-6 pt-20">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg">
              {featuredMovie.Title}
            </h1>
            
            <p className="text-sm md:text-lg text-gray-100 leading-relaxed line-clamp-3 md:line-clamp-4 drop-shadow-md">
              {featuredMovie.Content_description}
            </p>
            
            <div className="flex flex-wrap gap-3 md:gap-4 pt-2">
              <button 
                onClick={() => window.open(featuredMovie.Video, '_blank')}
                className="flex items-center space-x-2 bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded font-semibold hover:bg-gray-200 transition text-sm md:text-base"
              >
                <Play className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                <span>Play</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-600/70 px-6 md:px-8 py-2 md:py-3 rounded font-semibold hover:bg-gray-600/50 transition text-sm md:text-base">
                <Info className="w-5 h-5 md:w-6 md:h-6" />
                <span>More Info</span>
              </button>
            </div>
          </div>
        </div>

        {/* Fade indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Content Rows */}
      <div className="relative -mt-24 md:-mt-40 space-y-8 md:space-y-12 pb-20">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="px-4 md:px-12">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">{category.name}</h2>
            <div className="relative group">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1 md:gap-2">
                {category.movies.map((movie, index) => (
                  <div 
                    key={`${categoryIndex}-${movie.id}-${index}`}
                    className="relative aspect-video cursor-pointer transition-all duration-300 hover:scale-105 hover:z-10"
                    onMouseEnter={() => setHoveredMovie(`${categoryIndex}-${movie.id}`)}
                    onMouseLeave={() => setHoveredMovie(null)}
                  >
                    <img 
                      src={movie.Thumbnail} 
                      alt={movie.Title}
                      className="w-full h-full object-cover rounded"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x170/000000/FFFFFF/?text=No+Image';
                      }}
                    />
                    
                    {hoveredMovie === `${categoryIndex}-${movie.id}` && (
                      <div className="absolute inset-0 bg-black/90 rounded flex flex-col justify-end p-3 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-xs md:text-sm font-bold mb-1 md:mb-2 line-clamp-2">{movie.Title}</h3>
                        <div className="flex items-center space-x-2 text-xs text-gray-300 mb-2">
                          <span className="text-green-500 font-semibold">{movie.Ratings * 10}%</span>
                          <span>{Math.floor(movie.Duration_in_minutes / 60)}h {movie.Duration_in_minutes % 60}m</span>
                        </div>
                        <div className="flex space-x-1 md:space-x-2">
                          <button 
                            onClick={() => window.open(movie.Video, '_blank')}
                            className="bg-white text-black rounded-full p-1.5 md:p-2 hover:bg-gray-200 transition"
                          >
                            <Play className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                          </button>
                          <button className="border-2 border-gray-400 rounded-full p-1.5 md:p-2 hover:border-white transition">
                            <Info className="w-3 h-3 md:w-4 md:h-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;