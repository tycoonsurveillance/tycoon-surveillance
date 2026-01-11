import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./LiveVideoMonitoring.css";

import heroImg from "../service-drop-img/drop4.png";
import sectionImg from "../service-drop-img/drop5.png";
import advImg from "../service-drop-img/drop6.png";

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
    q: "What is an access control management system?",
    a: "An access control management system is a security solution that monitors and regulates entry to properties, ensuring only authorized individuals can access specific areas."
  },
  {
    q: "What is access control surveillance?",
    a: "Access control management software allows property owners or security teams to configure permissions, track access in real-time, and generate detailed logs for audits and reporting."
  },
  {
    q: "What is access control surveillance?",
    a: "Access control surveillance combines monitoring cameras and entry systems to continuously observe access points, detect unauthorized attempts, and enhance overall security."
  },
  {
    q: "Can access control systems be used for businesses?",
    a: "Yes, businesses benefit from access control management systems to protect employees, assets, and sensitive areas, while maintaining detailed activity records for accountability.",
  },
  {
    q: "Are access control solutions effective 24/7?",
    a: "Absolutely. Modern access control management systems with integrated access control surveillance provide continuous monitoring and instant alerts to ensure complete protection at all times."
  }
];

const AccessControl = () => {
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
        <h1 className="lvm-banner-title">Access Control Management</h1>
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
            Installing an access control system is an important step to keep homes, businesses, and public spaces safe. A good system lets you monitor access in real time, stops unauthorized entry, and creates a secure environment for people and property.  </p>
              <br />
              <p>
             A reliable access control service not only prevents security breaches but also keeps detailed logs that help with audits and investigations. Businesses can better protect employees and assets, while homeowners can feel confident that their family and property are safe. Whether for homes, offices, or industrial spaces, professional access control services provide proactive safety and security.</p>
            </div>
          </div>

          {/* SECTION 2 */}
          <section className="lvm-info-box">
            <h2>Advanced Access Control Management Solutions</h2>

            <p>
         Our solutions use a strong access control system to manage entry in homes, offices, and businesses. The system includes software that lets you track access in real time, generate detailed reports, and easily set permissions. With reliable monitoring, these systems provide continuous oversight, secure entry, and better protection for people and property.  </p>

            <div className="info-lists">
              <ul>
                <li>✔ Next-Generation Access Systems</li>
                <li>✔ Continuous Surveillance</li>
                <li>✔ Immediate Access Alerts</li>
              </ul>

              <ul>
                <li>✔ Integrated Security Management</li>
                <li>✔ Tailored Business Solutions</li>
                <li>✔ Reliable Access Oversight</li>
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
                 <span>Modern Access Control </span> Management Systems
              </h2>
              <p className="adv-desc">
              Our security solutions offer advanced access control management services designed for residential and commercial properties. By utilizing modern access control systems and integrated monitoring solutions, we ensure comprehensive protection through secure entry management, real-time access tracking, and detailed activity logs. Strategic system placement, seamless integration, and continuous oversight provide clients with a complete access control service that enhances safety, accountability, and operational efficiency.</p>
            </div>

            <div className="adv-left">
              <div className="adv-points">
                <div className="adv-point">
                  <div className="adv-icon"><MdOutlineComputer /></div>
                  <div>
                    <h4>Real-Time Access</h4>
                    <p>Professional access control surveillance services for homes, offices, and industrial sites.</p>
                  </div>
                </div>

                <div className="adv-point">
                  <div className="adv-icon"><MdSupportAgent /></div>
                  <div>
                    <h4>Customized Access</h4>
                    <p>Tailored access control services with 24/7 monitoring and remote management capabilities.</p>
                  </div>
                </div>

                <div className="adv-point">
                  <div className="adv-icon"><GiShield /></div>
                  <div>
                    <h4>Continuous Oversight</h4>
                    <p>Reliable access control system services with instant alerts and full property coverage.</p>
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
              Real-Time <span>Threat Monitoring</span>
            </h2>

            <p className="strategy-desc">
           Stay informed with advanced monitoring solutions that safeguard your property. Our approach provides continuous surveillance, timely alerts, and proactive measures to prevent potential risks.
            </p>

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

export default AccessControl;
