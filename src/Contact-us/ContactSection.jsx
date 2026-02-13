import React, { useEffect, useState } from "react";
import "../Contact-us/ContactSection.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Combine first + last name
    const emailData = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      message: `Message: ${formData.message}\nPhone: ${formData.phone}`,
    };

    emailjs
      .send(
        "service_rpnhg0h",    // replace with your EmailJS service ID
        "template_3mtj0kv",   // replace with your EmailJS template ID
        emailData,
        "9X__6E7YAcBAhPRDN"     // replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.error(error);
          setLoading(false);
        }
      );
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeUpDelay = (delay) => ({
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });

const socials = [
  {
    icon: FaFacebookF,
    link: "https://www.facebook.com/profile.php?id=61585663437951",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/tycoonsurveillance/",
  },
  {
    icon: FaTwitter,
    link: "https://twitter.com/yourprofile",
  },
];

  return (
    <div className="cp-wrapper">
      {/* BANNER */}
      <section className="cp-hero">
        <h1 className="cp-hero-title">CONTACT US</h1>
      </section>

      {/* CONTENT */}
      <section className="cp-fluid">
        <div className="cp-container">
          {/* TOP */}
          <div className="cp-top">
            <motion.div
              className="cp-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="cp-tag">CONTACT US</span>
              <h2 className="cp-heading">
                Secure your world <span>with us</span>
              </h2>
              <p className="cp-text">
                Have questions or need a customized security solution? Our team
                is here to assist you. Get in touch with us today.
              </p>

              <div className="cp-socials">
  {socials.map((item, i) => {
    const Icon = item.icon;
    return (
      <motion.a
        key={i}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="cp-social-icon"
      >
        <Icon />
      </motion.a>
    );
  })}
</div>
            </motion.div>

            <motion.div
              className="cp-right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <motion.div className="cp-card" variants={fadeUpDelay(0)}>
                
                <div className="cp-icon">
                  <FaPhoneAlt />
                </div>
                <div>
                  <small>Phone Number</small>
                  <p>+92 315 0289316</p>
                </div>
              </motion.div>

              <motion.div className="cp-card" variants={fadeUpDelay(0.2)}>
                <div className="cp-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <small>Email Address</small>
                  <p>tycoonsurveillance@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                className="cp-card cp-card-full"
                variants={fadeUpDelay(0.4)}
              >
                <div className="cp-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <small>Location</small>
                  <p>13016 University Blvd, Sugar Land, TX 77479</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* BOTTOM */}
          <motion.div
            className="cp-bottom"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <motion.div className="cp-map" variants={fadeUpDelay(0.1)}>
              <iframe
                title="map"
                src="https://www.google.com/maps?q=1880%20S%20Dairy%20Ashford%20Rd%20Houston,%20TX&output=embed"
                loading="lazy"
              />
            </motion.div>

            <motion.div className="cp-form-box" variants={fadeUpDelay(0.3)}>
              <h3>Send us a message</h3>
              <p className="contact-p">
                We specialize in providing top-quality security and CCTV
                solutions to safeguard your home and business.
              </p>

              <form className="cp-form" onSubmit={handleSubmit}>
                <div className="cp-row">
                  <input
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="cp-row">
                  <input
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <button type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>

              <p className="cp-terms">
                By submitting this form, you agree to our{" "}
                <span>Terms & Privacy Policy</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
