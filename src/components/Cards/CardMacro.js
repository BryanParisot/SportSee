import React from "react";
import PropTypes from "prop-types";

const CardMacro = (props) => {
  return (
    <div className="CardMacro">
      <div className={`${props.bgColor} contain_logo`}>
        <img src={props.logo} alt="logo" />
      </div>
      <div className="contain_informations">
        <p className="title">
          {props.title} <span>{props.macro}</span>
        </p>
        <p className="weight">{props.weight}</p>
      </div>
    </div>
  );
};
CardMacro.propTypes = {
  bgColor: PropTypes.string,
  logo: PropTypes.string,
  title: PropTypes.number,
  macro: PropTypes.string,
  weight: PropTypes.string,
};
export default CardMacro;
