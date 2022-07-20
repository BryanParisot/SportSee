import React from "react";
import NavigationHorizontal from "../components/Navigations/NavigationHorizontal";
import NavigationVertical from "../components/Navigations/NavigationVertical";

const Profil = () => {
  return (
    <div>
      <NavigationHorizontal img="./pictures/logo.png" />
      <NavigationVertical/>
    </div>
  );
};

export default Profil;
