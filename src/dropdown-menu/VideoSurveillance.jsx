import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./LiveVideoMonitoring.css";

import heroImg from "../service-drop-img/drop1.png";
import sectionImg from "../service-drop-img/drop2.png";
import advImg from "../service-drop-img/drop3.png";

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
    q: "What is Video Surveillance?",
    a: "A video surveillance system utilizes high-definition cameras, motion detection, and remote access capabilities to monitor and secure residential, commercial, and industrial properties in real-time."
  },
  {
    q: "How 24/7 Monitoring Helps?",
    a: "24/7 remote camera monitoring allows property owners and security personnel to access live footage anytime, from anywhere, ensuring continuous surveillance and prompt response to potential threats."
  },
  {
    q: "Benefits of Smart Home Integration?",
    a: "Integrating video surveillance with smart home systems enables automated security features, remote access via smartphones, and seamless coordination with other smart devices for enhanced protection."
  },
  {
    q: "Effective for Business Loss Prevention?",
    a: "Yes, video surveillance services are crucial for loss prevention in businesses, deterring theft, monitoring employee and customer activity, and providing evidence for investigations."
  },
  {
    q: "How Night Vision and Motion Detection Help?",
    a: "Night vision allows cameras to capture clear footage in low-light conditions, while motion detection alerts security personnel to unusual activity, enhancing overall surveillance effectiveness."
  }
];

const VideoSurveillance = () => {
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
        <h1 className="lvm-banner-title">Video Surveillance Services</h1>
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
              <p>A good video surveillance system is important for keeping homes, businesses, and public areas safe. A well-designed system lets you watch in real time, stops potential threats, and creates a secure environment for people and property.
              </p>
              <br />
              <p>
                Using a complete video surveillance system not only helps prevent crime but also provides clear recorded footage that can help in investigations. Businesses can protect their employees and assets, while homeowners can feel confident that their family and property are safe. Whether for homes, offices, or industrial spaces, professional video surveillance services offer reliable and proactive security. </p>
            </div>
          </div>

          {/* SECTION 2 */}
          <section className="lvm-info-box">
            <h2>Why Choose Professional Video Monitoring</h2>

            <p>
              Expert video surveillance services ensure homes, offices, and commercial properties are continuously protected. Utilizing modern video surveillance systems with high-definition cameras, motion detection, and remote access capabilities, clients benefit from accurate monitoring and timely alerts. Strategic placement, seamless integration, and real-time observation make this video surveillance monitoring service a reliable solution for enhanced safety, control, and peace of mind.  </p>

            <div className="info-lists">
              <ul>
                <li>✔ Advanced Video Surveillance</li>
                <li>✔ Reliable and Durable Monitoring</li>
                <li>✔ Real-Time Monitoring</li>
              </ul>

              <ul>
                <li>✔ Seamless System Integration</li>
                <li>✔ Business Security Systems</li>
                <li>✔ 24/7 Remote Camera Monitoring</li>
              </ul>
            </div>

            <div className="info-img-wrapper">
              <img src={sectionImg} className="info-image" alt="Security Operator" loading="lazy" />
            </div>
          </section>

          {/* SECTION 3 — ADVANCED SURVEILLANCE */}
          <section className="lvm-adv-section">
            <div className="adv-header">
              <h2 className="adv-title">
                <span> How Our </span> Video Surveillance Services Work
              </h2>
              <p className="adv-desc">
                Our security solutions provide advanced video surveillance for homes and businesses. We offer modern systems with high-definition cameras, motion detection, and remote access to keep your property fully protected. By placing cameras strategically, integrating systems smoothly, and offering real-time monitoring, we give our clients complete surveillance services that improve safety, control, and peace of mind. </p>
            </div>

            <div className="adv-left">
              <div className="adv-points">
                <div className="adv-point">
                  <div className="adv-icon"><MdOutlineComputer /></div>
                  <div>
                    <h4>Real-Time Surveillance</h4>
                    <p>Professional video surveillance monitoring services for all properties</p>
                  </div>
                </div>

                <div className="adv-point">
                  <div className="adv-icon"><MdSupportAgent /></div>
                  <div>
                    <h4>Tailored Protection</h4>
                    <p>Customized business video surveillance services with 24/7 monitoring</p>
                  </div>
                </div>

                <div className="adv-point">
                  <div className="adv-icon"><GiShield /></div>
                  <div>
                    <h4>Continuous Monitoring</h4>
                    <p>Reliable video surveillance services Texas with instant alerts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="adv-right">
              <img src={advImg} alt="surveillance" className="adv-image" loading="lazy" />
            </div>
          </section>

          {/* SECTION 4 — SECURITY STRATEGY + SECOND FAQ */}
          <section className="strategy-section reveal">
            <h2 className="strategy-title">
              Real-Time <span>Threat Monitoring </span>
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
                  A tailored monitoring approach delivers complete coverage, ongoing supervision, and effective measures to ensure safety and peace of mind.</p>
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

export default VideoSurveillance;
