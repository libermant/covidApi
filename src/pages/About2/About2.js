import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import "./About2.css";
import Bar from "../../components/Charts/Bar";
import Line from "../../components/Charts/Line";
import SparklineContainer from "../../components/Charts/SparklineContainer";


function About2() {
  return (
    <div className="About2">
      <div className="container">
        <h1>Build React Graphs The Easy Way</h1>
        <div className="section">
          
          <Line/>
          <Bar/>
          <SparklineContainer/>         
        </div>
      </div>
    </div>
  );
}

export default About2;