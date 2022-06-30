import React from "react";
import "./Contries.css";

const Contries = ({ contries, clikFunc }) => {
  return <div onClick={clikFunc}>{contries}</div>;
};

export default Contries;
