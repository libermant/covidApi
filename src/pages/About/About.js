import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import "./About.css";
import Donut from "../../components/Charts/Donut";
import {COLORS} from "../../constants"


const About=({dailyData})=> {
  console.log(dailyData.deaths);
  const applicationsStatusThisMonth = [
    {
      status: "TOTAL CASES",
      value: dailyData.confirmed/100,
      color: COLORS.accepted,
    },
    {
      status: "DEATHS",
      value: dailyData.deaths/100,
      color: COLORS.interviewing,
    },
    {
      status: "RECOVERED",
      value: dailyData.recovered/100,
      color: COLORS.rejected,
    },
    {
      status: "NEW CASES",
      value: dailyData.new_confirmed/100,
      color: COLORS.pending,
    },
    {
        status: "NEW DEATHS",
        value: dailyData.new_deaths/100,
        color: COLORS.pending,
      },
  ];
  return (
    <div className="About">
      <div className="container">
        <h1>Build React Graphs The Easy Way</h1>
        <div className="section">
        <Donut applicationsStatusThisMonth={applicationsStatusThisMonth} /> 
        </div>
      </div>
    </div>
  );
}

export default About;