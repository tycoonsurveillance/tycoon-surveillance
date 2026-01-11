import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./LiveVideoMonitoring.css";

import heroImg from "../service-drop-img/drop12.png";
import sectionImg from "../service-drop-img/drop13.png";
import advImg from "../service-drop-img/drop14.png";

import { RiAlertLine } from "react-icons/ri";  // Real-Time Threat
import { GiShield } from "react-icons/gi";     // Monitoring Challenges
import { MdOutlineComputer, MdSupportAgent } from "react-icons/md"; // Advanced Surveillance Icons
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const services = [
  { label: "Live Video Monitoring", path: "/live-video-monitoring" },
  { label: "Video Surveillance", path: "/video-surveillance" },
  { label: "Access Control", path: "/access-control" },
  { label: "Alarm Monitoring", path: "/alarm-monitoring" },
  { label: "Account Management", path: "/account-management" },
  { label: "Virtual Assistant", path: "/virtual-assistant" },
];

const faqData = [
  {
    q: "What can a virtual assistant for small businesses do?",
    a: "A virtual assistant for small businesses can handle tasks like email management, scheduling, data entry, and customer service, helping owners save time and focus on growth."
  },
  {
    q: "Are Texas-based virtual assistant services affordable?",
    a: "Yes, our Texas-based virtual assistant services are cost-effective, offering reliable business admin support services tailored to fit the budgets of growing businesses."
  },
  {
    q: "How do online virtual assistant services in Texas work?",
    a: "Our online virtual assistant services in Texas operate remotely, giving you access to skilled professionals who manage daily operations through secure digital tools and platforms."
  },
  {
    q: "Can a virtual assistant for customer service help my business?",
    a: "Absolutely. A virtual assistant for customer service ensures your clients receive prompt responses, professional support, and consistent communication, improving customer satisfaction."
  },
  {
    q: "Why choose Tycoon Guards for virtual assistant services USA?",
    a: "Tycoon Guards provides some of the best virtual assistant services in TX and the USA, combining affordability, professionalism, and customized solutions for entrepreneurs and small businesses."
  }
];

const VirtualAssistant = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lvm-page">
      {/* Banner */}
      <section className="lvm-banner">
        <h1 className="lvm-banner-title">Virtual Assistant Services</h1>
      </section>

      <div className="lvm-layout">
        {/* Sidebar */}
        <aside className="lvm-sidebar">
          <div className="svc-card">
            <h4 className="svc-card-title">Our Services</h4>
            <ul className="svc-list">
              {services.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      "svc-item" + (isActive ? " active" : "")
                    }
                  >
                    <span>{item.label}</span>
                    <span className="svc-icon">→</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lvm-content">
            {/* Contact */}
            <div className="contact-card">
              <div className="contact-top">
                <div className="contact-logo">TG</div>
                <p className="contact-help">Need help? We are here to help you</p>
              </div>

              <div className="contact-rows">
                <a className="contact-row" href="mailto:info@tycoonguards.com">
                  <span className="row-icon"><AiOutlineMail /></span>
                  <span>info@tycoonguards.com</span>
                </a>

                <a className="contact-row" href="tel:+12816023421">
                  <span className="row-icon"><AiOutlinePhone /></span>
                  <span>+(1) 281 602 3421</span>
                </a>
              </div>
            </div>

            
          </div>
        </aside>

        {/* Main Content */}
        <main className="lvm-content">
          {/* TOP SECTION */}
          <div className="hero-grid">
            <div className="hero-img-wrapper">
              <img className="hero-image" src={heroImg} alt="Monitoring operator" />
            </div>

            <div className="hero-text">
              <p>
            Virtual assistant services are increasingly important for small businesses seeking to save time, optimize operations, and remain competitive. A proficient virtual assistant can manage routine tasks such as administrative support, email management, scheduling, and customer service, allowing business owners to focus on growth and strategic priorities. With dependable assistance, businesses improve efficiency, boost productivity, and gain peace of mind.  </p>
              <br />
              <p>
             Partnering with a Texas-based virtual assistant service offers both local expertise and cost-effective solutions. From customer service support to professional virtual assistant services, businesses receive customized solutions tailored to their needs. Whether you’re looking for online virtual assistant services in Texas or top-quality virtual assistant support, outsourcing is a smart way to enhance efficiency and achieve long-term success. </p>
            </div>
          </div>

          {/* SECTION 2 */}
          <section className="lvm-info-box">
            <h2>Why We Are Among the Top Virtual Assistant Services in Texas</h2>

            <p>
          Tycoon Serveillance is recognized for delivering top virtual assistant services in Texas, trusted by entrepreneurs and small businesses statewide. Our experienced team provides reliable, cost-effective support, handling everything from business administration to customer service. With an emphasis on professionalism and flexibility, we offer customized solutions that help businesses grow and succeed.  </p>

            <div className="info-lists">
              <ul>
                <li>Tailored VA Solutions</li>
                <li>Admin Support Services</li>
                <li>Customer Service Help</li>
              </ul>

              <ul>
                <li>Customer Service Assistance</li>
                <li>Affordable VA Options</li>
                <li>24/7 Online VA Support</li>
              </ul>
            </div>

            <div className="info-img-wrapper">
              <img src={sectionImg} className="info-image" alt="Security Operator" />
            </div>
          </section>

          {/* SECTION 3 — ADVANCED SURVEILLANCE */}
          <section className="lvm-adv-section">
            <div className="adv-header">
              <h2 className="adv-title">
                 <span>Tailored Virtual </span> Assistant Solutions for Every Business
              </h2>
              <p className="adv-desc">
             Enhance productivity and streamline your business operations with our specialized Virtual Assistant services. Designed for busy entrepreneurs and growing businesses, we offer a variety of administrative support, including calendar management, email handling, data entry, and customer service. Recognizing that every business has unique requirements, we collaborate closely with you to create tailored solutions that align with your goals. By entrusting these time-consuming tasks to our skilled Virtual Assistants, you can focus on strategic initiatives, creative projects, and other critical areas that drive your business forward. </p>
            </div>

            <div className="adv-left">
              <div className="adv-points">
                <div className="adv-point">
                  <div className="adv-icon"><MdOutlineComputer /></div>
                  <div>
                    <h4>Task Management</h4>
                    <p>Efficient handling of calendars, scheduling, and reminders.</p>
                  </div>
                </div>

                <div className="adv-point">
                  <div className="adv-icon"><MdSupportAgent /></div>
                  <div>
                    <h4>Email Support</h4>
                    <p>Organized inbox management with timely responses.</p>
                  </div>
                </div>

                <div className="adv-point">
                  <div className="adv-icon"><GiShield /></div>
                  <div>
                    <h4>Customer Assistance</h4>
                    <p>Professional virtual assistant for customer service needs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="adv-right">
              <img src={advImg} alt="surveillance" className="adv-image" />
            </div>
          </section>

          {/* SECTION 4 — SECURITY STRATEGY + SECOND FAQ */}
          <section className="strategy-section reveal">
            <h2 className="strategy-title">
              Real-Time Threat <span>Monitoring</span>
            </h2>

            <p className="strategy-desc">
             Stay informed with advanced monitoring designed to keep your property safe. Our approach ensures continuous observation, timely alerts, and proactive prevention of potential risks. </p>

            {/* Cards */}
            <div className="strategy-card-grid">
              <div className="strategy-card reveal">
                <div className="strategy-icon"><RiAlertLine /></div>
                <h3>Monitoring Challenges</h3>
                <p>
                  We address coverage gaps and potential vulnerabilities to provide thorough and reliable protection.
                </p>
              </div>

              <div className="strategy-card reveal">
                <div className="strategy-icon"><GiShield /></div>
                <h3>Security Strategy</h3>
                <p>
                 A tailored monitoring approach delivers complete coverage, ongoing supervision, and effective measures to ensure safety and peace of mind.
                </p>
              </div>
            </div>

            {/* Bullet Points */}
            <div className="strategy-bullets">
              <div className="bullet"><span>✔</span> Experience live monitoring with high-definition video, night vision, and motion detection for reliable security.</div>
              <div className="bullet"><span>✔</span>Seamlessly connect your monitoring system for remote access and continuous protection anytime, anywhere..</div>
            </div>

            {/* SECOND FAQ SECTION */}
            <h2 className="faq-title reveal">
              <span>Frequently</span> Asked Questions
            </h2>

            <div className="faq-wrapper">
              {faqData.map((item, i) => (
                <div
                  key={i}
                  className={`faq-card ${openFAQ === i ? "open" : ""}`}
                  onClick={() => toggleFAQ(i)}
                >
                  <div className="faq-question">
                    <h3>{item.q}</h3>
                    <span className="faq-icon">{openFAQ === i ? "−" : "+"}</span>
                  </div>

                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
export default VirtualAssistant;
