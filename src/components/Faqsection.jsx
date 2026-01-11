import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/faqsection.css";

const faqData = [
  {
    q: "What types of security solutions do you provide",
    a: "Tycoon Serveillance provides a comprehensive range of services, including live video monitoring, CCTV surveillance, access control, alarm monitoring, accounts management, and virtual assistant support.",
  },
  {
    q: "Can I check my security cameras remotely",
    a: "Yes, you can easily view live or recorded footage from your cameras using your phone, tablet, or computer from anywhere.",
  },
  {
    q: "Do you create customized security plans",
    a: "Every property is different, so we design tailored solutions that fit the specific needs of your home, business, or commercial space.",
  },
  {
    q: "Is your technical support team always available",
    a: " Our technical support team is ready to assist you at any time of day, ensuring that your systems are always working properly.",
  },
  {
    q: "Do you also handle installation and setup",
    a: " Yes, we provide professional installation services and make sure your security equipment is set up correctly for reliable performance.",
  },
];

const FAQSection = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  return (
    <section className="faqGridBackground">
      <div className="faqMainWrapper">

        {/* LEFT CONTENT */}
        <div className="faqContentLeft">
          <div className="faqLabel">
            <span className="faqLabelIcon">✔</span>
            FAQ
          </div>

          <h2 className="faqHeading">
            <span>Frequently</span> asked questions
          </h2>

          <p className="faqParagraph">
           Our FAQ section addresses common questions about Tycoon Serveillance Security, covering CCTV products, installations, and services. Find clear, reliable answers to help you make informed decisions with confidence.
          </p>

          <ul className="faqBenefits">
            <li>Crystal Clear High Definition Video Surveillance</li>
            <li>Seamless Real Time Remote Monitoring</li>
            <li>Expansive Wide Angle Security Coverage</li>
          </ul>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="faqAccordionCard">
          {faqData.map((item, index) => {
            const isActive = activeFaq === index;

            return (
              <div key={index} className="faqAccordionItem">
                <div
                  className="faqAccordionHeader"
                  onClick={() =>
                    setActiveFaq(isActive ? null : index)
                  }
                >
                  <span>{item.q}</span>
                  <span className={`faqToggleIcon ${isActive ? "active" : ""}`}>
                    ▾
                  </span>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="faqAccordionBody"
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
