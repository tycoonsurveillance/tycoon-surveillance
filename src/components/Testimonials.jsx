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
    name: "Sarah M",
    role: "Chief Executive Officer",
    rating: 5,
    text: `“Tycoon Serveillance has truly transformed our family’s sense of security. Their alarm monitoring service provides peace of mind, knowing our home is protected around the clock. The installation was fast, and the team was highly professional.”`,
  },
  {
    img: user2,
    name: "Jessica L",
    role: "Chief Executive Officer",
    rating: 5,
    text: `“The fire alarm monitoring system they installed is outstanding. We get instant alerts, and it integrates perfectly with our existing setup. Their customer support is also highly responsive.”`,
  },
  {
    img: user3,
    name: "Michael B",
    role: "Security Manager",
    rating: 5,
    text: `“Reliable, quick, and secure. Their CCTV installation has greatly enhanced our property surveillance. Highly recommended!”`,
  },
    {
    img: user4,
    name: "John Miller",
    role: "David R",
    rating: 5,
    text: `“Reliable, quick, and secure. Their CCTV installation has greatly enhanced our property surveillance. Highly recommended!”`,
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
