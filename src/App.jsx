import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/FooterContactBar";

import Home from "./Home";

// Service pages
import LiveVideoMonitoring from "./dropdown-menu/LiveVideoMonitoring";
import VideoSurveillance from "./dropdown-menu/VideoSurveillance";
import AccessControl from "./dropdown-menu/AccessControl";
import AlarmMonitoring from "./dropdown-menu/AlarmMonitoring";
import AccountManagement from "./dropdown-menu/AccountManagement";
import VirtualAssistant from "./dropdown-menu/VirtualAssistant";

// Industrial pages
import Retail from "./industrial/Retail";
import Construction from "./industrial/Construction"; // Fixed import path (removed space)
import Banking from "./industrial/Banking";
import Healthcare from "./industrial/Healthcare";
import Education from "./industrial/Education";
import Hospitality from "./industrial/Hospitality";
import Transportation from "./industrial/Transportation";
import Corporate from "./industrial/Corporate";

// Other pages
import About from "./About-us/About";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost"; // New Dynamic Platform
import ContactSection from "./Contact-us/ContactSection";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Services */}
        <Route path="/live-video-monitoring" element={<LiveVideoMonitoring />} />
        <Route path="/video-surveillance" element={<VideoSurveillance />} />
        <Route path="/access-control" element={<AccessControl />} />
        <Route path="/alarm-monitoring" element={<AlarmMonitoring />} />
        <Route path="/account-management" element={<AccountManagement />} />
        <Route path="/virtual-assistant" element={<VirtualAssistant />} />

        {/* Industrial */}
        <Route path="/retail" element={<Retail />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/education" element={<Education />} />
        <Route path="/hospitality" element={<Hospitality />} />
        <Route path="/transportation" element={<Transportation />} />
        <Route path="/corporate" element={<Corporate />} />

        {/* Other Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />

        {/* Dynamic Blog Detail Page */}
        <Route path="/blogs/:slug" element={<BlogPost />} />

        <Route path="/contact" element={<ContactSection />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
