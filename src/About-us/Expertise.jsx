 import React, { useEffect, useState } from "react";
 import { motion } from "framer-motion";
 import "../About-us/Expertise.css";
 
import comitee2 from "./about-imgs/about8.png";




 const fadeUp = {
   initial: { opacity: 0, y: 40 },
   whileInView: { opacity: 1, y: 0 },
   viewport: { once: true },
   transition: { duration: 0.6, ease: "easeOut" },
 };
 


 
 const Expertise = () => {
   const [openFAQ, setOpenFAQ] = useState(null);
 
   const toggleFAQ = (index) => {
     setOpenFAQ(openFAQ === index ? null : index);
   };
 
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
 
   return (
     <div className="lvm-page">


<section className="expertise-section">

  {/* LEFT CONTENT */}
  <motion.div
    className="expertise-left"
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <p className="expertise-tag">
      <i className="fa-solid fa-shield-halved"></i> OUR EXPERTISE
    </p>

    <h2 className="expertise-title">
      <span>Smart Security Solutions</span> You <strong>Can Trust</strong>
    </h2>

    <p className="expertise-desc">
      At Tycoon Serveillance, we specialize in delivering advanced security and surveillance
      services designed to protect homes, businesses, and commercial properties. Our
      commitment is to provide reliable systems that bring complete peace of mind.
    </p>

    {/* FEATURES */}
    <div className="expertise-features-row">

      {/* item 1 */}
      <motion.div
        className="feature-item"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="feature-icon">
          <i className="fa-solid fa-video"></i>
        </div>
        <div className="feature-body">
          <h4>Advanced Monitoring</h4>
          <p>Reliable oversight with instant alerts.</p>
        </div>
      </motion.div>

      {/* item 2 */}
      <motion.div
        className="feature-item"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        viewport={{ once: true }}
      >
        <div className="feature-icon simple">
          <i className="fa-solid fa-sliders"></i>
        </div>
        <div className="feature-body">
          <h4>Customized Protection</h4>
          <p>Tailored solutions for every need.</p>
        </div>
      </motion.div>

    </div>

    {/* STAT CARD */}
    <motion.div
      className="expertise-stat-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="stat-left">
        <h3>90+</h3>
        <p>Success Rate in <br /> Homes & Businesses Security</p>
      </div>

      <div className="stat-right">
        <ul>
          <li><i className="fa-solid fa-circle-check"></i> Advanced Surveillance</li>
          <li><i className="fa-solid fa-circle-check"></i> Comprehensive Security</li>
        </ul>
      </div>
    </motion.div>

  </motion.div>

  {/* RIGHT IMAGE */}
  <div className="expertise-right">

    <motion.div
      className="expertise-image-wrap fadeup"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <img src={comitee2} alt="Security Monitoring" className="expertise-image" />

      {/* floating support box */}
      <motion.div
        className="support-box"
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="support-icon">
          <i className="fa-solid fa-headset"></i>
        </div>
        <div className="support-body">
          <div className="support-title">24/7 Support</div>
          <div className="support-number">+(281) 602-3421</div>
        </div>
      </motion.div>

    </motion.div>

  </div>

</section>

     </div>
         
  );
};

export default Expertise;
