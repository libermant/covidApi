import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Contries from "../Contries/Contries";
import "./NavBar.css";

const NavBar = ({ countries }) => {
  const [countryInput, setCountryInput] = useState("");
  const [mapArr, setMapArr] = useState([countries]);
  const [isClick, setIsClick] = useState(false);
  const a = useRef(null);

  const navigate = useNavigate();

  const style = () => {
    a.current.id = "a";
  };

  useEffect(() => {
    const newCountries = countries.filter((el) =>
      el.country.toLowerCase().includes(countryInput)
    );
    setMapArr(newCountries);
  }, [countryInput]);

  return (
    <>
      <div id="navStyle">
        <div>
          <Link
            to="/"
            onClick={() => {
              setIsClick(false);
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
          <Link
            to="/about"
            onClick={() => {
              setIsClick(false);
              setCountryInput();
            }}
          >
            About
          </Link>
        </div>
      </div>
      <div ref={a}>
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
