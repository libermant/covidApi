import React, { useRef, useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import Contries from "../Contries/Contries";
import axios from "axios";
import "./NavBar.css";

const NavBar = () => {
  const [countries, setCountries] = useState([]);
  const [countryInput, setCountryInput] = useState("");
  const [mapArr, setMapArr] = useState(countries);
  const [isClick, setIsClick] = useState(false);

  const country = useRef(null);

  async function fetchData() {
    const countriesApiUl = /*`https://corona-api.com/countries`*/ `https://disease.sh/v3/covid-19/countries`;
    const { data } = await axios.get(countriesApiUl);
    setCountries(data.map((el) => el.country));
  }
  const styleCountry = () => {
    country.current.id = "a";
  };

  useEffect(() => {
    const newCountries = countries.filter((el) =>
      el.toLowerCase().includes(countryInput)
    );
    setCountries(newCountries);

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
          <input
          placeholder="country"
          value={countryInput}
            onClick={() => {
              setIsClick(true);
              fetchData();
              styleCountry();
            }}
            onChange={(e) => {
              setCountryInput(
                e.target.value
              );
              
            }}
          ></input>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div ref={country}>
        {countries.map((country) => (
          <Contries contries={country} />
        ))}
      </div>
    </>
  );
};

export default NavBar;
