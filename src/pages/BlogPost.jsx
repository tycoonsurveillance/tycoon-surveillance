import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { blogData } from "../blogData";
import "../pages/BlogDetail.css";
import Faqsection from "../pages/faqsection";

// Import all markdown files as raw text
const markdownFiles = import.meta.glob("../content/blogs/*.md", {
  query: "?raw",
  import: "default",
});

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    const currentPath = `/blogs/${slug}`;
    const foundBlog = blogData.find(
      (b) => b.route.trim() === currentPath
    );

    if (foundBlog) {
      setMetadata(foundBlog);
    }

    const loadContent = async () => {
      const filePath = `../content/blogs/${slug}.md`;
      const loader = markdownFiles[filePath];

      if (loader) {
        try {
          const rawMarkdown = await loader();

          // 🔥 STRIP FRONTMATTER COMPLETELY
          const cleanedMarkdown = rawMarkdown
            .replace(/^---[\s\S]*?---/, "")
            .trim();

          setContent(cleanedMarkdown);
        } catch (error) {
          console.error("Error loading markdown file:", error);
          setContent("Error loading content.");
        }
      } else {
        setContent("Blog post not found.");
      }
    };

    loadContent();
    window.scrollTo(0, 0);
  }, [slug]);

  if (!metadata) {
    return (
      <div className="lvm-page">
        <div className="bd-section">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="lvm-page">
      <section className="lvm-banner">
        <h1 className="lvm-banner-title">{metadata.title}</h1>
      </section>

      <section className="bd-section">
        <motion.div
          className="bd-image-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={metadata.image} alt={metadata.title} />
        </motion.div>

        <motion.div
          className="bd-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ReactMarkdown>{content}</ReactMarkdown>

          <div className="bd-social-icons">
            <span className="bd-icon"><FaFacebookF /></span>
            <span className="bd-icon"><FaWhatsapp /></span>
            <span className="bd-icon"><FaLinkedinIn /></span>
          </div>
        </motion.div>

        <Faqsection />
      </section>
    </div>
  );
};

export default BlogPost;
