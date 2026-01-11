import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaChevronDown,
  FaPaperPlane,
} from "react-icons/fa";

import "../styles/FooterContactBar.css";
import logo from "../assets/logo.png";

const Footer = () => {
  const [open, setOpen] = useState(null);
  const toggle = (name) => setOpen(open === name ? null : name);

  // Animation variants
  const fadeInUp = { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } };
  const fadeInLeft = { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } };

  return (
    <footer className="footer-root">
      {/* TOP BAR */}
      <motion.div
        className="footer-topbar"
        initial={{ opacity: 0, y: 50 }}
        whileInView={fadeInUp}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="footer-logo-box">
          <img src={logo} alt="Tycoon Guards" />
        </div>

        <div className="footer-contact-items">
          <motion.div
            className="footer-contact-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={fadeInUp}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="footer-icon">
              <FaPhoneAlt />
            </div>
            <div>
              <small>Phone number</small>
              <p>+92 3150289316</p>
            </div>
          </motion.div>

          <motion.div
            className="footer-contact-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={fadeInUp}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="footer-icon">
              <FaMapMarkerAlt />
            </div>
            <div>
              <small>Location</small>
              <p>1880 S Dairy Ashford Rd, Houston, TX</p>
            </div>
          </motion.div>

          <motion.div
            className="footer-contact-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={fadeInUp}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="footer-icon">
              <FaEnvelope />
            </div>
            <div>
              <small>Email address</small>
              <p>tycoonsurveillance@gmail.com</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* MAIN FOOTER */}
      <motion.div
        className="footer-main"
        initial={{ opacity: 0, y: 50 }}
        whileInView={fadeInUp}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* ABOUT */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={fadeInUp}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h4>About Tycoon Guards</h4>
          <p>
            Tycoon Serveillance provides clients with reliable security measures
            for their physical locations, without requiring active monitoring.
            We aim to deliver optimal security with a focus on customer satisfaction.
          </p>

          <div className="footer-socials">
            {[<FaFacebookF />, <FaInstagram />, <FaXTwitter />].map((icon, idx) => (
              <motion.span key={idx} whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}>
                {icon}
              </motion.span>
            ))}
          </div>

          <h4>Subscribe</h4>
          <p>Stay updated with the latest security trends.</p>

          <div className="subscribe-box">
            <input type="email" placeholder="Enter Your Email" />
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <FaPaperPlane />
            </motion.button>
          </div>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={fadeInUp}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h4>Quick Link</h4>
          <ul>
            <li onClick={() => toggle("services")}>
              <span>Services</span>
              <FaChevronDown className={open === "services" ? "rotate" : ""} />
            </li>
            {open === "services" && (
              <ul className="footer-dropdown">
                <li><Link to="/live-video-monitoring">Live Video Monitoring</Link></li>
                <li><Link to="/video-surveillance">Video Surveillance</Link></li>
                <li><Link to="/access-control">Access Control</Link></li>
                <li><Link to="/alarm-monitoring">Alarm Monitoring</Link></li>
                <li><Link to="/account-management">Account Management</Link></li>
                <li><Link to="/virtual-assistant">Virtual Assistant</Link></li>
              </ul>
            )}

            <li onClick={() => toggle("industry")}>
              <span>Industry</span>
              <FaChevronDown className={open === "industry" ? "rotate" : ""} />
            </li>
            {open === "industry" && (
              <ul className="footer-dropdown">
                <li><Link to="/retail">Retail</Link></li>
                <li><Link to="/construction">Construction</Link></li>
                <li><Link to="/banking">Banking</Link></li>
                <li><Link to="/healthcare">Healthcare</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/hospitality">Hospitality</Link></li>
                <li><Link to="/transportation">Transportation</Link></li>
                <li><Link to="/corporate">Corporate</Link></li>
              </ul>
            )}

            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
          </ul>
        </motion.div>

        {/* Keep the rest of the footer columns unchanged */}
        <motion.div className="footer-col" initial={{ opacity: 0, y: 30 }} whileInView={fadeInUp} viewport={{ once: true, amount: 0.3 }}>
          <h4>Services</h4>
          <ul>
            <li><Link to="/live-video-monitoring">Live Video Monitoring</Link></li>
            <li><Link to="/video-surveillance">Video Surveillance</Link></li>
            <li><Link to="/access-control">Access Control</Link></li>
            <li><Link to="/alarm-monitoring">Alarm Monitoring</Link></li>
            <li><Link to="/account-management">Accounts Management</Link></li>
            <li><Link to="/virtual-assistant">Virtual Assistant</Link></li>
          </ul>
        </motion.div>

        <motion.div className="footer-col" initial={{ opacity: 0, y: 30 }} whileInView={fadeInUp} viewport={{ once: true, amount: 0.3 }}>
          <h4>Industry Solution</h4>
          <ul>
            <li><Link to="/retail">Retail</Link></li>
            <li><Link to="/corporate">Corporate</Link></li>
            <li><Link to="/transportation">Transportation</Link></li>
            <li><Link to="/hospitality">Hospitality</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/healthcare">Healthcare</Link></li>
            <li><Link to="/banking">Banking</Link></li>
            <li><Link to="/construction">Construction</Link></li>
          </ul>
        </motion.div>

        <motion.div className="footer-col" initial={{ opacity: 0, y: 30 }} whileInView={fadeInUp} viewport={{ once: true, amount: 0.3 }}>
          <h4>Resources</h4>
          <ul>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </motion.div>
      </motion.div>

      {/* BOTTOM */}
      <motion.div className="footer-bottom" initial={{ opacity: 0, y: 30 }} whileInView={fadeInUp} viewport={{ once: true, amount: 0.3 }}>
        <p>Copyright © 2025 All Rights Reserved | Design by <span>Brands Design</span></p>

        <div className="footer-bottom-links">
          <Link to="/help">Help</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
