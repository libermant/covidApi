import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Contries from "../Contries/Contries";
import axios from "axios";
import "./NavBar.css";

const NavBar = ({ countries }) => {
  //const [contries, setCountriess] = useState([]);
  const [countryInput, setCountryInput] = useState("");
  const [mapArr, setMapArr] = useState([countries]);
  const [isClick, setIsClick] = useState(false);
  const a = useRef(null);

  const navigate = useNavigate();

  // useEffect(() => {
  //   async function fetchData() {
  //     const countriesApiUl = `https://disease.sh/v3/covid-19/countries`;
  //     const { data } = await axios.get(countriesApiUl);
  //     setCountries(data.map((el) => el.country));
  //   }
  //   fetchData();
  // }, []);
  // console.log(countries);
  const style = () => {
    a.current.id = "a";
  };

  useEffect(() => {
    const newCountries = countries.filter((el) =>
      el.country.toLowerCase().includes(countryInput)
    );
    setMapArr(newCountries);

    console.log(newCountries);
    console.log(countryInput);
  }, [countryInput]);

  return (
    <>
      <div id="navStyle">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          {isClick ? (
            <button
              onClick={() => {
                setIsClick(false);
                setCountryInput("");
                a.current.id = "";
              }}
            >
              X
            </button>
          ) : null}
          <input
            placeholder="country"
            value={countryInput}
            onFocus={() => {
              style();
              setIsClick(true);
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                navigate(`../country/${e.target.value}`);
              }
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
      <div /*id="map"*/ ref={a}>
        {isClick
          ? mapArr.map((country) => (
              <Contries
                contries={country.country}
                clikFunc={() => {
                  navigate(`../country/${country.country}`);
                  setIsClick(false);
                }}
              />
            ))
          : ""}
      </div>
    </>
  );
};

export default NavBar;
