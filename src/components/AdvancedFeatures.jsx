import "../styles/advancedFeatures.css";
import { motion } from "framer-motion";
import {
  FaHeadset,
  FaBell,
  FaCar,
  FaMicrochip,
  FaShieldAlt,
} from "react-icons/fa";
import badge from "../assets/About-circle-image.png";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaHeadset />,
      title: "24/7 Live Monitoring",
      desc: "Real-time surveillance to keep every corner secure.",
    },
    {
      icon: <FaBell />,
      title: "Instant Reporting Alerts",
      desc: "Get notified immediately of any unusual activity.",
    },
    {
      icon: <FaCar />,
      title: "Number Plate & Thief Recognition",
      desc: "Track and record vehicle & thief movements with precision.",
    },
    {
      icon: <FaMicrochip />,
      title: "AI-Powered Surveillance Tools",
      desc: "Advanced analytics for smarter, faster security decisions.",
    },
  ];

  const stats = [
    ["200+", "Residential Areas"],
    ["15+", "Malls & Buildings"],
    ["100+", "Commercial Spaces"],
    ["500+", "Projects Completed"],
    ["10+", "Years of Experience"],
  ];

  return (
    <section className="features">

      {/* HEADER */}
      <div className="features-top">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="feature-tag">
            <FaShieldAlt className="tag-icon" />
            OUR FEATURES
          </span>

          <h2>
            Advanced Features of Our <br />
            Security Systems
          </h2>
        </motion.div>

        {/* ROTATING BADGE */}
        <div className="contact-badge">
          <img src={badge} alt="Contact Now" />
        </div>
      </div>

      {/* FEATURES GRID */}
      <div className="features-grid">
        {features.map((item, index) => (
          <motion.div
            className="feature-card"
            key={index}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 260 }}
          >
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* DIVIDER */}
      <div className="features-divider" />

      {/* STATS */}
      <div className="stats-row">
        {stats.map((item, i) => (
          <div className="stat-box" key={i}>
            <h3>{item[0]}</h3>
            <span>{item[1]}</span>
          </div>
        ))}
      </div>

    </section>
  );
}
