import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './countryDetails.css'

export default function Countrydtls() {
  const [countries, setCountries] = useState([]);
  const parms = useParams();

  useEffect(() => {
    fetch(`
    https://restcountries.com/v3.1/name/${parms.name}`)
      .then((res) => res.json())
      .then((res) => {
        setCountries(res);
      });
  }, [parms]);

  
  return (
    <div className="countryDetails container">
      {
        countries.map(co => (
          <React.Fragment key={co.id}>
            <div className="singleCountryInfo">
              <img src={co.flags.png} />
              <h1 className="title">{co.name.common}</h1>
            </div>
            <p><span className="info">capital:</span> {co.capital[0]}</p>
            <p><span className="info">population:</span> {co.population}</p>
            <p><span className="info">continents:</span> {co.continents[0]}</p>
            <p><span className="info">region:</span> {co.region}</p>
            <p><span className="info">subregion:</span> {co.subregion}</p>
            <p><span className="info">startofweek:</span> {co.startOfWeek}</p>
            <p><span className="info">timezones:</span> {co.timezones[0]}</p>
            <p><span className="info">timezones:</span> {co.independent ? "Yes" : "No"}</p>
            <p><span className="info">currencies:</span> {co.currencies[Object.keys(co.currencies)[0]].name}</p>
            <p><span className="info">languages:</span> {Object.values(co.languages)[0]}</p>
            

          </React.Fragment>
        ))
      }
    </div>
  );
}
