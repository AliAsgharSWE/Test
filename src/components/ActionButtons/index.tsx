import React from "react";
import { ActionButtonsProps } from "./types";
import CustomButton from "../common/Buttons";

const ActionButtons: React.FC<ActionButtonsProps> = ({
  buttons,
  isMobile,
  onButtonClick,
}) => (
  <div
    className={`w-full flex items-center gap-3 mt-3 flex-wrap ${
      isMobile
        ? "my-auto text-start tablet:justify-center tablet:items-center"
        : "md:ps-8 text-start"
    }`}
  >
    {buttons.map((button, index) => (
      <CustomButton
        key={index}
        text={button.text}
        variant={button.variant}
        className={`
          mobile-xs:px-3 mobile-xs:py-1.5 mobile-xs:text-sm
          mobile-sm:px-4 mobile-sm:py-2 mobile-sm:text-sm
          mobile-md:px-4 mobile-md:py-2 mobile-md:text-base
          mobile-lg:px-5 mobile-lg:py-2.5 mobile-lg:text-base
          mobile-xl:px-5 mobile-xl:py-2.5 mobile-xl:text-base
          tablet-sm:px-5 tablet-sm:py-2 tablet-sm:text-base
          tablet:px-5 tablet:py-2 tablet:text-base
          tablet-lg:px-6 tablet-lg:py-3 tablet-lg:text-lg
          laptop:px-6 laptop:py-3 laptop:text-lg
          laptop-lg:px-7 laptop-lg:py-3 laptop-lg:text-lg
          laptop-xl:px-8 laptop-xl:py-3 laptop-xl:text-lg
          desktop:px-10 desktop:py-4 desktop:text-xl
          desktop-lg:px-12 desktop-lg:py-5 desktop-lg:text-2xl
          4k:px-14 4k:py-6 4k:text-4xl mt-10 py-8
        `}
        onClick={() => onButtonClick(button.action)}
      />
    ))}
  </div>
);

export default ActionButtons;
