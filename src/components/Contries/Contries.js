import React from "react";
import "./Contries.css";

const Contries = ({ contries }) => {
  return (
    <div id="contries">
      <div className="contries">{contries}</div>
    </div>
  );
};

export default Contries;
