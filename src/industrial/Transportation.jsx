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
    q: "Why are transportation video surveillance services important?",
    a: "Transportation video surveillance services help protect passengers, drivers, and cargo by deterring crime, monitoring activity in real-time, and providing clear evidence in case of incidents. They create a safer and more reliable travel experience.",
  },
  {
    q: "What types of transport security systems do you offer?",
    a: "We provide a range of transport security systems, including transportation security cameras, remote monitoring solutions, and advanced transport video surveillance services for buses, trains, fleets, and transit facilities.",
  },
  {
    q: "Can transport surveillance services improve passenger safety?",
    a: "Yes, our transport surveillance services ensure continuous monitoring of vehicles and stations. With real-time alerts and intelligent analytics, we can quickly identify risks and enhance passenger and staff safety.",
  },
  {
    q: "Do transportation video surveillance systems work 24/7?",
    a: "Absolutely. Our transportation security systems operate around the clock, delivering 24/7 transport video surveillance to safeguard vehicles, transit hubs, and logistics operations at all times.",
  },
  {
    q: "Are your transportation security cameras customizable for different needs?",
    a: "Yes, our transportation security cameras and systems are fully customizable. Whether you need solutions for public transit, private fleets, or logistics operations, we design transport video surveillance services tailored to your specific requirements.",
  },
];

const Transportation = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="retail-page-wrapper">
      <section className="retail-page-hero">
        <h1>Transportation Video Surveillance Services</h1>
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
              Keeping transportation networks safe is important for protecting passengers, staff, and assets. A good transportation video surveillance system provides real-time monitoring, prevents threats, and creates a secure environment for public and private transit.
            </p>
            <p>
              With advanced cameras and smart monitoring, our solutions help prevent crime, improve passenger safety, and provide clear footage for investigations. From buses and trains to stations, terminals, and depots, our transport surveillance services offer complete coverage and reliable oversight. Whether for large hubs or smaller fleets, professional transportation video surveillance helps make operations safer and more efficient.
            </p>
          </section>

          {/* EXPERT SECURITY */}
          <section className="retail-page-expert-section">
            <h2>
              <span>Trusted Security for </span>Every Transport Network
            </h2>

            <p className="retail-page-expert-desc">
    Keeping transportation hubs, fleets, and transit facilities safe requires reliable monitoring and proactive security. Our transportation video surveillance services provide 24/7 protection with advanced cameras and smart monitoring features. From buses, trains, and stations to warehouses, depots, and logistics sites, we create custom solutions that protect passengers, employees, and valuable assets.
            </p>

            <ul className="retail-page-expert-points">
              <li>
                <FaCheckCircle /> Real-time transportation video surveillance with instant alerts
              </li>
              <li>
                <FaCheckCircle /> Focused on reliability, innovation, and passenger safety
              </li>
            </ul>

            <div className="retail-page-service-grid">
              <div className="retail-page-service-card">
                <div className="retail-page-icon-circle">
                  <FaVideo />
                </div>
                <h4>Advanced transport surveillance systems</h4>
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
                <h4>Comprehensive Transport Protection</h4>
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
      
Reliable Transport <span> Security Solutions</span>
    </h2>

    <p>
     Our transportation video surveillance services and transport security systems are designed to protect passengers, staff, and valuable assets. With advanced monitoring technology and expert support, we ensure every journey is safer and more secure.


    </p>

    <ul>
      <li>
        <FaCheckCircle />
        <span> Continuous transport surveillance services for enhanced protection</span>
      </li>
      <li>
        <FaCheckCircle />
        <span>Smart, future-ready security technology</span>
      </li>
    </ul>

    <div className="retail-page-highlight-box">
      <div className="icon">
        <FaShieldAlt />
      </div>
      <span>
       Customized transportation security systems for fleets and transit hubs
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

export default Transportation;
