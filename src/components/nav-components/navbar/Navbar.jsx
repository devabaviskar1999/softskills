import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";
const Header = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    mainControls.start("visible");
    slideControls.start("visible");
  }, [isInView]);

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
      <NavLink to={"/"} className="header-logo-link">
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
