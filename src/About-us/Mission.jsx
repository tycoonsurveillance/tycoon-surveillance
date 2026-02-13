 import React, { useEffect, useState } from "react";
 import { motion } from "framer-motion";
 import "../About-us/Mission.css";
 

 const fadeUp = {
   initial: { opacity: 0, y: 40 },
   whileInView: { opacity: 1, y: 0 },
   viewport: { once: true },
   transition: { duration: 0.6, ease: "easeOut" },
 };
 
 import img1 from "./about-imgs/about1.png";

 
 const Mission = () => {
   const [openFAQ, setOpenFAQ] = useState(null);
 
   const toggleFAQ = (index) => {
     setOpenFAQ(openFAQ === index ? null : index);
   };
 
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
 
   return (
     <div className="mission-main">

{/* MISSION / VISION / GOAL SECTION */}
<section className="mission-section">

  {/* LEFT IMAGE */}
  <motion.div
    className="mission-left"
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    <img src={img1} alt="Security Camera" />
  </motion.div>

  {/* RIGHT CONTENT */}
  <motion.div
    className="mission-right"
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >

    {/* Mission */}
    <div className="mission-box">
      <div className="mission-icon">
        <i className="fa-solid fa-flag-checkered"></i>
      </div>
      <div>
        <h3>Our Mission</h3>
        <p>
          To deliver cutting-edge security solutions that guarantee safety,
          reliability, and peace of mind. We are dedicated to innovation
          and excellence, ensuring every client receives advanced monitoring
          services tailored to their unique needs.
        </p>
      </div>
    </div>

    <div className="line"></div>

    {/* Vision */}
    <div className="mission-box">
      <div className="mission-icon">
        <i className="fa-solid fa-binoculars"></i>
      </div>
      <div>
        <h3>Our Vision</h3>
        <p>
          To become the most trusted security provider in Texas and beyond,
          known for our innovation, integrity, and ability to create safer
          environments for homes, businesses, and communities.
        </p>
      </div>
    </div>

    <div className="line"></div>

    {/* Goal */}
    <div className="mission-box">
      <div className="mission-icon">
        <i className="fa-solid fa-chart-line"></i>
      </div>
      <div>
        <h3>Our Goal</h3>
        <p>
          To continuously improve and expand our security services, offering
          clients advanced technology, seamless monitoring, and dependable
          support that reinforces trust, safety, and long-term protection.
        </p>
      </div>
    </div>

  </motion.div>

</section>


     </div>
         
  );
};

export default Mission;
