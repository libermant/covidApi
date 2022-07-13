import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Contries from "../Contries/Contries";
import "./NavBar.css";

const NavBar = ({ countries, isClick, setIsClick }) => {
  const [countryInput, setCountryInput] = useState("");
  const [mapArr, setMapArr] = useState([]);
  const listCountries = countries.map((el) => el.country.toLowerCase());
  const navigate = useNavigate();

  useEffect(() => {
    const newCountries = countries.filter((el) =>
      el.country.toLowerCase().includes(countryInput)
    );
    setMapArr(newCountries);
  }, [countryInput]);
  useEffect(() => {
    setMapArr(countries);
  }, [countries]);

  return (
    <>
      <div id="navStyle">
        <div>
          <Link
            to="/"
            onClick={() => {
              setIsClick(false);
              setCountryInput("");
            }}
          >
            Home
          </Link>
        </div>
        <div>
          {isClick ? (
            <button
              onClick={() => {
                setIsClick(false);
                setCountryInput("");
              }}
            >
              X
            </button>
          ) : null}
          <input
            placeholder="country"
            value={countryInput}
            onFocus={() => {
              setIsClick(true);
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                if (listCountries.includes(countryInput)) {
                  navigate(`../country/${countryInput}`);
                } else {
                  alert("A country does not exist");
                }
              }
            }}
            onChange={(e) => {
              setCountryInput(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <Link
            to="/data"
            onClick={() => {
              setIsClick(false);
              setCountryInput("");
            }}
          >
            Data
          </Link>
        </div>
      </div>
      <div className={`${isClick ? "display" : "hide"}`}>
        {isClick
          ? mapArr.map((country) => (
              <Contries
                contries={country.country}
                clikFunc={() => {
                  navigate(`../country/${country.country}`);
                  setIsClick(false);
                  setCountryInput("");
                }}
              />
            ))
          : ""}
      </div>
    </>
  );
};

export default NavBar;
