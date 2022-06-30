import React, { useState, useEffect } from "react";
import { 
  
  useParams } from "react-router-dom";
import "./Country.css";
import axios from "axios";
import ChangeCountry from "../../components/ChangeCountry/ChangeCountry";

const Country = () => {
  const [dailyApdate, setDailyApdate] = useState([]);

  const params = useParams();
  const { country } = params;
  console.log(country);

  useEffect(() => {
    try {
      async function fetchData() {
        const countriesApiUl = `https://disease.sh/v3/covid-19/countries/${country}`;
        const { data } = await axios.get(countriesApiUl);
        const { active, cases, recovered, deaths, critical, todayCases } = data;
        setDailyApdate([
          {
            active,
            cases,
            recovered,
            deaths,
            critical,
            todayCases,
          },
        ]);
      }
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, [country]);

  return (
    <>
      <div id="flex">
        {dailyApdate.map((apdate) => (
          <ChangeCountry
            ChangeCountry={country}
            ACTIVE={apdate.active.toLocaleString()}
            CASES={apdate.cases.toLocaleString()}
            RECOVERED={apdate.recovered.toLocaleString()}
            DEATHS={apdate.deaths.toLocaleString()}
            CRITICAL={apdate.critical.toLocaleString()}
            TODAY_CASES={apdate.todayCases.toLocaleString()}
          />
        ))}
      </div>
    </>
  );
};

export default Country;
