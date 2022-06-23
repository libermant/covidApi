import React, { useEffect, useState} from "react";
import axios from "axios";
import DailyData from "../../components/DailyData/DailyData";
import Most from "../../components/Most/Most";

const Home = () => {
  const [dailyData, setDailyData] = useState([]);
  const [sort, setSort] = useState([]);
  const [sortDeaths,setSortDeaths]=useState([])

  async function fetchData() {
    try {
      const countriesApiUrl = `https://corona-api.com/timeline`;
      const { data } = await axios.get(countriesApiUrl);
      const a = data.data[0];
      setDailyData([
        {
          TOTAL_CASES: a.confirmed.toLocaleString(),
          DEATHS: a.deaths.toLocaleString(),
          RECOVERED: a.recovered.toLocaleString(),
          NEW_CASES: a.new_confirmed.toLocaleString(),
          NEW_DEATHS: a.new_deaths.toLocaleString(),
        },
      ]);
    } catch (e) {
      console.log(e);
    }
  }
  fetchData();

  async function fatchSort() {
    try {
      const apiSortUrl = `https://disease.sh/v3/covid-19/countries`;
      const { data } = await axios.get(apiSortUrl);      
      setSort(
        data.map((el) => [
          {
            country: el.country,
            deaths: el.deaths,
            todayDeaths: el.todayDeaths,
            cases:el.cases,
            todayCases:el.todayCases
          },
        ])        
      );        
    } catch (e) {
      console.log(e);
    }
  }
  fatchSort();

  useEffect(()=>{
    setSortDeaths(sort.sort((a, b) => a.deaths - b.deaths))
  },[sort])
  
  //console.log(sortDeaths[0]);
 // console.log(sortDeaths[10]);
  //console.log(sortDeaths[40]);
  

  return (
    <div>
      {dailyData.map((toDay) => (
        <DailyData
          TOTAL_CASES={toDay.TOTAL_CASES}
          DEATHS={toDay.DEATHS}
          RECOVERED={toDay.RECOVERED}
          NEW_CASES={toDay.NEW_CASES}
          NEW_DEATHS={toDay.NEW_DEATHS}
        />
      ))}

      <Most
        deathsAllTime={"Most Deaths-All Time"}
        deathsAllToday={"Modt Confirmed-All Time"}
        confirmedAllTime={"Most Deaths-All Today"}
        confirmedAllToday={"Modt Confirmed-All Today"}
      />
    </div>
  );
};

export default Home;
