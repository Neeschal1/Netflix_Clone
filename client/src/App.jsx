import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Intro from "./screens/intro";
import Welcome from "./screens/welcome";
import Signup from "./screens/signup";
import { useState } from "react";
import OTP from "./screens/otpverification";

export default function App() {
  const [language, setLanguage] = useState("en");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/welcome" element={<Welcome language={language} setLanguage={setLanguage} />}/>
        <Route path="/signup" element={<Signup language={language} />} />
        <Route path="/signup/otp" element={<OTP language={language} />} />
      </Routes>
    </Router>
  );
}
