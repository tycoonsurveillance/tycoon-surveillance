import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../About-us/About.css";
import Mission from "../About-us/Mission";
import Chose from "../About-us/Chose";
import Commit from "../About-us/Commit";
import Expertise from "../About-us/Expertise";
import WhatWeDoSection from "../About-us/WhatWeDoSection";
import OurExpertsSection from "../About-us/OurExpertsSection";
import Support from "../About-us/Support";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";

import badgeImg from "../assets/About-circle-image.png";
import mainImg from "../Services-Images/service1.png";
import subImg from "../assets/About-Image-2.png";
import experienceImg from "../assets/About-Image-3.png";
import phoneIcon from "../assets/phone.png";

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
    <div className="lvm-page">
      {/* Banner */}
      {/* Banner */}
      <section className="lvm-banner">
        <h1 className="lvm-banner-title">ABOUT US</h1>
      </section>

      {/* ABOUT SECTION */}
      <section className="a4-section">
        <div className="a5-wrapper">
          {/* LEFT */}
          <motion.div
            className="a6-media"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="a7-img a8-primary a9-zoom">
              <img src={mainImg} alt="Security Operator" />
            </div>
            <div className="a7-img a10-secondary a9-zoom">
              <img src={subImg} alt="Woman Operator" />
            </div>
            <div className="a11-badge a12-spin">
              <img src={badgeImg} alt="Trusted Badge" />
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="a13-info"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="a14-label">ABOUT US</p>
            <h2 className="a15-heading">
              <span>Protecting Homes,</span> Businesses 
              and Every Spaces
            </h2>
            <p className="a16-desc">
              At Tycoon Surveillance Security, we deliver high-quality business security camera systems across the USA, along with advanced CCTV solutions for residential and commercial properties. Our mission is to provide peace of mind through reliable, innovative, and customized security systems that protect your home and business around the clock.
            </p>

            <div className="a17-experience">
              <div className="a18-img a9-zoom">
                <img src={experienceImg} alt="Experience" />
              </div>
              <h3 className="a19-text">
                We Have More Than 10+ Years of Experience in Industry
              </h3>
            </div>

            <div className="a20-contact">
              <div className="a21-icon">
                <img src={phoneIcon} alt="Phone" />
              </div>
              <div className="a22-text">
                <p>Call Directly 24/7</p>
                <h4>+(1) 281 602 3421</h4>
              </div>
              <button className="a23-btn">More About →</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Sections */}
      <Mission />
      <Chose />
      <Commit />
      <Expertise />
      <WhatWeDoSection />
      <OurExpertsSection />
      <Support />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default About;
