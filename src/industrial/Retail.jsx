import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaVideo,
  FaShieldAlt,
  FaCheckCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./Retail.css";

import heroImg from "../assets/About-Image-1.png";
import sectionImg from "../assets/About-Image-1.png";
import logo from "../assets/logo.png";

const retailSectors = [
  "Gas Stations & C-Stores",
  "Supermarkets & Mini Marts",
  "Automobile",
  "Pharmacy",
  "Clothing & Apparel",
  "Jewelry & Luxury Goods",
  "Fast-Food & Restaurant",
  "Cosmetics & Beauty Stores",
  "Shopping Malls & Retail Plazas",
];

const faqData = [
  {
    q: "What is the best retail video surveillance system for my store?",
    a: "We provide retail video surveillance systems that are tailored to your store size and layout, ensuring complete coverage and clear monitoring to reduce risks and enhance security.",
  },
  {
    q: "Do you offer convenience store security cameras in Texas?",
    a: "Yes, we specialize in convenience store security cameras in Texas, providing reliable and affordable solutions designed to protect your customers, staff, and inventory.",
  },
  {
    q: "How can video surveillance help with loss prevention for convenience stores?",
    a: "Our advanced CCTV monitoring helps detect suspicious behavior, prevent theft, and improve overall loss prevention strategies.",
  },
  {
    q: "Are your store security systems affordable for small businesses?",
    a: "Absolutely. We provide affordable store security systems in TX that deliver powerful protection without straining your budget, perfect for small retail and convenience store owners.",
  },
  {
    q: "Can your retail video surveillance services provide continuous monitoring?",
    a: "Yes, our retail security services Texas include 24/7 video monitoring, instant alerts, and remote access features, ensuring your store is always under watch and protected.",
  },
];

const Retail = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="retail-page-wrapper">
      <section className="retail-page-hero">
        <h1>Retail Video Surveillance Services</h1>
      </section>

      <section className="retail-page-container">
        {/* SIDEBAR */}
        <aside className="retail-page-sidebar">
          <div className="retail-page-sidebar-card">
            <h4>Retail Sectors We Serve</h4>
            <ul>
              {retailSectors.map((item, i) => (
                <li key={i}>
                  <span>{item}</span>
                  <span className="retail-page-circle-icon">
                    <FaArrowRight />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="retail-page-contact-card">
            <div className="retail-page-contact-header">
              <img src={logo} alt="Tycoon Guards" className="retail-page-contact-logo" />
              <p className="retail-page-contact-help">
                Need help? We are here to help you
              </p>
            </div>

            <div className="retail-page-contact-rows">
              <a href="mailto:info@tycoonguards.com" className="retail-page-contact-row">
                <span className="retail-page-row-icon email">
                  <FaEnvelope />
                </span>
                <span>info@tycoonguards.com</span>
              </a>

              <a href="tel:+12816023421" className="retail-page-contact-row">
                <span className="retail-page-row-icon phone">
                  <FaPhoneAlt />
                </span>
                <span>+(1) 281 602 3421</span>
              </a>
            </div>
          </div>
        </aside>

        {/* CONTENT */}
        <main className="retail-page-content">
          {/* IMAGE + TEXT */}
          <section className="retail-page-image-text">
            <div className="retail-page-image-overlay">
              <img src={heroImg} alt="Retail Surveillance" />
              <span className="retail-page-grid-overlay" />
              <span className="retail-page-signal-overlay" />
            </div>

            <p>
              Installing a retail video surveillance system is important for keeping stores, staff, and customers safe. A well-placed system provides continuous monitoring, prevents theft, and creates a secure shopping environment.
            </p>
            <p>
              A good retail surveillance system not only helps stop shoplifting but also provides clear recorded footage for investigations. Store owners can protect their property and employees, while retailers can reduce losses. Whether it’s a small convenience store or a large retail chain, professional video surveillance solutions help ensure safety and protect your business.
            </p>
          </section>

          {/* EXPERT SECURITY */}
          <section className="retail-page-expert-section">
            <h2>
              <span>Expert Security Support</span> You Can Trust
            </h2>

            <p className="retail-page-expert-desc">
              Our comprehensive retail video surveillance services are designed
              to meet the unique needs of convenience stores, shopping centers,
              and retail chains. From real-time CCTV monitoring for shops, we
              deliver reliable protection with advanced technology. Our
              experienced team evaluates your store’s security requirements and
              delivers solutions tailored for loss prevention and continuous
              monitoring.
            </p>

            <ul className="retail-page-expert-points">
              <li>
                <FaCheckCircle /> 24/7 surveillance solutions with instant alerts
                for suspicious activity and loss prevention.
              </li>
              <li>
                <FaCheckCircle /> Committed to innovation, reliability, and peace
                of mind.
              </li>
            </ul>

            <div className="retail-page-service-grid">
              <div className="retail-page-service-card">
                <div className="retail-page-icon-circle">
                  <FaVideo />
                </div>
                <h4>Retail Surveillance Systems</h4>
              </div>

              <div className="retail-page-service-card">
                <div className="retail-page-icon-circle">
                  <FaShieldAlt />
                </div>
                <h4>Continuous Monitoring</h4>
              </div>

              <div className="retail-page-service-card">
                <div className="retail-page-icon-circle">
                  <FaCheckCircle />
                </div>
                <h4>Reliable Support</h4>
              </div>
            </div>
          </section>

          {/* SUPERIOR PROTECTION */}
          <section className="retail-page-superior-section">
            <div className="retail-page-superior-img">
              <img src={sectionImg} alt="Superior protection" loading="lazy" />
            </div>

            <div className="retail-page-superior-content">
              <h2>
                Superior <span>protection</span>
              </h2>

              <p>
                Our comprehensive retail video surveillance solutions are designed to
                meet the unique needs of retail stores, convenience shops, and shopping
                centers. From retail video surveillance systems to 24/7 in-store
                surveillance solutions, we help prevent theft, monitor activities, and
                ensure a secure shopping environment.
              </p>

              <ul>
                <li>
                  <FaCheckCircle />
                  <span>Advanced surveillance systems to protect your business.</span>
                </li>
                <li>
                  <FaCheckCircle />
                  <span>Committed to innovation, reliability, and peace of mind.</span>
                </li>
              </ul>

              <div className="retail-page-highlight-box">
                <div className="icon">
                  <FaShieldAlt />
                </div>
                <span>
                  Experience unmatched protection with our retail security services
                  Texas.
                </span>
              </div>
            </div>
          </section>

          {/* ENHANCED SECURITY */}
          {/* ENHANCED SECURITY */}
          <section className="enhanced-security-section">
            <h2>
              Enhanced <span>security</span>
            </h2>

            <div className="enhanced-steps">
              {[1, 2, 3].map((num) => (
                <div key={num} className="enhanced-step-item">
                  <span>{num}</span>
                  <div className="step-content">
                    <h4>
                      {num === 1
                        ? "Smart Monitoring"
                        : num === 2
                          ? "Reliable Protection"
                          : "Seamless Integration"}
                    </h4>
                    <p>
                      {num === 1
                        ? "Stay connected with real-time surveillance and remote access, ensuring 24/7 protection for your home, business, or industrial property."
                        : num === 2
                          ? "Our advanced security systems are built for durability and efficiency, providing long-term safety, peace of mind, and trusted performance."
                          : "Easily integrate our security solutions with your existing setup for a smooth, hassle-free, and comprehensive protection system."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>


          {/* FAQ */}
          <section className="retail-page-faq-section">
            <h2>
              Frequently <span>asked questions</span>
            </h2>

            {faqData.map((f, i) => (
              <div
                key={i}
                className={`retail-page-faq-item ${openFAQ === i ? "open" : ""}`}
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
              >
                <div className="retail-page-faq-q">
                  {f.q}
                  <MdKeyboardArrowDown />
                </div>
                <div className="retail-page-faq-a">{f.a}</div>
              </div>
            ))}
          </section>
        </main>
      </section>
    </div>
  );
};

export default Retail;
