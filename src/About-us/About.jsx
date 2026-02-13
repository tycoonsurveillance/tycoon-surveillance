import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../About-us/About.css";
import AboutUs from "../components/AboutUs";
 import Mission from "../About-us/Mission";
 import Chose from "../About-us/Chose";
 import Commit from "../About-us/Commit";
 import Expertise from "../About-us/Expertise";
 import WhatWeDoSection from "../About-us/WhatWeDoSection";
import OurExpertsSection from "../About-us/OurExpertsSection";
 import Support from "../About-us/Support";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";


const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const About = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="About-lvm">
      {/* Banner */}
      {/* Banner */}
      <section
        className="lvm-ban"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5),
           rgba(0,0,0,0.5)), url("/contact-bg.jpg")`,
        }}
      >
        <h1 className="lvm-banner-title">ABOUT US</h1>
      </section>

<AboutUs/>
   <Mission />
    <Chose />
    <Commit />
    <Expertise />
    <WhatWeDoSection />
    <OurExpertsSection />
    <Support />
      <Testimonials />
        <ContactSection />
      {/* Other Sections */}
      {/* <AboutUs/>
      <Mission />
      <Chose />
      <Commit />
      <Expertise />
      <WhatWeDoSection />
      <OurExpertsSection />
      <Support />
      <Testimonials />
      <ContactSection /> */}
    </div>
  );
};

export default About;
