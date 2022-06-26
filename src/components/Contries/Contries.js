import React from "react";
import "./Contries.css";
import { useNavigate } from "react-router-dom";

const Contries = ({ contries }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(`../country/${contries}`/*, {
        state: { contries: `${contries}` },
        }*/)
      }
    >
      {contries}
    </div>
  );
};

export default Contries;
