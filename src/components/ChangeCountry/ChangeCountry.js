import React from "react";
import "./ChangeCountry.css";

const ChangeCountry = ({ ChangeCountry, dailyApdate ,numberWithCommas}) => {
  const options = [
    "ACTIVE",
    "CASES",
    "RECOVERED",
    "DEATHS",
    "CRITICAL",
    "TODAY",
  ];
  

  return (
    <>
      <div id="changeCountry">{ChangeCountry}</div>
      <div id="change">
        {options.map((item) => (
          <div className="change">
            <div>{item}:</div>
            {item === "TODAY" ? 
              <div>{numberWithCommas(dailyApdate["todayCases"])}</div>
             : 
              <div>{numberWithCommas(dailyApdate[item.toLowerCase()])}</div>
            }
          </div>
        ))}
      </div>
    </>
  );
};

export default ChangeCountry;
