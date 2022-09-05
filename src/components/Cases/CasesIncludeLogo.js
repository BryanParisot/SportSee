import React from "react";
import PropTypes from "prop-types";

const CasesIncludeLogo = (props) => {
  return (
    <div className="CasesIncludeLogo">
      <img src={props.logo} alt="Logo" />
    </div>
  );
};

CasesIncludeLogo.prototype = {
  logo: PropTypes.string,
};

export default CasesIncludeLogo;
