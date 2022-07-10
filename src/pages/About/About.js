import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import "./About.css";
import Donut from "../../components/Charts/Donut";
import Bar from "../../components/Charts/Bar";

import { COLORS } from "../../constants";
import { useState } from "react";

const About = ({ dailyData, dayBeforeYesterday, Yesterday }) => {
  const [chart, setChart] = useState(false);

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
  let outcome = 0;
  applicationsStatusThisMonth?.forEach((el) => {
    outcome += parseInt(el.value);
  });

  const series = [
    {
      status: "TOTAL CASES",
      data: [
        dailyData?.confirmed,
        Yesterday?.confirmed,
        dayBeforeYesterday?.confirmed,
      ],
      color: COLORS.total,
    },
    {
      status: "DEATHS",
      data: [dailyData?.deaths, Yesterday?.deaths, dayBeforeYesterday?.deaths],
      color: COLORS.pending,
    },
    {
      status: "RECOVERED",
      data: [
        dailyData?.recovered,
        Yesterday?.recovered,
        dayBeforeYesterday?.recovered,
      ],
      color: COLORS.interviewed,
    },
    {
      status: "NEW CASES",
      data: [
        dailyData?.new_confirmed,
        Yesterday?.new_confirmed,
        dayBeforeYesterday?.new_confirmed,
      ],
      color: COLORS.rejected,
    },
    {
      status: "NEW DEATHS",
      data: [
        dailyData?.new_deaths,
        Yesterday?.new_deaths,
        dayBeforeYesterday?.new_confirmed,
      ],
      color: COLORS.accepted,
    },
  ];

  const categories = [
    dailyData?.updated_at,
    Yesterday?.updated_at,
    dayBeforeYesterday?.updated_at,
  ];

  const seriesLabels = {
    visible: true,
    padding: 3,
    font: "normal 16px Arial, sans-serif",
    position: "center",
  };

  return (
    <div className="About">
      <div
        id="btn"
        onClick={() => {
          setChart(!chart);
        }}
      >
        {chart ? "Data for the last three days" : "Data for today"}
      </div>
      <div className="container">
        <div className="section">
          {chart ? (
            <Donut
              applicationsStatusThisMonth={applicationsStatusThisMonth}
              outcome={outcome}
            />
          ) : (
            <Bar
              categories={categories}
              seriesLabels={seriesLabels}
              series={series}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
