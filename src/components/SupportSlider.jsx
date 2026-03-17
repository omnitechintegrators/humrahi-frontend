import React from "react";
import "./SupportSlider.css";

/* ================= SUPPORT SLIDER ================= */

const items = [
  "Support",
  "Health",
  "Donations",
  "Foods",
  "Education",
  "Children",
  "Medical",
];

const SupportSlider = () => {
  return (
    <section className="slider-container">

      <div className="slider-track">

        {/* First Loop */}
        {items.map((item, index) => (
          <SliderItem
            key={`a-${index}`}
            text={item}
          />
        ))}

        {/* Duplicate Loop (For Infinite Effect) */}
        {items.map((item, index) => (
          <SliderItem
            key={`b-${index}`}
            text={item}
          />
        ))}

      </div>

    </section>
  );
};

export default SupportSlider;

/* ================= ITEM ================= */

const SliderItem = ({ text }) => {
  return (
    <div className="slider-item">
      <span className="dot"></span>
      <h2>{text}</h2>
    </div>
  );
};