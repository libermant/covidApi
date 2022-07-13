import React, { useEffect, useState } from "react";
import DailyData from "../../components/DailyData/DailyData";
import Most from "../../components/Most/Most";
import "./Home.css";
const Home = ({ countries, dailyData, isdaily, setIsClick ,numberWithCommas}) => {
  const sort = [...countries];
  const [sortTodayDeaths, setSortTodayDeaths] = useState([]);
  const [sortDeaths, setSortDeaths] = useState([]);
  const [sortCases, setSortCases] = useState([]);
  const [sortTodayCases, setSortTodayCases] = useState([]);
  const [isSort, setisSort] = useState(false);
  const arr = [sortDeaths, sortCases, sortTodayDeaths, sortTodayCases];
  const title = {
    title0: "Most Deaths - All Time",
    title1: "Most Confiremed - All Time",
    title2: "Most Deaths - Today",
    title3: "Most Confiremed - Today",
  };
  useEffect(() => {
    setSortDeaths(sort.sort((a, b) => b.deaths - a.deaths).slice(0, 5));
    setSortTodayDeaths(
      sort.sort((a, b) => b.todayDeaths - a.todayDeaths).slice(0, 5)
    );
    setSortCases(sort.sort((a, b) => b.cases - a.cases).slice(0, 5));
    setSortTodayCases(
      sort.sort((a, b) => b.todayCases - a.todayCases).slice(0, 5)
    );
    setisSort(true);
  }, [countries]);

  return (
    <div>
      {isdaily && <DailyData dailyData={dailyData}numberWithCommas={numberWithCommas} />}
      <div className="sort">
        {isSort &&
          arr.map((el, i) => (
            <Most
              title={title["title" + i]}
              sorty={el}
              setIsClick={setIsClick}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
