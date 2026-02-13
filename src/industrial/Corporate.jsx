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

import heroImg from "../Services-Images/carporate.png";
import sectionImg from "../Services-Images/carporate2.png";
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
    q: "What are corporate video surveillance systems?",
    a: "Corporate video surveillance systems use high-definition cameras, smart monitoring software, and integrated security solutions to protect offices, corporate campuses, and sensitive areas in real-time.",
  },
  {
    q: "How can corporate surveillance solutions improve workplace security?",
    a: "Corporate surveillance solutions provide continuous monitoring, instant alerts, and recorded footage to prevent theft, monitor employee activity, and maintain a safe work environment.",
  },
  {
    q: "What features do corporate security camera systems include?",
    a: "These systems include high-definition cameras, motion detection, remote access, cloud storage, and video analytics to enhance security and operational oversight.",
  },
  {
    q: "Can corporate surveillance services be customized?",
    a: "Yes, corporate surveillance services can be tailored to each office or facility, covering entry points, common areas, sensitive departments, and parking lots.",
  },
  {
    q: "How does 24/7 monitoring benefit corporate offices?",
    a: "24/7 monitoring ensures round-the-clock protection, immediate response to incidents, and continuous documentation of all activities for compliance and risk management.",
  },
];

const Corporate = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="retail-page-wrapper">
      <section className="retail-page-hero">
        <h1>Corporate Video Surveillance Services</h1>
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
              Keeping corporate offices, business complexes, and commercial properties safe is important for protecting assets, employees, and sensitive information. Our corporate video surveillance systems provide real-time monitoring, prevent potential threats, and create a secure environment for all business operations.
            </p>
            <p>
             A strong corporate security system not only stops unauthorized access but also provides clear footage for investigations. Companies can better protect employees and assets, while stakeholders have peace of mind knowing the premises are monitored. Whether for small offices or large campuses, professional corporate surveillance solutions are a smart way to ensure workplace security.
            </p>
          </section>

          {/* EXPERT SECURITY */}
          <section className="retail-page-expert-section">
            <h2>
              <span>Comprehensive Corporate </span> Video Surveillance Solutions
            </h2>

            <p className="retail-page-expert-desc">
          We specialize in customized corporate video surveillance solutions designed to meet the unique requirements of modern businesses. Our systems combine corporate security cameras, analytics, and 24/7 monitoring to create seamless corporate surveillance systems. Whether for offices, headquarters, or large corporate campuses, we ensure visibility and control across every corner of your facility.
            </p>

            <ul className="retail-page-expert-points">
              <li>
                <FaCheckCircle /> Enhanced accountability and workplace safety
              </li>
              <li>
                <FaCheckCircle /> Protection for sensitive data and physical assets
              </li>
            </ul>

            <div className="retail-page-service-grid">
              <div className="retail-page-service-card">
                <div className="retail-page-icon-circle">
                  <FaVideo />
                </div>
                <h4>Advanced Corporate Surveillance Systems</h4>
              </div>

              <div className="retail-page-service-card">
                <div className="retail-page-icon-circle">
                  <FaShieldAlt />
                </div>
                <h4>24/7 Monitoring & Support</h4>
              </div>

              <div className="retail-page-service-card">
                <div className="retail-page-icon-circle">
                  <FaCheckCircle />
                </div>
                <h4>Comprehensive Corporate Protection</h4>
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
      Advanced Technology for <span>Corporate Protection</span>
    </h2>

    <p>
     Our services go beyond traditional surveillance. Using intelligent corporate surveillance software, we provide analytics-driven insights, automated threat detection, and remote access for management teams. This ensures your corporate video surveillance is not only preventive but also adaptive to evolving risks.
    </p>

    <ul>
      <li>
        <FaCheckCircle />
        <span> AI-powered corporate surveillance services</span>
      </li>
      <li>
        <FaCheckCircle />
        <span> Cloud-enabled storage for easy access to video footage</span>
      </li>
    </ul>

    <div className="retail-page-highlight-box">
      <div className="icon">
        <FaShieldAlt />
      </div>
      <span>
       Scalable corporate security cameras for small to large enterprises
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

export default Corporate;
