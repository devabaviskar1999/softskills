import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";
const Header = () => {
  const ref = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    mainControls.start("visible");
    slideControls.start("visible");
  }, [isInView]);

  const handleMouseMove = (e) => {
    const textElement = textRef.current;
    const { left, top, width, height } = textElement.getBoundingClientRect();
    const x = e.clientX - left - width / 2; // X position relative to center
    const y = e.clientY - top - height / 2; // Y position relative to center

    const rotateX = (y / height) * 50; // Adjust for more/less tilt
    const rotateY = (x / width) * -50;

    textElement.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const textElement = textRef.current;
    textElement.style.transform =
      "perspective(500px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <motion.div
      className="header"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: -80 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.9, delay: 0.25 }}
    >
      <NavLink
        to={"/"}
        className="header-logo-link"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={textRef}
      >
        SOFTSKILLS <span>Data Management</span>
      </NavLink>

      <nav className="header-nav">
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "link active-link" : "link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"about-us"}
              className={({ isActive }) =>
                isActive ? "link active-link" : " link"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"services"}
              className={({ isActive }) =>
                isActive ? "link active-link" : "link"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"careers"}
              className={({ isActive }) =>
                isActive ? "link active-link" : "link"
              }
            >
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"contact"}
              className={({ isActive }) =>
                isActive ? "link active-link" : "link"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Header;
