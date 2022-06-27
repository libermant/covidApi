import React, { useEffect, useState } from "react";
import axios from "axios";
import DailyData from "../../components/DailyData/DailyData";
import Most from "../../components/Most/Most";

const Home = ({ countries }) => {
  let o = [];
  const sort = [...countries];
  const [dailyData, setDailyData] = useState();
  //const [sort, setSort] = useState(countries);
  const [sortDeaths, setSortDeaths] = useState([]);
  const [isdaily, setisdaily] = useState(false);
  const [issort, setissort] = useState(false);
  const [most, setMost] = useState(false);
  // console.log(sort);
  useEffect(() => {
    try {
      async function fetchData() {
        const countriesApiUrl = `https://corona-api.com/timeline`;
        const { data } = await axios.get(countriesApiUrl);
        const a = data.data[0];
        setDailyData(a);

        setisdaily(true);
      }
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, []);

  /*useEffect(()=>{
  try{async function fatchSort(){
    const apiSortUrl = `https://disease.sh/v3/covid-19/countries`;
      const { data } = await axios.get(apiSortUrl);  
      console.log(data);  
      setSort(data)   
      setissort(true)  
  }fatchSort()
  }catch (e) {
      console.log(e);
    }
},[])*/
  useEffect(() => {
    if (countries.length > 0) {
      console.log("sort");
      console.log(sort);
      setSortDeaths(sort.sort((a, b) => b.deaths - a.deaths));
      console.log(sortDeaths[0]); //.country);
      //console.log(o[0].country);
      setMost(true);
      console.log(most);
    }
  }, [countries]);
  console.log(sortDeaths[0]);
  console.log(most);

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

      {most ? (
        <Most
          deathsAllTime={"Most Deaths-All Time"} //a={o[0].country}
          deathsAllToday={"Modt Confirmed-All Time"}
          confirmedAllTime={"Most Deaths-All Today"}
          confirmedAllToday={"Modt Confirmed-All Today"}
        />
      ) : null}
    </div>
  );
};

export default Home;
