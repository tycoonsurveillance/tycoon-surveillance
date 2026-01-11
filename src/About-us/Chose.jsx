 import React, { useEffect, useState } from "react";
 import { motion } from "framer-motion";
 import "../About-us/Chose.css";
 

 const fadeUp = {
   initial: { opacity: 0, y: 40 },
   whileInView: { opacity: 1, y: 0 },
   viewport: { once: true },
   transition: { duration: 0.6, ease: "easeOut" },
 };
 
 const Chose = () => {
   const [openFAQ, setOpenFAQ] = useState(null);
 
   const toggleFAQ = (index) => {
     setOpenFAQ(openFAQ === index ? null : index);
   };
 
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
 
   return (
     <div className="lvm-page">

{/* WHY CHOOSE US SECTION */}
<section className="choose-section"> 

  <motion.p
    className="choose-tag"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    WHY CHOOSE US
  </motion.p>

  <motion.h2
    className="choose-title"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    Complete Protection with <br />
    <span>Tycoon Serveillance Security</span>
  </motion.h2>

  {/* GRID */}
  <motion.div
    className="choose-grid"
    initial="hidden"
    whileInView="visible"
    transition={{ staggerChildren: 0.15 }}
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }}
  >

    {/* CHOOSE BOX COMPONENT */}
    {[
      {
        icon: "fa-shield-halved",
        title: "24/7 Security Protection",
        text: "Tycoon Serveillance Security delivers round-the-clock monitoring to keep your property and people safe."
      },
      {
        icon: "fa-truck-medical",
        title: "Rapid Emergency Response",
        text: "Immediate action taken during emergencies to minimize risks and keep everyone protected."
      },
      {
        icon: "fa-user-shield",
        title: "Trained Professional Guards",
        text: "Skilled personnel provide reliable on-site protection with fast and effective response."
      },
      {
        icon: "fa-list-check",
        title: "Customized Security Plans",
        text: "Tailored solutions designed specifically for your home, business, or commercial property."
      },
      {
        icon: "fa-microchip",
        title: "Advanced Technology",
        text: "Modern security cameras, alarms, and monitoring systems for full coverage."
      },
      {
        icon: "fa-handshake",
        title: "Trusted & Reliable Service",
        text: "Dependable and proven security protection trusted by our valued clients."
      },
    ].map((box, index) => (
      <motion.div
        key={index}
        className="choose-box"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
      >
        <div className="choose-icon icon-animate">
          <i className={`fa-solid ${box.icon}`}></i>
        </div>
        <h3>{box.title}</h3>
        <p>{box.text}</p>
      </motion.div>
    ))}

  </motion.div>
</section>

     </div>
         
  );
};

export default Chose;
