import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../pages/faqsection.css";

const faqData = [
  {
    q: "What types of security solutions do you provide",
    a: "We provide CCTV monitoring, alarm systems, access control, and 24/7 surveillance with professional support.",
  },
  {
    q: "Can I check my security cameras remotely",
    a: "Yes, you can easily view live or recorded footage from your cameras using your phone, tablet, or computer from anywhere.",
  },
  {
    q: "Do you create customized security plans",
    a: "Yes, we provide tailored security plans for homes, businesses, and commercial properties.",
  },
  {
    q: "Is your technical support team always available",
    a: "Yes, our support team is available 24/7 to assist you with any issues or emergencies.",
  },
  {
    q: "Do you also handle installation and setup",
    a: "Absolutely! Our experts provide complete installation and configuration for all security systems.",
  },
];

const FAQSection = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  return (
    <section className="faq1-gridBackground">
      <div className="faq1-mainWrapper">

        {/* LEFT CONTENT */}
        <div className="faq1-contentLeft">
          <div className="faq1-label">
            <span className="faq1-labelIcon">✔</span>
            FAQ
          </div>

          <h2 className="faq1-heading">
            <span>Frequently</span> asked questions
          </h2>

          <p className="faq1-paragraph">
            Our FAQ section covers common queries about Tycoon Serveillance Security,
            including CCTV products, installation, and services. Find clear and
            reliable answers to help you make informed decisions with confidence.
          </p>

          <ul className="faq1-benefits">
            <li>Crystal Clear High Definition Video Surveillance</li>
            <li>Seamless Real Time Remote Monitoring</li>
            <li>Expansive Wide Angle Security Coverage</li>
          </ul>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="faq1-accordionCard">
          {faqData.map((item, index) => {
            const isActive = activeFaq === index;

            return (
              <div key={index} className="faq1-accordionItem">
                <div
                  className="faq1-accordionHeader"
                  onClick={() => setActiveFaq(isActive ? null : index)}
                >
                  <span>{item.q}</span>
                  <span className={`faq1-toggleIcon ${isActive ? "active" : ""}`}>
                    ▾
                  </span>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="faq1-accordionBody"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
