 import React, { useEffect, useState } from "react";
 import { motion } from "framer-motion";
 import "../About-us/Commit.css";
 
import comitee1 from "./about-imgs/about2.png";
import comitee2 from "./about-imgs/about3.png";
import teamImg from "./about-imgs/about4.png"; // bottom group photo
import teamImg1 from "./about-imgs/about5.png"; // bottom group photo
import teamImg2 from "./about-imgs/about6.png"; // bottom group photo
import teamImg3 from "./about-imgs/about7.png"; // bottom group photo


 const fadeUp = {
   initial: { opacity: 0, y: 40 },
   whileInView: { opacity: 1, y: 0 },
   viewport: { once: true },
   transition: { duration: 0.6, ease: "easeOut" },
 };
 
 import img1 from "../assets/About-Image-1.png";

 
 const Commit = () => {
   const [openFAQ, setOpenFAQ] = useState(null);
 
   const toggleFAQ = (index) => {
     setOpenFAQ(openFAQ === index ? null : index);
   };
 
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
 
   return (
     <div className="main-commit">
<section className="commit-section">

  {/* LEFT SIDE IMAGES */}
  <div className="commit-left">
    
    {/* TOP LEFT SMALL IMAGE */}
    <motion.div
      className="commit-img small-img"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img src={comitee1} alt="Security Monitoring" />
    </motion.div>

    {/* CENTER BIG IMAGE */}
    <motion.div
      className="commit-img big-img"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <img src={comitee2} alt="Security Operator" />
    </motion.div>

    {/* RED STAT BOX */}
    <motion.div
      className="commit-stat-box"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35 }}
    >
      <h2>1.2K</h2>
      <p class="p-home">Homes & Businesses Secured with Confidence</p>
      
      <div className="team-faces">
        <img src={teamImg} alt="Clients" className="team-face" />
        <img src={teamImg1} alt="Clients" className="team-face" />
        <img src={teamImg2} alt="Clients" className="team-face" />
        <img src={teamImg3} alt="Clients" className="team-face" />
      </div>
    </motion.div>

  </div>

  {/* RIGHT SIDE CONTENT */}
  <motion.div
    className="commit-right"
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    <p className="commit-tag">
      <i className="fa-solid fa-bullseye"></i> OUR COMMITMENT
    </p>

    <h2 className="commit-title">
      Delivering <span>security</span> with excellence
    </h2>

    <p className="commit-desc">
      We specialize in providing top-quality security and CCTV solutions designed to safeguard
      both homes and businesses. Our mission is to bring you peace of mind through reliable,
      advanced, and customized security services.
    </p>

    {/* STATS ROW */}
    <div className="commit-stats-row">
      <div className="commit-stat">100+ <span>Trusted Protection</span></div>
      <div className="commit-stat">110+ <span>Trusted Protection</span></div>
      <div className="commit-stat">120+ <span>Trusted Protection</span></div>
    </div>

    {/* BULLET POINTS */}
    <ul className="commit-list">
      <motion.li
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <i className="fa-solid fa-circle-check"></i>
        Smart security solutions designed to safeguard what you value most.
      </motion.li>

      <motion.li
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <i className="fa-solid fa-circle-check"></i>
        Driven by innovation, dependability, and long-lasting peace of mind.
      </motion.li>
    </ul>

  </motion.div>

</section>


     </div>
         
  );
};

export default Commit;
