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
        <Route path="/login" element={<Login language={language} />} />
        <Route path="/signup" element={<Signup language={language} />} />
        <Route path="/signup/otp" element={<OTP language={language} />} />
        <Route path="/signup/otp/plans" element={<Plans language={language} />} />
        <Route path="/signup/otp/plans/subscription" element={<Subscribed language={language} />} />
        <Route path="/signup/otp/plans/subscription/success" element={<PaymentSuccess language={language} />} />
        <Route path="/signup/otp/plans/subscription/failure" element={<PaymentFailure language={language} />} />
        <Route path="/signup/otp/plans/subscription/choices/" element={<Contentchoices language={language} />} />
        <Route path="/signup/otp/plans/subscription/choices/profile/" element={<Profile language={language} />} />
        <Route path="/about" element={<Aboutus language={language} />} />
        <Route path="/login/home" element={<Home language={language} />} />
      </Routes>
    </Router>
  );
}