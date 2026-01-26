import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./../styles/navbar.css";
import logo from "../assets/logo.png";

/* Icons */
import { FiChevronDown } from "react-icons/fi";
import { MdCameraIndoor, MdSecurity } from "react-icons/md";
import { FaHome, FaIndustry } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const Navbar = () => {
  const [desktopOpen, setDesktopOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const dropdownRef = useRef(null);
  const location = useLocation(); // track page changes

  // Close dropdowns when clicking outside
  useEffect(() => {
    const close = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDesktopOpen(null);
      }
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setMobileOpen(null);
  }, [location]);

  const toggleDesktop = (name) => {
    setDesktopOpen(desktopOpen === name ? null : name);
  };

  const toggleMobile = (name) => {
    setMobileOpen(mobileOpen === name ? null : name);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container" ref={dropdownRef}>
          <Link to="/About" className="nav-item">
            <img src={logo} alt="Tycoon Surveillance" className="logo" />
          </Link>

          {/* DESKTOP LINKS */}
          <ul className="nav-links">
            {/* SERVICES */}
            <li
              className="nav-item"
              onClick={(e) => {
                e.stopPropagation();
                toggleDesktop("services");
              }}
            >
              Services <FiChevronDown className={`icon ${desktopOpen === "services" ? "rotate" : ""}`} />
              <div className={`dropdown-menu ${desktopOpen === "services" ? "show" : ""}`}>
                <Link to="/live-video-monitoring">
                  <MdCameraIndoor className="drop-icon" /> Live Video Monitoring
                </Link>
                <Link to="/video-surveillance">
                  <MdSecurity className="drop-icon" /> Video Surveillance
                </Link>
                <Link to="/access-control">
                  <MdSecurity className="drop-icon" /> Access Control
                </Link>
                <Link to="/alarm-monitoring">
                  <MdSecurity className="drop-icon" /> Alarm Monitoring
                </Link>
                <Link to="/account-management">
                  <MdSecurity className="drop-icon" /> Account Management
                </Link>
                <Link to="/virtual-assistant">
                  <MdSecurity className="drop-icon" /> Virtual Assistant
                </Link>
              </div>
            </li>

            {/* INDUSTRY */}
            <li
              className="nav-item"
              onClick={(e) => {
                e.stopPropagation();
                toggleDesktop("industry");
              }}
            >
              Industry <FiChevronDown className={`icon ${desktopOpen === "industry" ? "rotate" : ""}`} />
              <div className={`dropdown-menu ${desktopOpen === "industry" ? "show" : ""}`}>
                <Link to="/retail">
                  <FaHome className="drop-icon" /> Retail
                </Link>
                <Link to="/construction">
                  <FaHome className="drop-icon" /> Construction
                </Link>
                <Link to="/banking">
                  <FaHome className="drop-icon" /> Banking
                </Link>
                <Link to="/healthcare">
                  <FaHome className="drop-icon" /> Healthcare
                </Link>
                <Link to="/education">
                  <FaHome className="drop-icon" /> Education
                </Link>
                <Link to="/hospitality">
                  <FaHome className="drop-icon" /> Hospitality
                </Link>
                <Link to="/transportation">
                  <FaHome className="drop-icon" /> Transportation
                </Link>
                <Link to="/corporate">
                  <FaHome className="drop-icon" /> Corporate
                </Link>
              </div>
            </li>

            {/* OTHER LINKS */}
            <Link to="/About" className="nav-item">
              <li className="nav-item">About Us</li>
            </Link>
            <Link to="/Blog" className="nav-item">
              <li className="nav-item">Blog</li>
            </Link>
            <Link to="/Contact" className="nav-item">
              <li className="nav-item">Contact Us</li>
            </Link>
          </ul>

          <Link to="/Contact" className="nav-item">
            <button className="quote-btn desktop-btn">Get A Quote →</button>
          </Link>

          {/* MOBILE HAMBURGER */}
          <div className="hamburger" onClick={() => setMenuOpen(true)}>☰</div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>

        <ul className="mobile-links">
          {/* Services */}
          <li onClick={() => toggleMobile("m-services")}>
            Services
            <FiChevronDown className={`arrow ${mobileOpen === "m-services" ? "rotate" : ""}`} />
          </li>
          {mobileOpen === "m-services" && (
            <div className="mobile-dropdown">
              <Link to="/live-video-monitoring">
                <MdCameraIndoor className="drop-icon" /> Live Video Monitoring
              </Link>
              <Link to="/video-surveillance">
                <MdSecurity className="drop-icon" /> Video Surveillance
              </Link>
              <Link to="/access-control">
                <MdSecurity className="drop-icon" /> Access Control
              </Link>
              <Link to="/alarm-monitoring">
                <MdSecurity className="drop-icon" /> Alarm Monitoring
              </Link>
              <Link to="/account-management">
                <MdSecurity className="drop-icon" /> Account Management
              </Link>
              <Link to="/virtual-assistant">
                <MdSecurity className="drop-icon" /> Virtual Assistant
              </Link>
            </div>
          )}

          {/* Industry */}
          <li onClick={() => toggleMobile("m-industry")}>
            Industry
            <FiChevronDown className={`arrow ${mobileOpen === "m-industry" ? "rotate" : ""}`} />
          </li>
          {mobileOpen === "m-industry" && (
            <div className="mobile-dropdown">
              <Link to="/retail">
                <FaHome className="drop-icon" /> Retail
              </Link>
              <Link to="/construction">
                <FaHome className="drop-icon" /> Construction
              </Link>
              <Link to="/banking">
                <FaHome className="drop-icon" /> Banking
              </Link>
              <Link to="/healthcare">
                <FaHome className="drop-icon" /> Healthcare
              </Link>
              <Link to="/education">
                <FaHome className="drop-icon" /> Education
              </Link>
              <Link to="/hospitality">
                <FaHome className="drop-icon" /> Hospitality
              </Link>
              <Link to="/transportation">
                <FaHome className="drop-icon" /> Transportation
              </Link>
              <Link to="/corporate">
                <FaHome className="drop-icon" /> Corporate
              </Link>
            </div>
          )}

          {/* Other Pages */}
          <Link to="/About" className="mobile-link">About Us</Link>
          <Link to="/Blog" className="mobile-link">Blog</Link>
          <Link to="/Contact" className="mobile-link">Contact Us</Link>
          <Link to="/Contact" className="mobile-link">
            <button className="mobile-quote-btn">Get A Quote →</button>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
