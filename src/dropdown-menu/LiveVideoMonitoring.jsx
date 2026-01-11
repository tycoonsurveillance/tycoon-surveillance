import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./LiveVideoMonitoring.css";

import heroImg from "../Services-Images/Live Video Monitoring.png";
import sectionImg from "../Services-Images/Ensuring Control.png";
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
    q: "How much does live video monitoring cost compared to hiring security guards?",
    a: "The cost difference is dramatic. Hiring security guards for 24/7 coverage at a single location runs $150,000 or more annually when you factor in wages, benefits, training, and management. Our live video monitoring services typically cost 60 to 80 percent less while providing superior coverage. You get professionals watching every camera angle simultaneously rather than one guard who can only be in one place at a time. Most clients see ROI within the first few months through prevented incidents alone, not even counting the ongoing cost savings."
  },
  {
    q: "Will live video monitoring work with the cameras I already have?",
    a: "In most cases, yes. Our live video monitoring system integrates with the majority of IP cameras and recording equipment currently installed. We evaluate your existing setup during the free assessment and typically find that most of your cameras work perfectly fine. We might recommend adding cameras in a few vulnerable spots we identify or upgrading one or two older units that don't provide clear nighttime footage. This approach saves you money while ensuring comprehensive coverage where it matters most."
  },
  {
    q: "What happens when your team spots suspicious activity on my property?",
    a: "Response happens in seconds, not minutes. The moment our monitoring specialist identifies a genuine threat, they follow your customized protocol. This typically starts with activating your on-site audio speakers to warn the intruder they're being watched and authorities are being contacted. Most criminals run immediately at this point. If they don't, our team contacts law enforcement with live updates including suspect descriptions, exact locations, and ongoing activity reports. You also receive immediate notification through your preferred method whether that's phone call, text, or app alert."
  },
  {
    q: "Can you monitor multiple properties from different locations?",
    a: "Absolutely. Our live remote video monitoring platform centralizes security across all your locations into a single system. Whether you manage apartment buildings in three different cities, retail stores across a region, or construction sites in multiple states, we monitor everything simultaneously. You get one dashboard showing all properties, unified reporting, and consistent security protocols across your entire portfolio. This multi-site capability is especially valuable for property managers and business owners with distributed operations."
  },
  {
    q: "How quickly can you have monitoring service up and running?",
    a: "Implementation typically takes just a few days from approval to full activation. Our technical team handles camera installation or integration with your existing equipment, network setup, and system testing. Meanwhile, our monitoring team studies your property layout, learns normal activity patterns, and memorizes your specific response protocols. Most clients are fully protected within three to five business days of signing up. Emergency situations can sometimes be accommodated even faster with temporary monitoring while permanent installation is completed."
  }
];

const LiveVideoMonitoring = () => {
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
        <h1 className="lvm-banner-title">Professional Live Video Monitoring Services for Complete Security</h1>
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

            {/* FIRST FAQ SECTION */}
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
              Protect your property with live video security that helps stop problems before they get worse. Our trained security team watches your location 24/7 using real-time video. They quickly spot suspicious activity and take action right away to prevent damage or loss. </p>
              <br />
              <p>
               As a trusted live video monitoring company, we offer security checked by real people, not just alarms. Our team responds quickly, watches your property all the time, and provides strong, reliable protection. This gives you peace of mind and security you can count on. </p>
            </div>
          </div>

          {/* SECTION 2 */}
          <section className="lvm-info-box">
            <h2>Comprehensive Video Surveillance Technology</h2>

            <p>
            Our security project delivers cutting-edge live video monitoring and surveillance solutions specifically designed for both residential and commercial properties. We provide comprehensive systems featuring high definition cameras, intelligent motion detection capabilities, and convenient remote access from any location. Every component works together seamlessly to give you complete visibility and control over your property’s security at all times.
            <br />
            We focus on placing cameras in the right locations, connecting systems smoothly, and monitoring them live at all times. This creates a strong security setup made for your needs. It gives full coverage, better control, and peace of mind. With professional technology and constant monitoring, your property stays protected 24/7 when it matters most.
             </p>

            <div className="info-lists">
              <ul>
                <li>✔ 24/7 Professional Monitoring</li>
                <li>✔ Advanced Analytics & AI Integration</li>
                <li>✔ Faster Emergency Response</li>
              </ul>

              <ul>
                <li>✔ Remote Property Management</li>
                <li>✔ Scalable Multi-Site Solutions</li>
                <li>✔ Seamless system integration</li>
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
                 <span> Get Started with</span> Professional Live Video Monitoring             </h2>
              <p className="adv-desc">
             Protecting your property doesn’t have to be hard or costly. Our team makes everything easy, from the first inspection to system design, installation, and 24/7 <br />

Every property is different. That’s why we start by checking your location to understand risks, budget, and security needs. We then create a custom solution made just for you, without extra features you don’t need.<br />
<br /> <b>Want better security?</b> Contact us today for a free consultation. Our experts will review your property, answer your questions, and show you how live monitoring can protect what matters most.  </p>
            </div>

            <div className="adv-left">
              <div className="adv-points">
                <div className="adv-point">
                  <div className="adv-icon"><MdOutlineComputer /></div>
                  <div>
                    <h4>Experienced Security Professionals</h4>
                    <p>Our monitoring team brings decades of combined security experience.</p>
                  </div>
                </div>

                <div className="adv-point">
                  <div className="adv-icon"><MdSupportAgent /></div>
                  <div>
                    <h4>Proven Track Record</h4>
                    <p>Property managers, business owners, and security directors trust us to protect what matters most.</p>
                  </div>
                </div>

                <div className="adv-point">
                  <div className="adv-icon"><GiShield /></div>
                  <div>
                    <h4>Compliance & Certification</h4>
                    <p>We maintain all necessary licenses, insurance, and certifications required in the security industry.</p>
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
              Technology  <span>& System Capabilities</span>
            </h2>

            <p className="strategy-desc">
           Our live video monitoring system uses high-quality technology built for serious security needs. High-definition cameras with night vision provide clear video in all lighting conditions. Footage is safely stored in the cloud and can be accessed quickly from any approved device. <br />

You can add as many cameras as you need as your business grows. With mobile apps, you can watch live video on your phone or tablet anytime, from anywhere.
            </p>

            {/* Cards */}
            <div className="strategy-card-grid">
              <div className="strategy-card reveal">
                <div className="strategy-icon"><RiAlertLine /></div>
                <h3>Proactive Crime Prevention </h3>
                <p>
               Traditional security cameras only capture evidence after crimes occur. Our approach stops criminal activity before it starts. When would-be intruders realize they're being actively watched, they typically abandon their plans immediately. This proactive deterrence is the most effective form of property protection.
                </p>
              </div>

              <div className="strategy-card reveal">
                <div className="strategy-icon"><GiShield /></div>
                <h3>Peace of Mind</h3>
                <p>
                Security concerns create stress that impacts your focus and productivity. Knowing professionals are watching your property 24/7 provides invaluable peace of mind. Sleep better knowing that threats will be detected and handled immediately, even when you're unavailable.


                </p>
              </div>
            </div>

            {/* Bullet Points */}
            <div className="strategy-bullets">
              <div className="bullet"><span>✔</span> We work with leading security technology companies to provide advanced live video monitoring. Our system uses backup systems, secure encrypted connections, and safety measures to make sure your protection is always on without interruptions.</div>
              <div className="bullet"><span>✔</span>Our monitoring team has many years of security experience. Each specialist is fully trained to spot threats, respond to emergencies, and provide great customer service. They know how to tell the difference between normal activity and real danger.</div>
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

export default LiveVideoMonitoring;
