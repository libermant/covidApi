import React, { useEffect, useState } from "react";
import "./Most.css";
import { useNavigate } from "react-router-dom";

const Most = ({ countries }) => {
  const navigate = useNavigate();

  const sort = [...countries];
  const [sortTodayDeaths, setSortTodayDeaths] = useState([]);
  const [sortDeaths, setSortDeaths] = useState([]);
  const [sortCases, setSortCases] = useState([]);
  const [sortTodayCases, setSortTodayCases] = useState([]);

  useEffect(() => {
    setSortDeaths(sort.sort((a, b) => b.deaths - a.deaths).slice(0, 5));
    setSortTodayDeaths(
      sort.sort((a, b) => b.todayDeaths - a.todayDeaths).slice(0, 5)
    );
    setSortCases(sort.sort((a, b) => b.cases - a.cases).slice(0, 5));
    setSortTodayCases(
      sort.sort((a, b) => b.todayCases - a.todayCases).slice(0, 5)
    );
  }, [countries]);
  return (
    <div className="sort">
      <ol className="deaths">
        <h2>Most Deaths - All Time</h2>
        {sortDeaths.map((el) => (
          <li onClick={() => navigate(`../country/${el.country}`)}>
            {el.country}
          </li>
        ))}
      </ol>
      <ol className="deaths">
        <h2>Most Confiremed - All Time</h2>
        {sortCases.map((el) => (
          <li onClick={() => navigate(`../country/${el.country}`)}>
            {el.country}
          </li>
        ))}
      </ol>
      <ol className="deaths">
        <h2> Most Deaths - Today</h2>
        {sortTodayDeaths.map((el) => (
          <li onClick={() => navigate(`../country/${el.country}`)}>
            {el.country}
          </li>
        ))}
      </ol>
      <ol className="deaths">
        <h2> Most Confiremed - Today</h2>
        {sortTodayCases.map((el) => (
          <li onClick={() => navigate(`../country/${el.country}`)}>
            {el.country}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Most;
