import React from "react";
import SelectColor from "./SelectColor";
import { useTheme } from "../../hook/TodoProvider";

export default function ColorBar({ onClick }) {
  const { theme } = useTheme();

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
      {theme.colorList.map((color, i) => {
        return <SelectColor key={i} onClick={(i) => onClick(i)} colorId={i} color={color} />;
      })}
    </div>
  );
}
