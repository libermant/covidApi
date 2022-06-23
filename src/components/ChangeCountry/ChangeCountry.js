import React from "react";
import "./ChangeCountry.css";

const ChangeCountry = ({
  ChangeCountry,
  ACTIVE,
  CASES,
  RECOVERED,
  DEATHS,
  CRITICAL,
  TODAY_CASES,
 
}) => {
  return (
    <>
      <div id="changeCountry">{ChangeCountry}</div>
      <div id="change">
        <div className="change">
          <div>ACTIVE:</div>
          <div>{ACTIVE}</div>
        </div>
        <div className="change">
          <div>CASES:</div>
          <div>{CASES}</div>
        </div>
        <div className="change">
          <div>RECOVERED:</div>
          <div>{RECOVERED}</div>
        </div>
        <div className="change">
          <div>DEATHS:</div>
          <div>{DEATHS}</div>
        </div>
        <di className="change">
          <div>CRITICAL:</div>
          <div>{CRITICAL}</div>
        </di>
        <div className="change">
          <div>TODAY:</div>
          <div>{TODAY_CASES}</div>
        </div>        
      </div>
    </>
  );
};

export default ChangeCountry;
