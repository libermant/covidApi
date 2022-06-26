import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Contries from "../Contries/Contries";
import axios from "axios";
import "./NavBar.css";

const NavBar = () => {
  const [countries, setCountries] = useState([]);
  const [countryInput, setCountryInput] = useState("");
  const [mapArr, setMapArr] = useState([countries]);
  const [isClick, setIsClick] = useState(false);
  console.log(mapArr);
  console.log(countries);

  useEffect(() => {
    async function fetchData() {
      const countriesApiUl = `https://disease.sh/v3/covid-19/countries`;
      const { data } = await axios.get(countriesApiUl);
      setCountries(data.map((el) => el.country));
    }
    fetchData();
  }, []);
  console.log(countries);

  useEffect(() => {
    const newCountries = countries.filter((el) =>
      el.toLowerCase().includes(countryInput)
    );
    setMapArr(newCountries);

    console.log(newCountries);
    console.log(countryInput);
    console.log(countries);
  }, [countryInput]);

  return (
    <>
      <div id="navStyle">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <button
            onClick={() => {
              setIsClick(false);
            }}
          >
            X
          </button>
          <input
            placeholder="country"
            value={countryInput}
            onFocus={() => {
              setIsClick(true);
            }}
            onChange={(e) => {
              setCountryInput(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div id="map">
        {isClick
          ? mapArr.map((country) => <Contries contries={country} />)
          : ""}
      </div>
    </>
  );
};

export default NavBar;
