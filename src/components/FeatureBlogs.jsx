import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/featureBlogs.css";


import four from "../pages/blogs-img/blog1.webp";
import five from "../pages/blogs-img/blog2.webp";
import six from "../pages/blogs-img/blog3.webp";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const blogData = [
  {
    title:
    "Protecting Your Site: The Complete Guide to Construction Video Surveillance",
    image: four,
    date: "03 Dec",
    slug: "construction-video-surveillance-guide",
  },
  {
    title:
    "Is Your Business at Risk? Why You Need a Custom Video Surveillance System",
    image: five,
    date: "01 Dec",
    slug: "custom-video-surveillance",
  },
  {
    title:
      "From Chaos to Control: How Virtual Assistant Services Help You Focus",
    image: six,
    date: "25 Nov",
    slug: "virtual-assistant-services",
  },
];

const BlogUniqueSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bu-page">
      <section className="bu-blog-section">
        <div className="bu-blog-grid">
          {blogData.map((item, index) => (
            <motion.div
              className="bu-blog-card"
              key={index}
              {...fadeUp}
              whileHover={{ y: -10 }}
              onClick={() => navigate(`/blogs/${item.slug}`)}
            >
              <div className="bu-blog-image">
                <img src={item.image} alt={item.title} />
                <span className="bu-blog-date">{item.date}</span>
              </div>

              <div className="bu-blog-content">
                <h3 className="bu-blog-title">{item.title}</h3>
                <span className="bu-read-more">
                  Read More
                  <span className="bu-arrow">➜</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogUniqueSection;
