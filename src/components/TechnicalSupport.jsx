import React from "react";
import { motion } from "framer-motion";
import "../styles/technicalSupport.css";

import supportImg1 from "../Services-Images/service11.png";
import supportImg2 from "../Services-Images/service12.png";
import badgeImg from "../assets/About-circle-image.png";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Support = () => {
  return (
    <div className="abt-page">
    <motion.section
      className="sec-support"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* LEFT – IMAGES */}
      <motion.div className="sec-support-left" variants={itemVariants}>
        <div className="sec-image-stack">
          <motion.div
            className="sec-image-card sec-tall"
            whileHover={{ scale: 1.05, y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.25)" }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <img src={supportImg1} alt="Support Team" />
          </motion.div>

          <motion.div
            className="sec-image-card sec-main"
            whileHover={{ scale: 1.05, y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.25)" }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <img src={supportImg2} alt="Monitoring Center" />
          </motion.div>

          {/* BADGE */}
          <div className="sec-contact">
            <img src={badgeImg} alt="Contact Now" />
          </div>
        </div>
      </motion.div>

      {/* RIGHT – CONTENT */}
      <motion.div className="sec-support-right" variants={itemVariants}>
        <span className="sec-support-tag">
          <i className="fa-solid fa-headset"></i>
          TECHNICAL SUPPORT
        </span>

        <h2 className="sec-support-title">
          Reliable Assistance Whenever <span>You Need It</span>
        </h2>

        <p className="sec-support-desc">
          Our technical support team is available around the clock to ensure your security systems run smoothly. From real-time monitoring to swift problem resolution, we provide dependable assistance you can rely on.
        </p>

        <div className="sec-support-features">
          <div className="sec-support-feature" variants={itemVariants}>
            <span className="sec-icon">
              <i className="fa-solid fa-video"></i>
            </span>
            <div>
              <h4>Surveillance Monitoring</h4>
              <p>24/7 surveillance you trust.</p>
            </div>
          </div>

          <div className="sec-support-feature" variants={itemVariants}>
            <span className="sec-icon">
              <i className="fa-solid fa-shield-halved"></i>
            </span>
            <div>
              <h4>Live Reportings</h4>
              <p>Smart protection with smart security needs.</p>
            </div>
          </div>
        </div>

        <motion.button
          className="sec-support-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Contact Now <i className="fa-solid fa-arrow-right"></i>
        </motion.button>
      </motion.div>
    </motion.section>
    </div>
  );
};

export default Support;
