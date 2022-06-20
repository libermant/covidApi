import React, { useState} from "react";
import { Link } from "react-router-dom";
import Contries from "../Contries/Contries";
import axios from "axios"




const navStyle = {
  display: "flex",
  border: "#000 solid 1px",
  justifyContent: "space-around",
};

const NavBar = () => {
    const [countries , setCountries]=useState("")

    async function fetchData() {
        const countriesApiUl = ` https://corona-api.com/countries`;
        const { data } = await axios.get(countriesApiUl);    
        setCountries(data.data.map((el) =>el.name))        
      }
      fetchData();
  return (
      
    <div id="navStyle">
        
        {countries.map((country)=>(
            <Contries contries={country}/>
        ))}
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <input></input>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default NavBar;
