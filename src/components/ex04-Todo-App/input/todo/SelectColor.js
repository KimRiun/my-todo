import React from "react";

export default function SelectColor({ onClick, colorId, color }) {
  return (
    <button
      className="color-item"
      onClick={() => onClick(colorId)}
      style={{ width: "20px", height: "20px", border: "none", borderRadius: "100%", backgroundColor: color }}
    ></button>
  );
}
