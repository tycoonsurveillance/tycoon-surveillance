import React from "react";
import { motion } from "framer-motion";
import {
  FiPhoneCall,
  FiUsers,
  FiFolder,
  FiMonitor
} from "react-icons/fi";
import "./WhatWeDoSection.css";

/*
  Replace the import below with your chosen "security monitoring / control room" image.
  Example: import controlRoom from "../assets/control-room.jpg";
*/
import controlRoom from "./about-imgs/about9.png";

const fadeUp = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" }
};

export default function WhatWeDoSection() {
  return (
    <section className="wwd-wrapper" aria-labelledby="wwd-heading">
      <div className="wwd-container">

        {/* LEFT */}
        <motion.div className="wwd-left" {...fadeUp}>
          <div className="wwd-tag" aria-hidden>
            <FiMonitor className="wwd-tag-icon" />
            <span>WHAT WE DO</span>
          </div>

          <h2 id="wwd-heading" className="wwd-title">
            Comprehensive Security &amp; <br /> Surveillance Solutions
          </h2>

          <p className="wwd-copy">
            At Tycoon Serveillance we deliver trusted security and surveillance solutions designed
            to protect homes, businesses and commercial properties. Our services include
            CCTV installation, live video monitoring, access control, alarm monitoring,
            and managed security services tailored to your needs.
          </p>

          <p className="wwd-copy wwd-copy--muted">
            We combine industry-leading hardware with proactive monitoring and a dedicated
            professional team so you can stay secure 24/7. Every deployment is customized
            for performance, reliability and ease-of-use.
          </p>

          <motion.button
            className="wwd-cta"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Call Tycoon Surveillance"
            onClick={() => (window.location.href = "tel:+12816023421")}
          >
            <span className="wwd-cta-left" aria-hidden>
              <FiPhoneCall className="wwd-cta-icon" />
            </span>

            <span className="wwd-cta-body">
              <span className="wwd-cta-label">Call For Any Kind Of Services</span>
              <span className="wwd-cta-number">+92 150-289-316</span>
            </span>
          </motion.button>
        </motion.div>

        {/* RIGHT */}
        <motion.div className="wwd-right" {...fadeUp}>
          <motion.div
            className="wwd-image-wrap"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.995 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            role="img"
            aria-label="Security control room"
          >
            <img
              src={controlRoom}
              alt="Security monitoring control room"
              className="wwd-image"
              loading="lazy"
            />

            {/* top card */}
            <motion.div
              className="wwd-card wwd-card--top"
              whileHover={{ y: -8, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <span className="wwd-card-icon">
                <FiUsers />
              </span>
              <div className="wwd-card-body">
                <div className="wwd-card-num">550+</div>
                <div className="wwd-card-label">Professional Team</div>
              </div>
            </motion.div>

            {/* bottom card */}
            <motion.div
              className="wwd-card wwd-card--bottom"
              whileHover={{ y: -8, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.05 }}
            >
              <span className="wwd-card-icon">
                <FiFolder />
              </span>
              <div className="wwd-card-body">
                <div className="wwd-card-num">250+</div>
                <div className="wwd-card-label">Projects Complete</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
