import React, { useEffect, useState } from "react";
import DailyData from "../../components/DailyData/DailyData";
import Most from "../../components/Most/Most";
import "./Home.css";
const Home = ({ countries, dailyData, isdaily, setIsClick ,numberWithCommas}) => {
  const sort = [...countries];  
  const [isSort, setisSort] = useState(false);
  
  const title = {
    title0: "Most Deaths - All Time",
    title1: "Most Confiremed - All Time",
    title2: "Most Deaths - Today",
    title3: "Most Confiremed - Today",
  };
  const key=["deaths","todayDeaths","cases","todayCases"]
  useEffect(() => {
    setisSort(true);
  }, [countries]);
  

  return (
    <div>
      {isdaily && <DailyData dailyData={dailyData}numberWithCommas={numberWithCommas} />}
      <div className="sort">
        {isSort &&
          key.map((el, i) => (
            <Most
              title={title["title" + i]}
              sorty={sort.sort((a, b) => b[el] - a[el]).slice(0, 5)}
              setIsClick={setIsClick}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
