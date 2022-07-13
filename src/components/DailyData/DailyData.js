import React from "react";
import "./DailyData.css";

const DailyData = ({ dailyData, numberWithCommas }) => {
  const options = ["DEATHS", "RECOVERED", "NEW CASES", "NEW DEATHS"];
  const moreOptions = ["deaths", "recovered", "new_confirmed", "new_deaths"];
  return (
    <>
      <div id="covid">COVID-19 CORONAVIRUS YRECKER</div>
      <table className="homeTable">
        <tbody>
          <tr>
            <td colSpan="4">
              <div> TOTAL CASES</div> <br />
              <div>{dailyData.confirmed.toLocaleString()} </div>
            </td>
          </tr>
          <tr>
            {options.map((title) => (
              <td>
                <div>{title}</div>
                <br />
                {title === "NEW CASES" ? (
                  <div>{numberWithCommas(dailyData["new_confirmed"])}</div>
                ) : title === "NEW DEATHS" ? (
                  <div>{numberWithCommas(dailyData["new_deaths"])}</div>
                ) : (
                  <div>{numberWithCommas(dailyData[title.toLowerCase()])}</div>
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default DailyData;
