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
import Aboutus from "./screens/aboutus";
import Login from "./screens/login";
import Home from "./screens/home";
import Contentchoices from "./screens/content_choice";
import Profile from "./screens/profile";
import Plans from "./screens/plans";
import Subscribed from "./screens/subscribedplan";
import PaymentSuccess from "./screens/success";
import PaymentFailure from "./screens/failure";

export default function App() {
  const [language, setLanguage] = useState("en");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/welcome" element={<Welcome language={language} setLanguage={setLanguage} />}/>
        <Route path="/signup" element={<Signup language={language} />} />
        <Route path="/otp" element={<OTP language={language} />} />
        <Route path="/plans" element={<Plans language={language} />} />
        <Route path="/subscription" element={<Subscribed language={language} />} />
        <Route path="/success" element={<PaymentSuccess language={language} />} />
        <Route path="/failure" element={<PaymentFailure language={language} />} />
        <Route path="/choices/" element={<Contentchoices language={language} />} />
        <Route path="/profile/" element={<Profile language={language} />} />
        <Route path="/login/" element={<Login language={language} />} />
        <Route path="/about" element={<Aboutus language={language} />} />
        <Route path="/login/home" element={<Home language={language} />} />
      </Routes>
    </Router>
  );
}