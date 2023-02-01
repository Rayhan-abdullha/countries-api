import React from "react";

const CountryInfo = ({ country }) => {
  return (
    <React.Fragment key={country.id}>
      <div className="singleCountryInfo">
        <img src={country.flags.png} />
        <h1 className="title">{country.name.common}</h1>
      </div>
      <p>
        <span className="info">capital:</span> {country.capital[0]}
      </p>
      <p>
        <span className="info">population:</span> {country.population}
      </p>
      <p>
        <span className="info">continents:</span> {country.continents[0]}
      </p>
      <p>
        <span className="info">region:</span> {country.region}
      </p>
      <p>
        <span className="info">subregion:</span> {country.subregion}
      </p>
      <p>
        <span className="info">startofweek:</span> {country.startOfWeek}
      </p>
      <p>
        <span className="info">timezones:</span> {country.timezones[0]}
      </p>
      <p>
        <span className="info">timezones:</span>{" "}
        {country.independent ? "Yes" : "No"}
      </p>
      <p>
        <span className="info">currencies:</span>{" "}
        {country.currencies[Object.keys(country.currencies)[0]].name}
      </p>
      <p>
        <span className="info">languages:</span>{" "}
        {Object.values(country.languages)[0]}
      </p>
    </React.Fragment>
  );
};

export default CountryInfo;
