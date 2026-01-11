import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./LiveVideoMonitoring.css";

import heroImg from "../service-drop-img/drop7.png";
import sectionImg from "../service-drop-img/drop8.png";
import advImg from "../Services-Images/Advanced Surveillance.png";

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
    q: "What types of properties do you provide alarm monitoring for?",
    a: "We provide professional alarm monitoring for residential homes, commercial buildings, offices, and industrial properties across Texas."
  },
  {
    q: "How does your alarm monitoring service work?",
    a: "Our team uses modern alarm and fire monitoring systems to provide real-time alerts, continuous oversight, and detailed activity logs to ensure safety and security."
  },
  {
    q: "Can your alarm monitoring service be customized?",
    a: "Yes, we tailor our monitoring solutions to each client’s needs, including system placement, response protocols, and monitoring schedules."
  },
  {
    q: "Do you offer 24/7 monitoring?",
    a: "Absolutely. Our alarm monitoring services operate around the clock to provide continuous protection and immediate response to any alerts."
  },
  {
    q: "Is your service affordable for small businesses and homeowners?",
    a: "Yes, we offer professional and cost-effective alarm monitoring solutions that ensure high-quality security without compromising your budget."
  }
];

const AlarmMonitoring = () => {
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
        <h1 className="lvm-banner-title">Alarm Monitoring Services</h1>
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
            A reliable alarm monitoring service is key to keeping homes, businesses, and public spaces safe. A good system provides continuous monitoring, helps prevent threats, and keeps people and property secure.</p>
              <br />
              <p>
            A complete fire alarm monitoring system not only helps prevent emergencies but also sends instant alerts and records activity to support quick responses. Businesses can better protect employees and assets, while homeowners can feel confident that their family and property are always monitored. Whether for homes, offices, or industrial sites, professional alarm monitoring services provide proactive protection and reliable security.</p>
            </div>
          </div>

          {/* SECTION 2 */}
          <section className="lvm-info-box">
            <h2>Why Choose Professional Alarm Monitoring</h2>

            <p>
           Professional alarm monitoring services deliver continuous protection for homes, offices, and commercial properties. By leveraging modern alarm systems and fire alarm monitoring solutions, clients benefit from real-time alerts, rapid response capabilities, and detailed monitoring logs. With strategic system placement, seamless integration, and ongoing supervision, this service provides a dependable solution for enhanced safety, control, and peace of mind. </p>

            <div className="info-lists">
              <ul>
                <li>Monitored Fire Alarm System</li>
                <li>Fire Safety Alarm</li>
                <li>Customized Commercial Solutions</li>
              </ul>

              <ul>
                <li>Automated Fire Warning System</li>
                <li>Smart Fire Detection</li>
                <li>24/7 Security Oversight</li>
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
                 <span> Why We Are a Leading </span> Alarm Monitoring Company
              </h2>
              <p className="adv-desc">
              Tycoon Guards is known for delivering some of the most dependable alarm monitoring services in Texas, trusted by homeowners, businesses, and commercial properties statewide. Our skilled team provides professional and cost-effective surveillance monitoring, including fire alarm monitoring as well as residential and commercial alarm system oversight. With an emphasis on accuracy, continuous supervision, and customized solutions, we offer a comprehensive alarm security monitoring service that ensures safety, peace of mind, and reliable protection for every client.</p>
            </div>

            <div className="adv-left">
              <div className="adv-points">
                <div className="adv-point">
                  <div className="adv-icon"><MdOutlineComputer /></div>
                  <div>
                    <h4>Trusted Monitoring</h4>
                    <p>Reliable alarm monitoring services protecting homes, businesses, and commercial properties.</p>
                  </div>
                </div>

                <div className="adv-point">
                  <div className="adv-icon"><MdSupportAgent /></div>
                  <div>
                    <h4>Professional & Affordable</h4>
                    <p>Skilled team providing expert surveillance and fire alarm monitoring solutions.</p>
                  </div>
                </div>

                <div className="adv-point">
                  <div className="adv-icon"><GiShield /></div>
                  <div>
                    <h4>Peace of Mind</h4>
                    <p>Comprehensive security ensuring safety for people, property, and operations.</p>
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
              Real-Time <span> Threat Monitoring</span>
            </h2>

            <p className="strategy-desc">
            Stay informed with advanced monitoring designed to keep your property safe. Our approach ensures continuous observation, timely alerts, and proactive prevention of potential risks.
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

export default AlarmMonitoring;
