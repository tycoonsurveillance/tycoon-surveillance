import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/testimonials.css";

import user1 from "../Services-Images/service15.png";
import user2 from "../Services-Images/service16.png";
import user3 from "../Services-Images/service17.png";
import user4 from "../Services-Images/service12.png";
import { FaVideo } from "react-icons/fa";


const reviews = [
  {
    img: user1,
    name: "Daniel Carter",
    role: "Retail Store Owner",
    rating: 4,
    text: `“We upgraded our CCTV system, and the results have been excellent. Clear footage, strong night vision, and a very professional installation team.”`,
  },
  {
    img: user2,
    name: "Olivia Martinez",
    role: "Chief Executive Officer",
    rating: 5,
    text: `“The fire alarm monitoring system works flawlessly. Instant alerts and smooth integration with our existing setup. Very reliable service.”`,
  },
   {
    img: user3,
    name: "Daniel Carter",
    role: "Security Manager",
    rating: 3,
    text: `“Quick installation and high-quality equipment. Our surveillance coverage has improved significantly since upgrading.”`,
  },
  {
    img: user4,
    name: "Robert Hayes",
    role: "Warehouse Operations Manager",
    rating: 5,
    text: `“Professional from start to finish. The cameras cover every critical area, and the system runs without any issues.”`,
  },
];

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    function onResize() {
      setVisibleCount(getVisibleCount());
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function getVisibleReviews() {
    const out = [];
    for (let i = 0; i < visibleCount; i++) {
      out.push(reviews[(startIndex + i) % reviews.length]);
    }
    return out;
  }

  function next() {
    setStartIndex((s) => (s + 1) % reviews.length);
  }
  function prev() {
    setStartIndex((s) => (s - 1 + reviews.length) % reviews.length);
  }

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const visible = getVisibleReviews();

  // Framer motion variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="testimonials-section" aria-label="Testimonials">
<motion.p
  className="testi-tag camera-rotate"
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <FaVideo className="testi-icon" />
  TESTIMONIALS
</motion.p>

      <motion.h2
        className="testi-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
      <h2 className="h2t">  Trusted <span>feedback</span> from our <br /> clients </h2>
      </motion.h2>

      <div className="testi-slider-outer">
        <div className="testi-grid">
          {visible.map((item, index) => (
            <motion.article
              className="testi-card"
              key={`${item.name}-${index}`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="testi-card-top">
                <motion.img
                  src={item.img}
                  alt={item.name}
                  className="testi-avatar"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <div className="testi-meta">
                  <h3 className="testi-name">{item.name}</h3>
                  <p className="testi-role">{item.role}</p>
                </div>
                <div className="testi-quote" aria-hidden>
                  ❞
                </div>
              </div>

              <div className="testi-divider" />
              <div className="testi-stars" aria-hidden>
                {"⭐".repeat(item.rating)}
              </div>
              <p className="testi-text">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="testi-arrows" role="group" aria-label="Change testimonials">
        <button
          className="arrow-btn"
          onClick={prev}
          aria-label="Previous testimonials"
        >
          ←
        </button>
        <button
          className="arrow-btn"
          onClick={next}
          aria-label="Next testimonials"
        >
          →
        </button>
      </div>
    </section>
  );
}

function getVisibleCount() {
  if (typeof window === "undefined") return 3;
  const w = window.innerWidth;
  if (w >= 1100) return 3;
  if (w >= 700) return 2;
  return 1;
}
