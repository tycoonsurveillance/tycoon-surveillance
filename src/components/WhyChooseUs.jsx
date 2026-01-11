import "../styles/whyChooseUs.css";
import { motion } from "framer-motion";
import {
  FiShield,
  FiUserCheck,
  FiCpu,
  FiPhoneCall,
  FiSettings,
  FiThumbsUp,
} from "react-icons/fi";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FiShield />,
      title: "24/7 Security Protection",
      desc: "Tycoon Serveillance Security provides 24/7 monitoring solutions to ensure the safety of your property, assets, and people at all times.",
    },
    {
      icon: <FiUserCheck />,
      title: "Trained Professional Guards",
      desc: "Our trained security personnel offer dependable on-site protection, responding quickly and efficiently whenever the situation requires.",
    },
    {
      icon: <FiCpu />,
      title: "Advanced Technology",
      desc: "We utilize cutting-edge business security camera systems, alarms, and monitoring tools across the USA to provide comprehensive protection.",
    },
    {
      icon: <FiPhoneCall />,
      title: "Rapid Emergency Response",
      desc: "Tycoon Serveillance responds promptly in emergencies to reduce risks and ensure the safety of everyone involved.",
    },
    {
      icon: <FiSettings />,
      title: "Customized Security Plans",
      desc: "We create customized security solutions designed to address the unique needs of your home, business, or commercial property.",
    },
    {
      icon: <FiThumbsUp />,
      title: "Trusted & Reliable Service",
      desc: "With a track record of proven results, we provide reliable and professional small business security solutions that clients can count on.",
    },
  ];

  return (
    <section className="why-section">
      {/* ---------- HEADER ---------- */}
      <motion.div
        className="why-top"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="why-subtitle">⚡ WHY CHOOSE US</p>

        <h2 className="why-title">
          <span>Complete Protection with</span>
          <br />
          Tycoon Serveillance Security
        </h2>
      </motion.div>

      {/* ---------- GRID ---------- */}
      <div className="why-grid">
        {features.map((item, index) => (
          <motion.div
            className="why-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="why-icon">{item.icon}</div>

            <h3 className="why-card-title">{item.title}</h3>
            <p className="why-card-desc">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
