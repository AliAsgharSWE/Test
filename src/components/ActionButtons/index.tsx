import React from "react";
import { ActionButtonsProps } from "./types";
import CustomButton from "../common/Buttons";

const ActionButtons: React.FC<ActionButtonsProps> = ({
  buttons,
  isMobile,
  onButtonClick,
}) => (
  <div
    className={`max-w-2xl flex items-center justify-start gap-3 mt-3 flex-wrap ${
      isMobile ? "my-auto text-start tablet:-ml-24" : "md:ps-8 text-start"
    }`}
  >
    {buttons.map((button, index) => (
      <CustomButton
        key={index}
        text={button.text}
        variant={button.variant}
        onClick={() => onButtonClick(button.action)}
      />
    ))}
  </div>
);

export default ActionButtons;
