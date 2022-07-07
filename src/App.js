import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
//import About2 from "./pages/About2/About2";
import Country from "./pages/Country/Country";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [dailyData, setDailyData] = useState();
  const [isdaily, setisdaily] = useState(false);
  const [isClick, setIsClick] = useState(false);


  useEffect(() => {
    console.log("fetch effect");
    async function fetchData() {
      const countriesApiUl = `https://disease.sh/v3/covid-19/countries`;
      const { data } = await axios.get(countriesApiUl);
      console.log("data");
      console.log(data);
      setCountries(data);
    }
    fetchData();
  }, []);
 
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
  return (
    <div>
      <BrowserRouter>
        <NavBar countries={countries} isClick={isClick} setIsClick={setIsClick}/>
        <Routes>
          <Route path="/" element={<Home countries={countries}isdaily={isdaily} dailyData={dailyData}/>} />
          <Route path="/about" element={<About dailyData={dailyData} />} />
          {/*<Route path="/about2" element={<About2 />} />*/}

          <Route path="/country/:country" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
