import React, { useEffect, useState} from "react";
import axios from "axios";
import DailyData from "../../components/DailyData/DailyData";
import Most from "../../components/Most/Most";

const Home = () => {
  let o=[]
  const [dailyData, setDailyData] = useState();
  const [sort, setSort] = useState([]);
  const [sortDeaths,setSortDeaths]=useState([])
  const [isdaily,setisdaily]=useState(false)
  const [issort,setissort]=useState(false)  
  const [most,setMost]=useState(false)
  // console.log(sort);
useEffect(()=>{
  try{
  async function fetchData() {
    const countriesApiUrl = `https://corona-api.com/timeline`;
    const { data } = await axios.get(countriesApiUrl);
    const a = data.data[0];    
    setDailyData(a)
    
    setisdaily(true)
  }
  fetchData()}
  catch(e){
    console.log(e);
  }  
},[])

 
useEffect(()=>{
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
},[])
useEffect(()=>{
  o =(sort.sort((a, b) => b.deaths - a.deaths))
  console.log(o);
  setMost(true)
  console.log(most);
},[issort])  

  

  return (
    <div>
    
     
      { isdaily? <DailyData
          TOTAL_CASES={dailyData.confirmed}
          DEATHS={dailyData.deaths}
          RECOVERED={dailyData.recovered}
          NEW_CASES={dailyData.new_confirmed}
          NEW_DEATHS={dailyData.new_deaths}
        />:null}
      

 {most? <Most
        deathsAllTime={"Most Deaths-All Time"} a={o[0]}
        deathsAllToday={"Modt Confirmed-All Time"}
        confirmedAllTime={"Most Deaths-All Today"}
        confirmedAllToday={"Modt Confirmed-All Today"}
      />:null}
    </div>
  );
};

export default Home;
