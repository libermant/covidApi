import React, { useEffect, useState } from "react";
import axios from "axios";
import DailyData from "../../components/DailyData/DailyData";
import Most from "../../components/Most/Most";

const Home = ({ countries ,dailyData,isdaily}) => {
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
      <Most countries={countries} />
    </div>
  );
};

export default Home;
