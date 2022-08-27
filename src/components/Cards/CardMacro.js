import React from "react";

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

export default CardMacro;
