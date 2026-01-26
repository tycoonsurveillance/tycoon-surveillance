// WhatWeDo.jsx
import React from "react";
import "./whatwedo.css";
import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";
import { FaUsers, FaVideo } from "react-icons/fa";
import serviceImg from "../Services-Images/service10.png";

const WhatWeDo = () => {
  return (
    <section className="whatwedo-section">
      <div className="whatwedo-container">
        {/* LEFT CONTENT */}
        <motion.div
          className="whatwedo-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-tag">WHAT WE DO</p>
          <h2 className="section-title">
            Delivering <span>trusted</span> security and surveillance
          </h2>
          <p className="section-text">
          At Tycoon Serveillance Security, we specialize in providing reliable security and surveillance solutions designed to give homeowners and businesses complete peace of mind. Our services include the installation of advanced CCTV systems, as well as live video monitoring, video surveillance, access control management, alarm monitoring, accounts management, and virtual assistant support.
          </p>
          <p className="section-text">
  We understand that every property and client has unique requirements, which is why our security solutions are customized to fit your specific needs. Using state-of-the-art technology, we deliver high-definition video, reliable performance, and seamless connectivity—keeping you in control around the clock.
          </p>

          {/* CALL BOX */}
          <motion.div
            className="call-box"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(255,60,0,0.4)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="call-icon">
              <FiPhoneCall size={28} />
            </div>
            <div className="call-details">
              <p>Call For Any Kind Of Services</p>
              <h3>+92150289316</h3>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="whatwedo-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div className="img-wrapper" whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
            <img src={serviceImg} className="whatwedo-main-img" alt="Security Services" />
          </motion.div>

          {/* STAT CARDS */}
          <motion.div
            className="wd-card card1"
            whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <FaUsers size={30} color="orange" />
            <h2>2,350+</h2>
            <p>Crime Prevention</p>
          </motion.div>

          <motion.div
            className="wd-card card2"
            whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <FaVideo size={30} color="orange" />
            <h2>4,600+</h2>
            <p>Cameras Monitored</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
