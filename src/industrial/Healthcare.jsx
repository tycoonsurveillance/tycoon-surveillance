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

import heroImg from "../Services-Images/health1.png";
import sectionImg from "../Services-Images/health2.png";
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
    q: "Why is video surveillance important in hospitals?",
    a: "Video surveillance in hospitals improves patient safety, prevents unauthorized access, and helps staff monitor high-risk areas in real time. It also supports compliance with healthcare regulations.",
  },
  {
    q: "Can hospital surveillance cameras protect patient privacy?",
    a: "Yes, modern hospital security systems are designed with strict privacy protocols, ensuring hospital patient video monitoring is secure and compliant with healthcare standards.",
  },
  {
    q: "What areas of a hospital need surveillance the most?",
    a: "Common areas include entrances, emergency rooms, parking lots, pharmacies, ICUs, and staff-only sections where CCTV cameras in hospitals help enhance safety and prevent security breaches.",
  },
  {
    q: "Do healthcare surveillance systems offer real-time alerts?",
    a: "Absolutely. Our hospital security cameras and healthcare security systems provide instant alerts for suspicious activity, ensuring quick response and maximum protection.",
  },
  {
    q: "Can surveillance cameras integrate with existing hospital security technology?",
    a: "Yes, our healthcare security solutions are designed for seamless integration with existing hospital security technology, creating a complete and efficient hospital security system.",
  },
];

const Healthcare = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="retail-page-wrapper">
      <section className="retail-page-hero">
        <h1>Healthcare Video Surveillance Services</h1>
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
             Video surveillance in hospitals is important for keeping patients, staff, and facilities safe. Well-placed cameras provide real-time monitoring, prevent potential threats, and create a secure healthcare environment.
            </p>
            <p>
             A good hospital security system not only helps prevent incidents but also provides clear recorded footage for investigations. Healthcare facilities benefit from better patient safety, protection of assets, and staff accountability, while administrators can have peace of mind knowing everything is monitored. Whether for hospitals, clinics, or specialized centers, reliable hospital security solutions help ensure safety, compliance, and quality patient care.
            </p>
          </section>

          {/* EXPERT SECURITY */}
          <section className="retail-page-expert-section">
            <h2>
              <span>Trusted Security for</span> Every Healthcare Facility
            </h2>

            <p className="retail-page-expert-desc">
            Protecting hospitals and healthcare facilities is essential for the safety of patients, staff, and valuable medical assets. Our healthcare video surveillance services provide 24/7 monitoring with advanced cameras and smart features. From patient monitoring in care areas and emergency rooms to CCTV covering entrances, pharmacies, and parking areas, we design custom hospital security systems that improve safety, prevent risks, and keep the entire facility secure.
            </p>

            <ul className="retail-page-expert-points">
              <li>
                <FaCheckCircle /> Real-time hospital video monitoring with proactive alerts
              </li>
              <li>
                <FaCheckCircle />Committed to innovation, compliance, and patient safety
              </li>
            </ul>

            <div className="retail-page-service-grid">
              <div className="retail-page-service-card">
                <div className="retail-page-icon-circle">
                  <FaVideo />
                </div>
                <h4>Advanced healthcare security systems</h4>
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
      Trusted Healthcare  <span>Surveillance</span>
    </h2>

    <p>
     Protecting hospitals and healthcare facilities requires reliability and continuous oversight. Our hospital security systems are designed to deliver 24/7 monitoring, real-time alerts, and clear hospital video monitoring to safeguard patients, staff, and critical assets. With advanced hospital surveillance cameras, intelligent patient video monitoring systems, and modern healthcare security solutions, we help prevent unauthorized access, support patient safety, and maintain compliance across all medical environments.
    </p>

    <ul>
      <li>
        <FaCheckCircle />
        <span>Smart cameras in healthcare facilities</span>
      </li>
      <li>
        <FaCheckCircle />
        <span>Continuous patient safety monitoring</span>
      </li>
    </ul>

    <div className="retail-page-highlight-box">
      <div className="icon">
        <FaShieldAlt />
      </div>
      <span>
     Strong hospital security and protection
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

export default Healthcare;
