import React, { useEffect, useState } from "react";
import axios from "axios";
import DailyData from "../../components/DailyData/DailyData";
import Most from "../../components/Most/Most";

const Home = ({ countries, dailyData, isdaily, setIsClick }) => {
  // const [dailyData, setDailyData] = useState();
  // const [isdaily, setisdaily] = useState(false);

  // useEffect(() => {
  //   try {
  //     async function fetchData() {
  //       const countriesApiUrl = `https://corona-api.com/timeline`;
  //       const { data } = await axios.get(countriesApiUrl);
  //       const a = data.data[0];
  //       setDailyData(a);
  //       setisdaily(true);
  //     }
  //     fetchData();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, []);
  const sort = [...countries];
  const [sortTodayDeaths, setSortTodayDeaths] = useState([]);
  const [sortDeaths, setSortDeaths] = useState([]);
  const [sortCases, setSortCases] = useState([]);
  const [sortTodayCases, setSortTodayCases] = useState([]);
  const [isSort, setisSort] = useState(false);
  const arr = [sortDeaths, sortCases, sortTodayDeaths, sortTodayCases];
  const title = [
    "Most Deaths - All Time",
    "Most Confiremed - All Time",
    "Most Deaths - Today",
    "Most Confiremed - Today",
  ];

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
      {isdaily ? (
        <DailyData
          TOTAL_CASES={dailyData.confirmed.toLocaleString()}
          DEATHS={dailyData.deaths.toLocaleString()}
          RECOVERED={dailyData.recovered.toLocaleString()}
          NEW_CASES={dailyData.new_confirmed.toLocaleString()}
          NEW_DEATHS={dailyData.new_deaths.toLocaleString()}
        />
      ) : null}
<div className="sort">
      {isSort
        ? arr.map((el) => <Most title={title} sorty={el} setIsClick={setIsClick} />)
        : null}
        </div>
    </div>
  );
};

export default Home;
