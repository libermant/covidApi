import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import "./About.css";
import Donut from "../../components/Charts/Donut";

import {COLORS} from "../../constants"
import { useState } from "react";


const About=({dailyData})=> {

  
  const applicationsStatusThisMonth = [
    {
      status: "TOTAL CASES",
      value: dailyData?.confirmed,
      color: COLORS.accepted,
    },
    {
      status: "DEATHS",
      value: dailyData?.deaths,
      color: COLORS.interviewing,
    },
    {
      status: "RECOVERED",
      value: dailyData?.recovered,
      color: COLORS.rejected,
    },
    {
      status: "NEW CASES",
      value: dailyData?.new_confirmed,
      color: COLORS.pending,
    },
    {
        status: "NEW DEATHS",
        value: dailyData?.new_deaths,
        color: COLORS.pending,
      },
  ];
  let a;
  const outcome= applicationsStatusThisMonth?.map((el)=>(a+=parseInt(el.value)))
  console.log(a);
 
  return (
    <div className="About">
      <div className="container">
        <h1>Build React Graphs The Easy Way</h1>
        <div className="section">
        <Donut applicationsStatusThisMonth={applicationsStatusThisMonth}outcome={outcome} /> 
        
        </div>
      </div>
    </div>
  );
}

export default About;