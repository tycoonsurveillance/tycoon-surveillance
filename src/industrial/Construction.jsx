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
    q: "Why is construction site video surveillance important?",
    a: "Construction sites often hold valuable equipment, tools, and materials. A construction site surveillance camera helps prevent theft, monitor worker activity, and ensure overall site safety.",
  },
  {
    q: "Can construction surveillance systems operate 24/7?",
    a: "Yes, our construction site remote video surveillance solutions provide round-the-clock monitoring with instant alerts for suspicious activity or unauthorized access.",
  },
  {
    q: "Do you offer tailored surveillance for different project sizes?",
    a: "Absolutely. Whether it is a small residential build or a large commercial development, we design customized construction surveillance systems to meet your security needs.",
  },
  {
    q: "How does live video surveillance benefit construction sites?",
    a: "Construction live video surveillance allows real-time monitoring of workers, equipment, and site conditions, giving managers full oversight and improved accountability.",
  },
  {
    q: "Are construction surveillance cameras durable for outdoor use?",
    a: "Yes, our construction surveillance cameras are built for tough environments, ensuring reliable performance in outdoor conditions, including dust, heat, and weather changes.",
  },
];

const Construction  = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="retail-page-wrapper">
      <section className="retail-page-hero">
        <h1>Construction Site Video Surveillance</h1>
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
             Construction site video surveillance is important for keeping building sites safe and secure. Properly placed cameras help prevent theft, monitor daily activities, and give real-time oversight of equipment, materials, and workers.
            </p>
            <p>
             A reliable system not only stops unauthorized access but also provides clear recorded footage for investigations. With live video and remote access, project managers can track progress and stay in control from anywhere. Whether for small projects or large construction sites, a trusted surveillance system helps protect assets, improve productivity, and keep the site safe.
            </p>
          </section>

          {/* EXPERT SECURITY */}
          <section className="retail-page-expert-section">
            <h2>
              <span>Trusted Security for </span> Every Jobsite
            </h2>

            <p className="retail-page-expert-desc">
             Keeping your construction site secure is key to preventing delays, theft, and safety issues. Our construction site surveillance solutions provide 24/7 protection with advanced cameras and smart monitoring features. From small residential projects to large developments, we create custom systems that protect equipment, materials, and workers while giving full visibility of your site.
            </p>

            <ul className="retail-page-expert-points">
              <li>
                <FaCheckCircle /> Real-time construction site surveillance with instant alerts to protect assets and reduce risks.
              </li>
              <li>
                <FaCheckCircle /> Dedicated to reliability, innovation, and long-term site safety.
              </li>
            </ul>

            <div className="retail-page-service-grid">
              <div className="retail-page-service-card">
                <div className="retail-page-icon-circle">
                  <FaVideo />
                </div>
                <h4>Advanced Site Surveillance</h4>
              </div>

              <div className="retail-page-service-card">
                <div className="retail-page-icon-circle">
                  <FaShieldAlt />
                </div>
                <h4>24/7 Remote Monitoring</h4>
              </div>

              <div className="retail-page-service-card">
                <div className="retail-page-icon-circle">
                  <FaCheckCircle />
                </div>
                <h4>Comprehensive Protection</h4>
              </div>
            </div>
          </section>

          {/* SUPERIOR PROTECTION */}
         <section className="retail-page-superior-section">
  <div className="retail-page-superior-img">
    <img src={sectionImg} alt="Superior protection" />
  </div>

  <div className="retail-page-superior-content">
    <h2>
      Comprehensive Site <span>Security</span>
    </h2>

    <p>
     Our construction site video surveillance services are designed for all types of job sites, from small residential builds to large developments. Using cameras and live remote monitoring, we provide full oversight to protect equipment, materials, and workers. With continuous monitoring and proactive alerts, we help keep your project safe, secure, and on schedule.
    </p>

    <ul>
      <li>
        <FaCheckCircle />
        <span> Advanced construction surveillance systems</span>
      </li>
      <li>
        <FaCheckCircle />
        <span> Reliable safety and peace of mind</span>
      </li>
    </ul>

    <div className="retail-page-highlight-box">
      <div className="icon">
        <FaShieldAlt />
      </div>
      <span>
       Dependable construction site protection
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

export default Construction ;
