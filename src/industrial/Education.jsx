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

import heroImg from "../Services-Images/education1.png";
import sectionImg from "../Services-Images/education2.png";
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
    q: "Why are school security camera systems important for campuses?",
    a: "School security camera systems help create a safe learning environment by monitoring entrances, classrooms, and common areas, deterring potential threats, and ensuring quick response during emergencies.",
  },
  {
    q: "Can university security cameras be customized for large campuses?",
    a: "Yes, university security cameras and campus security systems can be tailored to cover multiple buildings, outdoor spaces, and high-traffic zones, ensuring comprehensive coverage for staff and students.",
  },
  {
    q: "Do surveillance cameras in schools respect student privacy?",
    a: "Absolutely. Our school CCTV systems are designed to enhance security while complying with privacy regulations, focusing only on critical areas like entrances, hallways, and common spaces.",
  },
  {
    q: "How does real-time video surveillance in schools improve safety?",
    a: "With live monitoring and instant alerts, video surveillance cameras in schools allow administrators and security teams to respond quickly to suspicious activity or emergencies.",
  },
  {
    q: "Are classroom camera systems available for remote monitoring?",
    a: "Yes, classroom camera systems can be integrated with remote access, giving school administrators and authorized staff the ability to view live or recorded footage anytime for added security.",
  },
];

const Education = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="retail-page-wrapper">
      <section className="retail-page-hero">
        <h1>Education Video Surveillance Services</h1>
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
           School security camera systems are important for keeping students, staff, and school facilities safe. Well-placed CCTV cameras provide real-time monitoring, prevent threats, and create a safer learning environment.
            </p>
            <p>
             A good school CCTV system not only helps stop incidents but also provides clear footage for investigations. Schools and universities benefit from improved safety, reduced theft or vandalism, and constant oversight of classrooms, hallways, and campuses. Installing advanced video surveillance is a smart way to ensure safety, trust, and peace of mind.
            </p>
          </section>

          {/* EXPERT SECURITY */}
          <section className="retail-page-expert-section">
            <h2>
              <span>Trusted Security for </span> Every Education Facility
            </h2>

            <p className="retail-page-expert-desc">
             Protecting students, teachers, and school property is essential for creating a safe learning environment. Our education security systems provide continuous monitoring with advanced school security camera systems and intelligent surveillance features. From university security cameras and campus security systems to CCTV cameras for schools in classrooms, entrances, and hallways, we design tailored school camera systems that reduce risks, deter threats, and ensure safety across campuses.
            </p>

            <ul className="retail-page-expert-points">
              <li>
                <FaCheckCircle /> Real-time video surveillance in schools with instant alerts
              </li>
              <li>
                <FaCheckCircle /> Focused on innovation, reliability, and student safety
              </li>
            </ul>

            <div className="retail-page-service-grid">
              <div className="retail-page-service-card">
                <div className="retail-page-icon-circle">
                  <FaVideo />
                </div>
                <h4>Advanced Education Surveillance</h4>
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
                <h4>Comprehensive Campus Protection</h4>
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
      Dependable School <span>Security Support</span>
    </h2>

    <p>
    From security camera systems for schools to complete education security systems, we deliver reliable solutions backed by expert support. Our services are built on innovation, trust, and a commitment to safer schools.
    </p>

    <ul>
      <li>
        <FaCheckCircle />
        <span>24/7 surveillance in schools for complete safety</span>
      </li>
      <li>
        <FaCheckCircle />
        <span>Durable, future-ready technology</span>
      </li>
    </ul>

    <div className="retail-page-highlight-box">
      <div className="icon">
        <FaShieldAlt />
      </div>
      <span>
      Tailored school security solutions for institutions of all sizes
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

export default Education;
