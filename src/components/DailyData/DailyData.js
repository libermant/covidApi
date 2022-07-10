import React from "react";
import "./DailyData.css";

const DailyData = ({
  // TOTAL_CASES,
  // DEATHS,
  // RECOVERED,
  // NEW_CASES,
  // NEW_DEATHS,
  dailyData
}) => {
  return (
    <>
      <div id="covid">COVID-19 CORONAVIRUS YRECKER</div>
      <div id="dailyData">
        <div id="TOTAL_CASES">
          TOTAL CASES<div id="TOTAL">{dailyData.confirmed.toLocaleString()}</div>
        </div>
        <div id="data">
          <div className="timeline">
            <div>DEATHS</div>
            <div>{dailyData.confirmed.toLocaleString()}</div>
          </div>
          <div className="timeline">
            <div>RECOVERED </div>
            <div>{dailyData.confirmed.toLocaleString()}</div>
          </div>
          <div className="timeline">
            <div>NEW CASES </div>
            <div>{dailyData.confirmed.toLocaleString()}</div>
          </div>
          <div className="timeline">
            <div>NEW DEATHS </div>
            <div>{dailyData.confirmed.toLocaleString()}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyData;
