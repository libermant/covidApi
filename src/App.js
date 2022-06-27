import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Country from "./pages/Country/Country";
import axios from "axios";
import React, { useRef, useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    console.log("fetch effect");
    async function fetchData() {
      const countriesApiUl = `https://disease.sh/v3/covid-19/countries`;
      const { data } = await axios.get(countriesApiUl);
      console.log("data");
      console.log(data);
      setCountries(data /*.map((el) => el.country)*/);
      // console.log(data);
    }
    fetchData();
  }, []);
  console.log(countries);
  return (
    <div>
      <BrowserRouter>
        <NavBar countries={countries} />
        <Routes>
          <Route path="/" element={<Home countries={countries} />} />
          <Route path="/about" element={<About />} />
          <Route path="/country/:country" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
