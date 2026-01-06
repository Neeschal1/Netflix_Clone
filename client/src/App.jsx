import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Intro from "./screens/intro";
import Welcome from "./screens/welcome";
import Signup from "./screens/signup";

export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
  );
}
