import React from "react";
import CasesIncludeLogo from "../Cases/CasesIncludeLogo";

const NavigationVertical = () => {
  return (
    <div className="NavigationVertical">
      <div className="contain_logo">
        <CasesIncludeLogo logo="../pictures/logos/Meditation.png" />
        <CasesIncludeLogo logo="../pictures/logos/Swiming.png" />
        <CasesIncludeLogo logo="../pictures/logos/Bike.png" />
        <CasesIncludeLogo logo="../pictures/logos/Strong.png" />
      </div>
      <p>Copiryght, SportSee 2020</p>
    </div>
  );
};

export default NavigationVertical;
