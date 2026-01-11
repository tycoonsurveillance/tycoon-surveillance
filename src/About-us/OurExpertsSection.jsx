import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./OurExpertsSection.css";

import img1 from "./about-imgs/about10.png";
import img2 from "./about-imgs/about11.png";
import img3 from "./about-imgs/about12.png";
import img4 from "./about-imgs/about13.png";

const teamMembers = [
  { name: "Arjun Khanna", role: "Technical Engineer", img: img1 },
  { name: "Cameron Williamson", role: "Security Specialist", img: img2 },
  { name: "Leslie Alexander", role: "Security Specialist", img: img3 },
  { name: "Michael Johnson", role: "Support Manager", img: img4 },
];

export default function OurExpertsSection() {
  return (
    <section className="experts-wrapper">
      <div className="experts-container">
        {/* LEFT: Tag + Title */}
        <div className="experts-left">
          <motion.p
            className="choose-tag"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            MEET OUR EXPERTS
          </motion.p>

          <motion.h2
            className="choose-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dedicated professionals <br />
            <span>behind your security</span>
          </motion.h2>
        </div>

        {/* RIGHT: Description + CTA */}
        <motion.div
          className="experts-right"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="experts-copy">
            Our team brings years of expertise in surveillance and security systems,
            delivering solutions that are advanced, reliable, and customized to your
            needs. With a commitment to excellence and client satisfaction, we work
            tirelessly to safeguard homes, businesses, and communities with trusted protection.
          </p>

          <motion.button
            className="experts-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started &rarr;
          </motion.button>
        </motion.div>
      </div>

      {/* TEAM GRID */}
      <motion.div
        className="experts-grid"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            className="experts-card"
            key={index}
            whileHover={{ scale: 1.05, y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.25)" }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="img-wrapper">
              <img src={member.img} alt={member.name} className="experts-img" />
              <div className="social-icons">
                <a href="#" className="social-icon"><FaFacebookF /></a>
                <a href="#" className="social-icon"><FaInstagram /></a>
                <a href="#" className="social-icon"><FaTwitter /></a>
              </div>
            </div>
            <h4 className="experts-name">{member.name}</h4>
            <p className="experts-role">{member.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
