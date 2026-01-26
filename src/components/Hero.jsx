import React, { useEffect, useRef } from "react";
import "./../styles/hero.css";
import heroBG from "../Services-Images/Professional Video Surveillance Services.png";
import { FiShield, FiVideo, FiUsers } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";


const Hero = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hero2-reveal-active");
          }
        });
      },
      { threshold: 0.15 }
    );

    revealRefs.current.forEach(el => el && observer.observe(el));
  }, []);

  return (
    <section
      className="hero2"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${heroBG})`,
      }}
    >
      <div className="hero2-content">
        <p
          ref={el => (revealRefs.current[0] = el)}
          className="hero2-subtitle hero2-reveal"
        >
          <FiShield className="hero2-subtitle-icon" />
          REMOTE SURVEILLANCE COMPANY
        </p>

        <h1
          ref={el => (revealRefs.current[1] = el)}
          className="hero2-title hero2-reveal"
        >
          Tycoon Serveillance Security <br /> Camera Systems USA
        </h1>

        <p
          ref={el => (revealRefs.current[2] = el)}
          className="hero2-desc hero2-reveal"
        >
          Tycoon Serveillance Security Company offers the best in protection with
          advanced AI-powered security camera systems, smart integration, and
          24/7 live video monitoring for homes and businesses.
        </p>

        <div
          ref={el => (revealRefs.current[3] = el)}
          className="hero2-btn-row hero2-reveal"
        >
      <button
  className="hero2-start-btn hero2-hover"
  onClick={() => (window.location.href = "/contact")}
>
  Get Started Now →
</button>


          <button className="hero2-watch-btn hero2-hover">
            <FaPlay className="hero2-play-icon" />
            <a
  href="https://youtu.be/Y-x0efG1seA?list=TLGG2chE6p3a9AExMTAxMjAyNg"
  target="_blank"
  rel="noopener noreferrer">Watch Video</a>
            
          </button>
        </div>

        <div
          ref={el => (revealRefs.current[4] = el)}
          className="hero2-features-box hero2-reveal"
        >
          <div className="hero2-feature hero2-hover">
            <FiShield className="hero2-feature-icon" />
            <h3>24/7 Security Protection</h3>
          </div>

          <div className="hero2-divider" />

          <div className="hero2-feature hero2-hover">
            <FiVideo className="hero2-feature-icon" />
            <h3>Advanced Surveillance Technology</h3>
          </div>

          <div className="hero2-divider" />

          <div className="hero2-feature hero2-hover">
            <FiUsers className="hero2-feature-icon" />
            <h3>Trusted & Trained Professionals</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
