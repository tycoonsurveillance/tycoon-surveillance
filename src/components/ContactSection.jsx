// ContactSection.jsx
import "../styles/contactSection.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import contactImg from "../Services-Images/service14.png";

const ContactSection = () => {

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="contact-section">
      <motion.div 
        className="contact-left"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p className="contact-tag" variants={itemVariants}>
          <FaPhoneAlt className="tag-icon" /> CONTACT US
        </motion.p>

        <motion.h2 className="contact-title" variants={itemVariants}>
          Protect Your Property with
          <span> Tycoon Serveillance Today!</span>
        </motion.h2>

        <motion.p className="contact-desc" variants={itemVariants}>
          Take charge of your security with reliable CCTV and surveillance 
          solutions built for total protection.
        </motion.p>

        <motion.div className="contact-info-wrapper" variants={itemVariants}>
          <motion.div className="info-box" variants={itemVariants}>
            <div className="info-icon"><FaPhoneAlt /></div>
            <div>
              <p className="info-label">Phone number</p>
              <p className="info-value">+92 3150289316</p>
            </div>
          </motion.div>

          <div className="divider"></div>

          <motion.div className="info-box" variants={itemVariants}>
            <div className="info-icon"><FaEnvelope /></div>
            <div>
              <p className="info-label">Email address</p>
              <p className="info-value">info@tycoonguards.com</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="contact-right"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img src={contactImg} className="contact-img" alt="contact person" />
      </motion.div>
    </section>
  );
};

export default ContactSection;
