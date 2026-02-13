import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/AboutUs.css";

import badgeImg from "../assets/About-circle-image.png";
import mainImg from "../Services-Images/service1.png";
import subImg from "../Services-Images/service6.jpeg";
import experienceImg from "../Services-Images/About-Image-3.png";
import phoneIcon from "../assets/phone.png";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <section className="about">
        <div className="about-wrapper">

          {/* LEFT */}
          <motion.div
            className="about-media"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="media-img primary zoom-hover">
              <img src={mainImg} alt="Security Operator" />
            </div>

            <div className="media-img secondary zoom-hover">
              <img src={subImg} alt="Woman Operator" />
            </div>

            <div className="media-badge spin-slow">
              <img src={badgeImg} alt="Trusted Badge" />
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="about-info"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="about-label">ABOUT US</p>

            <h2 className="about-heading">
              <span>Protecting Homes,</span> Businesses <br />
              and Every Spaces
            </h2>

            <p className="about-desc">
             At Tycoon Serveillance Security, we deliver high-quality business security camera systems across the USA, along with advanced CCTV solutions for residential and commercial properties. Our mission is to provide peace of mind through reliable, innovative, and customized security systems that protect your home and business around the clock.
            </p>

            <div className="experience">
              <div className="experience-img zoom-hover">
                <img src={experienceImg} alt="Experience" />
              </div>
              <h3 className="experience-text">
                We Have More Than 10+ Years of Experience in Industry
              </h3>
            </div>

            <div className="contact-box">
              <div className="contact-icon">
                <img src={phoneIcon} alt="Phone" />
              </div>

              <div className="contact-text">
                <p>Call Directly 24/7</p>
                <h4>+92 3150289316</h4>
              </div>

              <button className="contact-btn">More About →</button>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default About;
