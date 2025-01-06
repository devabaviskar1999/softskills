import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
import Mainlogo from "../../../../assets/Mainlogo.svg";
import { motion, useInView, useAnimation } from "framer-motion";
import First from "../../../content-components/first/First";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animation triggers only once when in view
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div className="entire-home">
      <div className="home" ref={ref}>
        {/* Main Logo Animation */}
        <motion.div
          className="mainlogo"
          variants={{
            hidden: { opacity: 0, x: -50 }, // Slide in from the right
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <img src={Mainlogo} alt="Main Logo" />
        </motion.div>

        {/* Wrapper Animation */}
        <motion.div
          className="wrapper"
          variants={{
            hidden: { opacity: 0, y: 50 }, // Slide up from below
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="static-txt">
            Empowering Your Business <br /> With
          </div>
          <div className="dynamic-txts">
            <Typewriter
              options={{
                strings: [
                  "Data Entry",
                  "Finance & Accounting",
                  "Web Research",
                  "Typing Services",
                  "Photo Editing",
                ],
                autoStart: true,
                loop: true,
                typeSpeed: 90,
                backSpeed: 15,
                backDelay: 1000,
              }}
            />
          </div>
        </motion.div>

        {/* Paragraph Animation */}
        <motion.div
          className="paragraph"
          variants={{
            hidden: { opacity: 0, y: 50 }, // Slide up from below
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>
            "At SoftSkills, we specialize in providing seamless outsourcing
            solutions tailored to your needs. Our team of experts ensures
            efficiency, cost savings, and exceptional customer support, enabling
            your business to focus on growth."
          </p>
        </motion.div>
      </div>
      <First />
    </div>
  );
};

export default Home;
