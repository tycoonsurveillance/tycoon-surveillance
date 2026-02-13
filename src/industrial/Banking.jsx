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

import heroImg from "../Services-Images/banking.png";
import sectionImg from "../Services-Images/banking2.png";
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
    q: "Why are bank video surveillance systems important?",
    a: "Bank video surveillance systems are critical for protecting assets, customers, and staff by deterring theft, monitoring activity, and ensuring compliance with industry regulations.",
  },
  {
    q: "What features do modern bank surveillance cameras provide?",
    a: "Modern bank surveillance cameras include high-definition video, night vision, motion detection, and video analytics in banking to detect suspicious activities in real time.",
  },
  {
    q: "Can bank security camera systems help with fraud prevention?",
    a: "Yes, bank security camera systems play a key role in fraud prevention by monitoring transactions, capturing clear footage, and providing reliable evidence when needed.",
  },
  {
    q: "How does real-time bank surveillance monitoring improve safety?",
    a: "Real-time monitoring provides instant alerts for potential threats, enabling quick response and helping maintain a secure environment for customers and employees.",
  },
  {
    q: "Do banks need specialized CCTV systems?",
    a: "Yes, CCTV in banks must meet strict security requirements, offering continuous surveillance, secure storage of footage, and advanced monitoring to safeguard financial operations.",
  },
];

const Banking = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="retail-page-wrapper">
      <section className="retail-page-hero">
        <h1>Bank Video Surveillance for Maximum Security</h1>
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
             Bank video surveillance is important for keeping financial institutions, staff, and customers safe. A well-placed system provides real-time monitoring, helps prevent threats, and creates a secure environment for everyone.
            </p>
            <p>
             A good bank security system not only stops criminal activity but also provides clear footage for investigations. From teller areas to ATMs, these systems protect assets, improve safety, and help meet regulations. Whether for small branches or large banks, advanced surveillance is a smart way to ensure security, trust, and peace of mind.
            </p>
          </section>

          {/* EXPERT SECURITY */}
          <section className="retail-page-expert-section">
            <h2>
              <span>Trusted Security for</span>  Every Bank Branch
            </h2>

            <p className="retail-page-expert-desc">
            Protecting financial institutions is critical to maintaining trust, preventing fraud, and ensuring customer safety. Our bank video surveillance solutions are built to deliver continuous oversight with advanced bank surveillance cameras and intelligent monitoring systems. From ATMs and lobbies to vaults and teller stations, we design customized bank surveillance systems that secure assets, staff, and clients while providing complete visibility across every branch.
            </p>

            <ul className="retail-page-expert-points">
              <li>
                <FaCheckCircle /> Real-time bank monitoring with instant threat alerts
              </li>
              <li>
                <FaCheckCircle /> Focused on innovation, compliance, and long-term banking security.
              </li>
            </ul>

            <div className="retail-page-service-grid">
              <div className="retail-page-service-card">
                <div className="retail-page-icon-circle">
                  <FaVideo />
                </div>
                <h4>Advanced Bank Surveillance</h4>
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
      
Trusted Banking <span>Surveillance</span>
    </h2>

    <p>
     Safeguarding financial institutions requires precision and reliability. Our bank security camera systems are built to provide continuous monitoring, real-time alerts, and high-quality footage to protect assets, staff, and customers. With advanced bank surveillance cameras and intelligent video analytics, we help prevent fraud, enhance compliance, and create a secure environment across all banking operations.
    </p>

    <ul>
      <li>
        <FaCheckCircle />
        <span>Smart surveillance for banks</span>
      </li>
      <li>
        <FaCheckCircle />
        <span> Continuous fraud prevention</span>
      </li>
    </ul>

    <div className="retail-page-highlight-box">
      <div className="icon">
        <FaShieldAlt />
      </div>
      <span>
        Strong customer and asset protection.
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

export default Banking;
