import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import "./countryDetails.css";
import CountryInfo from "./CountryInfo";

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
      {countries.map((co) => (
        <CountryInfo country={co} />
      ))}

      {countries.length === 0 && <Spinner />}
    </div>
  );
}
