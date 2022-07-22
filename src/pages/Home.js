import React from "react";
import { NavLink } from "react-router-dom";
import NavigationHorizontal from "../components/Navigations/NavigationHorizontal";
import NavigationVertical from "../components/Navigations/NavigationVertical";

const Home = () => {
  return (
    <div className="home">
      <NavigationHorizontal img="./pictures/logo.png" />
      <div className="contain_nav_information">
        <NavigationVertical />
        <div className="profil_name">
          <NavLink to="profil/12">profil 12</NavLink>
          <NavLink to="profil/18">profil 18</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
