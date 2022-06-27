import React from "react";
import "./DailyData.css";

const DailyData = ({
  TOTAL_CASES,
  DEATHS,
  RECOVERED,
  NEW_CASES,
  NEW_DEATHS,
}) => {
  return (
    <>
      <div id="covid">COVID-19 CORONAVIRUS YRECKER</div>
      <div id="dailyData">
        <div id="TOTAL_CASES">
          TOTAL CASES<div id="TOTAL">{TOTAL_CASES}</div>
        </div>
        <div id="data">
          <div className="timeline">
            <div>DEATHS</div>
            <div>{DEATHS}</div>
          </div>
          <div className="timeline">
            <div>RECOVERED </div>
            <div>{RECOVERED}</div>
          </div>
          <div className="timeline">
            <div>NEW CASES </div>
            <div>{NEW_CASES}</div>
          </div>
          <div className="timeline">
            <div>NEW DEATHS </div>
            <div>{NEW_DEATHS}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyData;
