import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";


const NavigationHorizontal = (props) => {
  return (
    <div className="NavigationHorizontal">
      <img src={props.img} alt="Logo" />
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="nav-active">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/profil" activeClassName="nav-active">
            Profil
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/setting" activeClassName="nav-active">
            Réglage
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/community" activeClassName="nav-active">
            Communauté
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

NavigationHorizontal.propTypes = {
  img: PropTypes.string,
};


export default NavigationHorizontal;
