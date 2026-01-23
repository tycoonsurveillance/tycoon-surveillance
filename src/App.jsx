import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/FooterContactBar";
import Loading from "./components/Loading";

const Home = lazy(() => import("./Home"));

// Service pages
const LiveVideoMonitoring = lazy(() => import("./dropdown-menu/LiveVideoMonitoring"));
const VideoSurveillance = lazy(() => import("./dropdown-menu/VideoSurveillance"));
const AccessControl = lazy(() => import("./dropdown-menu/AccessControl"));
const AlarmMonitoring = lazy(() => import("./dropdown-menu/AlarmMonitoring"));
const AccountManagement = lazy(() => import("./dropdown-menu/AccountManagement"));
const VirtualAssistant = lazy(() => import("./dropdown-menu/VirtualAssistant"));

// Industrial pages
const Retail = lazy(() => import("./industrial/Retail"));
const Construction = lazy(() => import("./industrial/Construction"));
const Banking = lazy(() => import("./industrial/Banking"));
const Healthcare = lazy(() => import("./industrial/Healthcare"));
const Education = lazy(() => import("./industrial/Education"));
const Hospitality = lazy(() => import("./industrial/Hospitality"));
const Transportation = lazy(() => import("./industrial/Transportation"));
const Corporate = lazy(() => import("./industrial/Corporate"));

// Other pages
const About = lazy(() => import("./About-us/About"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ContactSection = lazy(() => import("./Contact-us/ContactSection"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Suspense fallback={<Loading />}>
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
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
