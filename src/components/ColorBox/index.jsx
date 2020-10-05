import React, { useState } from "react";
import "./ColorBox.scss";
ColorBox.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ["deeppink", "orange", "green", "purple", "blue", "red"];
  const randomIndex = Math.floor(Math.random() * COLOR_LIST.length);
  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initialColor = localStorage.getItem("box_color") || "blue";
    return initialColor;
  });

  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  }
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      Color Box
    </div>
  );
}

export default ColorBox;
