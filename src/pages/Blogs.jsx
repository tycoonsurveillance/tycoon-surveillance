import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../pages/Blogs.css";
import { blogData } from "../blogData"; // your blogData

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const Blog = () => {
  const navigate = useNavigate();
  const [visibleBlogs, setVisibleBlogs] = useState(3); // initially show 3 blogs

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLoadMore = () => {
    setVisibleBlogs((prev) => prev + 3); // show 3 more blogs each click
  };

  return (
    <div className="lvm-blog">
      {/* Banner */}
      <section className="lvm-banner">
        <h1 className="lvm-banner-title">OUR BLOG</h1>
      </section>

      {/* Blog Grid */}
      <section className="blog-section">
        <div className="blog-grid">
          {blogData.slice(0, visibleBlogs).map((item, index) => (
            <motion.div
              className="blog-card"
              key={index}
              {...fadeUp}
              whileHover={{ y: -10 }}
              onClick={() => navigate(item.route)}
            >
              <div className="blog-img">
                <img src={item.image} alt={item.title} />
                <span className="blog-date">{item.date}</span>
              </div>
              <div className="blog-content">
                <h3>{item.title}</h3>
                <span className="read-more">
                  Read More <span className="arrow">➜</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrow / Load More Button */}
        {visibleBlogs < blogData.length && (
          <div className="load-more-container">
            <button className="load-more-btn" onClick={handleLoadMore}>
              ➜
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Blog;
