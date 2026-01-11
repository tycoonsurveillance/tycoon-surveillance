import React from "react";
import { motion } from "framer-motion";
import "./Support.css";

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

const SupportUnique = () => {
  return (
    <motion.section
      className="su-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* LEFT – IMAGES */}
      <motion.div className="su-left" variants={itemVariants}>
        <div className="su-image-stack">
          <motion.div
            className="su-image-card su-tall"
            whileHover={{ scale: 1.05, y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.25)" }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <img src={supportImg1} alt="Support Team" />
          </motion.div>

          <motion.div
            className="su-image-card su-main"
            whileHover={{ scale: 1.05, y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.25)" }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <img src={supportImg2} alt="Monitoring Center" />
          </motion.div>

          {/* BADGE */}
          <div className="su-badge">
            <img src={badgeImg} alt="Contact Now" />
          </div>
        </div>
      </motion.div>

      {/* RIGHT – CONTENT */}
      <motion.div className="su-right" variants={itemVariants}>
        <span className="su-tag">
          <i className="fa-solid fa-headset"></i>
          TECHNICAL SUPPORT
        </span>

        <h2 className="su-title">
          Reliable Assistance Whenever <span>You Need It</span>
        </h2>

        <p className="su-desc">
          Our technical support team is available 24/7 to ensure your security
          systems operate reliably. From real-time monitoring to rapid issue
          resolution, we deliver assistance you can trust.
        </p>

        <div className="su-features">
          <div className="su-feature" variants={itemVariants}>
            <span className="su-icon">
              <i className="fa-solid fa-video"></i>
            </span>
            <div>
              <h4>CCTV Monitoring</h4>
              <p>Continuous surveillance with real-time alerts.</p>
            </div>
          </div>

          <div className="su-feature" variants={itemVariants}>
            <span className="su-icon">
              <i className="fa-solid fa-shield-halved"></i>
            </span>
            <div>
              <h4>Digital Security</h4>
              <p>Advanced protection for modern environments.</p>
            </div>
          </div>
        </div>

        <motion.button
          className="su-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Contact Now <i className="fa-solid fa-arrow-right"></i>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default SupportUnique;
