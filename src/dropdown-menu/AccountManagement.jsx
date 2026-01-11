import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./LiveVideoMonitoring.css";

import heroImg from "../service-drop-img/drop9.png";
import sectionImg from "../service-drop-img/drop10.png";
import advImg from "../service-drop-img/drop11.png";

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
    q: "What are account management services?",
    a: "Accounts management services involve tracking, analyzing, and reporting financial data to help businesses manage cash flow, expenses, and overall performance efficiently."
  },
  {
    q: "How can business accounts management help my company?",
    a: "Business accounts management ensures accurate financial records, better decision-making, and improved resource allocation, supporting long-term business growth."
  },
  {
    q: "Can live monitoring be used for offices and shopping centers?",
    a: "Yes, these services help prevent theft, monitor activity, and provide peace of mind with continuous oversight."
  },
  {
    q: "What is included in financial reporting services?",
    a: "Financial reporting services include preparing balance sheets, income statements, cash flow reports, and other essential documents that provide clear insights into business performance."
  },
  {
    q: "Are management accounting services useful for small businesses?",
    a: "Yes, management accounting services are highly beneficial for small businesses, offering customized solutions to improve efficiency, compliance, and financial control."
  }
];

const AccountManagement = () => {
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
        <h1 className="lvm-banner-title">Accounts Management Services</h1>
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
            Managing financial data each month can be challenging for growing businesses. Tycoon Guards provides professional accounts management services that streamline reporting and support smarter decision-making. Our dedicated team ensures every detail is accurately tracked, analyzed, and clearly presented to help drive effective business strategies.  </p>
              <br />
              <p>
             Our customized account management solutions go beyond tracking numbers to uncover key patterns and trends that drive growth. From financial account management and detailed reporting to client security account services, we provide clear insights into profits, sales performance, employee productivity, and overall business efficiency. Partnering with Tycoon Guards gives you access to reliable financial reporting services that enable strategic planning, maintain competitiveness, and support long-term success. </p>
            </div>
          </div>

          {/* SECTION 2 */}
          <section className="lvm-info-box">
            <h2>Why Outsource C-Store & Gas station Accounting Services to Tycoon Guards?</h2>

            <p>
        Outsourcing your management accounting to Tycoon Guards helps you save time, reduce costs, and access expert financial insights without the challenges of in-house management. Our services combine accuracy, transparency, and customized reporting, providing a clear view of your business performance. With our dependable account management solutions, you can concentrate on growth while we handle your financial data with precision and professionalism.    </p>

            <div className="info-lists">
              <ul>
                <li>Business Accounts Management</li>
                <li>Customized Financial Reporting</li>
                <li>Customized Accounting Solutions</li>
              </ul>

              <ul>
                <li>Professional Accounting Services</li>
                <li>Inventory Management</li>
                <li>24/7 Account Management Support</li>
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
                 <span>How Our Accounts Management </span> Services Work
              </h2>
              <p className="adv-desc">
              At Tycoon Guards, we offer professional accounts management services that simplify financial processes for businesses of all sizes. From business accounts management to advanced financial reporting, we provide complete visibility into your financial performance. By integrating accurate record-keeping, management accounting, and secure client account services, we empower you to make informed decisions that drive growth and operational efficiency. </p>
            </div>

            <div className="adv-left">
              <div className="adv-points">
                <div className="adv-point">
                  <div className="adv-icon"><MdOutlineComputer /></div>
                  <div>
                    <h4>Financial Reporting</h4>
                    <p>Clear, accurate insights into your business performance.</p>
                  </div>
                </div>

                <div className="adv-point">
                  <div className="adv-icon"><MdSupportAgent /></div>
                  <div>
                    <h4>Accounting Solutions</h4>
                    <p>Customized account management services for every need.</p>
                  </div>
                </div>

                <div className="adv-point">
                  <div className="adv-icon"><GiShield /></div>
                  <div>
                    <h4>Ongoing Oversight</h4>
                    <p>Continuous monitoring to ensure compliance and accuracy.</p>
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
              Real-Time  <span>Threat Monitoring</span>
            </h2>

            <p className="strategy-desc">
            Stay informed with advanced monitoring solutions that protect your property. Our approach provides continuous surveillance, timely alerts, and proactive measures to prevent potential risks.
            </p>

            {/* Cards */}
            <div className="strategy-card-grid">
              <div className="strategy-card reveal">
                <div className="strategy-icon"><RiAlertLine /></div>
                <h3>Monitoring Challenges</h3>
                <p>
                We address coverage gaps and potential vulnerabilities to provide thorough and reliable protection. </p>
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

export default AccountManagement;
