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
    q: "Do hotels use security cameras?",
    a: "Yes, most hotels use hotel security cameras in common areas such as entrances, lobbies, hallways, elevators, and parking lots. These hotel surveillance systems are designed to protect guests, staff, and property while maintaining privacy.",
  },
  {
    q: "Are there cameras inside hotel rooms?",
    a: "No. Hotel cameras in rooms are not allowed in private guest rooms. However, hotel room security cameras may be placed in hallways, corridors, and other public-facing areas to ensure safety without invading guest privacy.",
  },
  {
    q: "What is the role of a security system in the hotel industry?",
    a: "A security system in the hotel industry provides real-time monitoring, deters potential threats, and safeguards both guests and staff. Modern hotel security systems include CCTV, smart alerts, and continuous monitoring services.",
  },
  {
    q: "Do restaurants need surveillance systems?",
    a: "Yes, a restaurant security camera system helps monitor dining areas, kitchens, cash counters, and entrances. This not only prevents theft but also improves staff accountability and enhances guest safety.",
  },
  {
    q: "What are hospitality surveillance solutions?",
    a: "Hospitality surveillance solutions refer to customized monitoring systems for hotels and restaurants. These include hotel CCTV, hotel surveillance cameras, and intelligent monitoring tools that provide 24/7 protection across hospitality facilities.",
  },
];

const Hospitality = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="retail-page-wrapper">
      <section className="retail-page-hero">
        <h1>Hospitality Surveillance Solutions for Hotels and Resort</h1>
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
             In the hospitality industry, safety and trust are very important. Modern surveillance solutions help hotels and restaurants stay secure with 24/7 monitoring and real-time visibility. With reliable systems, property owners can protect their premises without worrying about complicated installation.
            </p>
            <p>
             Our services focus on hotel security systems that keep guests, staff, and assets safe. Using intelligent cameras and high-definition CCTV, hotels can monitor entrances, lobbies, hallways, and parking areas. For restaurants, custom security camera systems help prevent theft, track operations, and ensure guest safety at all times.
            </p>
          </section>

          {/* EXPERT SECURITY */}
          <section className="retail-page-expert-section">
            <h2>
              <span>Trusted Security for</span>  Every Hospitality Facility
            </h2>

            <p className="retail-page-expert-desc">
             Keeping guests, staff, and property safe is essential for a secure and welcoming environment. Our hospitality surveillance solutions provide 24/7 monitoring with advanced cameras and smart security features. From hotel cameras in lobbies and hallways to restaurant cameras in dining areas and kitchens, we create custom systems that reduce risks, prevent threats, and ensure safety across the hospitality industry.
            </p>

            <ul className="retail-page-expert-points">
              <li>
                <FaCheckCircle /> Real-time video surveillance for hotels and restaurants with instant alerts
              </li>
              <li>
                <FaCheckCircle /> Focused on innovation, reliability, and guest safety
              </li>
            </ul>

            <div className="retail-page-service-grid">
              <div className="retail-page-service-card">
                <div className="retail-page-icon-circle">
                  <FaVideo />
                </div>
                <h4>Smart Hotel CCTV & Monitoring Solutions</h4>
              </div>

              <div className="retail-page-service-card">
                <div className="retail-page-icon-circle">
                  <FaShieldAlt />
                </div>
                <h4>24/7 Surveillance & Support</h4>
              </div>

              <div className="retail-page-service-card">
                <div className="retail-page-icon-circle">
                  <FaCheckCircle />
                </div>
                <h4>Comprehensive Hotel & Resort Protection</h4>
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
      
Why Hotels Need Advanced  <span>Security Systems</span>
    </h2>

    <p>
    Hotels welcome hundreds of guests daily, making them a prime target for theft, trespassing, or unauthorized access. A well-planned security system in the hotel industry ensures continuous monitoring and peace of mind. By installing hotel surveillance systems and hotel security cameras, management can:
    </p>

    <ul>
      <li>
        <FaCheckCircle />
        <span>Monitor entrances, lobbies, and parking areas 24/7</span>
      </li>
      <li>
        <FaCheckCircle />
        <span> Prevent unauthorized access to guest-only zones</span>
      </li>
          <li>
        <FaCheckCircle />
        <span> Protect valuable guest belongings and hotel property</span>
      </li>
    </ul>
    

    <div className="retail-page-highlight-box">
      <div className="icon">
        <FaShieldAlt />
      </div>
      <span>
       Improve staff accountability and efficiency
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

export default Hospitality;
