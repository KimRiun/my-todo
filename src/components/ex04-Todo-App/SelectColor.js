import React from "react";

export default function SelectColor({ onClick, color }) {
  return (
    <button
      className="color-item"
      onClick={() => onClick(color)}
      style={{ width: "20px", height: "20px", border: "none", borderRadius: "100%", backgroundColor: color }}
    ></button>
  );
}
