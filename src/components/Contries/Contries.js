import React from "react";
import "./Contries.css";
//import { useNavigate } from "react-router-dom";

const Contries = ({ contries, clikFunc }) => {
  //const navigate = useNavigate();
  return <div onClick={clikFunc}>{contries}</div>;
};

export default Contries;
