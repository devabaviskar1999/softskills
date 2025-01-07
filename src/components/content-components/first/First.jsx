import React, { useRef } from "react";
import "./First.css";
import Bank from "../../../assets/Bank.png";
import Finance from "../../../assets/Finance.png";
import Government from "../../../assets/Government.png";
import Industrial from "../../../assets/Industrial.png";
import Medical from "../../../assets/Medical.png";
import Public from "../../../assets/Public.png";

const First = () => {
  const refs = useRef([]); // Create an array to store refs

  const handleMouseMove = (e, index) => {
    const textElement = refs.current[index];
    const { left, top, width, height } = textElement.getBoundingClientRect();
    const x = e.clientX - left - width / 2; // X position relative to center
    const y = e.clientY - top - height / 2; // Y position relative to center

    const rotateX = (y / height) * 30; // Adjust for more/less tilt
    const rotateY = (x / width) * -30;

    textElement.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (index) => {
    const textElement = refs.current[index];
    textElement.style.transform = "perspective(500px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className="first">
      <div className="heading">
        <h2>Our working sectors</h2>
      </div>
      <div className="images-div">
        {[
          { src: Bank, alt: "Banking image", label: "Banking Sector" },
          { src: Finance, alt: "Finance image", label: "Financial Sector" },
          { src: Industrial, alt: "Industrial image", label: "Industrial Sector" },
          { src: Medical, alt: "Medical image", label: "Medical Sector" },
          { src: Public, alt: "Public image", label: "Public Sector" },
          { src: Government, alt: "Government image", label: "Government Sector" },
        ].map((item, index) => (
          <div
            key={index}
            ref={(el) => (refs.current[index] = el)} // Assign each element to a ref
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <img src={item.src} alt={item.alt} />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default First;
