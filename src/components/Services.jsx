import "./../styles/services.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaVideo,
  FaCamera,
  FaLock,
  FaBell,
  FaUserCog,
  FaUserTie,
} from "react-icons/fa";

import live from "../Services-Images/service3.png";
import video from "../Services-Images/service4.png";
import Account from "../Services-Images/service5.png";
import alarm from "../Services-Images/service6.jpeg";
import AccountM from "../Services-Images/service8.png";
import vs from "../Services-Images/service9.png";

const services = [
  {
    title: "Live Video Monitoring",
    slug: "live-video-monitoring",
    desc: "24/7 real-time video monitoring to protect your property and respond instantly.",
    icon: <FaVideo />,
    image: live,
  },
  {
    title: "Video Surveillance",
    slug: "video-surveillance",
    desc: "Advanced video surveillance solutions to secure your property and monitor activities.",
    icon: <FaCamera />,
    image: video,
  },
  {
    title: "Access Control Management",
    slug: "access-control",
    desc: "Secure and manage entry points with smart access control solutions for any property.",
    icon: <FaLock />,
    image: Account,
  },
  {
    title: "Alarm Monitoring System",
    slug: "alarm-monitoring",
    desc: "24/7 alarm monitoring system to detect threats instantly and ensure complete protection.",
    icon: <FaBell />,
    image: alarm,
  },
  {
    title: "Accounts Management",
    slug: "account-management",
    desc: "Efficient  accounts management to track finances, streamline processes, and ensure accuracy.",
    icon: <FaUserCog />,
    image: AccountM,
  },
  {
    title: "Virtual Assistant",
    slug: "virtual-assistant",
    desc: "Professional virtual assistant services to manage tasks, schedules, and communications.",
    icon: <FaUserTie />,
    image: vs,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <motion.section
      className="services-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.p className="services-top-text" variants={cardVariants}>
        SERVICES
      </motion.p>

      <motion.h2 className="services-heading" variants={cardVariants}>
        <span>Comprehensive</span> security and <br />
        surveillance solutions
      </motion.h2>

      <motion.div className="services-grid" variants={containerVariants}>
        {services.map((srv, index) => (
          <motion.div
            className="service-card"
            key={index}
            variants={cardVariants}
            whileHover={{ y: -12 }}
          >
            <div className="img-wrapper">
              <img src={srv.image} alt={srv.title} className="service-img" />
            </div>

            <div className="icon-circle">{srv.icon}</div>

            <div className="card-body">
              <h3>{srv.title}</h3>
              <p>{srv.desc}</p>

              <Link to={`/${srv.slug}`} className="discover-btn">
                Discover More
                <span className="arrow">→</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="services-footer" variants={cardVariants}>
        <span className="badge-free">Free</span>
        <span className="footer-text">
          Let’s make something great work together.
        </span>
        <button className="footer-quote-btn">Get Free Quote</button>
      </motion.div>
    </motion.section>
  );
};

export default Services;
