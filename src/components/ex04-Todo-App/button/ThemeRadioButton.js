import React, { useEffect, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { BrightnessHigh, MoonFill } from "react-bootstrap-icons";
import { useTheme } from "../hook/TodoProvider";

export const ThemeRadioButton = () => {
  const { theme, changeTheme } = useTheme();
  const [activeButton, setActiveButton] = useState("light");

  return (
    <div>
      <ToggleButtonGroup
        type="radio"
        name="options"
        defaultValue="light"
        onChange={(value) => {
          changeTheme(value);
          setActiveButton(value);
        }}
      >
        <ToggleButton id="radio-1" value="light" variant="outline-warning">
          <BrightnessHigh color={activeButton === "light" ? theme.backgroundColor : "#ffc107"} />
        </ToggleButton>
        <ToggleButton id="radio-2" value="dark" variant="outline-warning">
          <MoonFill color={activeButton === "dark" ? theme.backgroundColor : "#ffc107"} />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};
