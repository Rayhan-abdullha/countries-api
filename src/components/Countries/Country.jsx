import React from "react";
import { useNavigate } from "react-router-dom";

export default function Country({ country }) {
  const navigate = useNavigate();
  const handleCountry = (name) => {
    navigate(`/name/${name}`);
  };
  return (
    <div className="single-country">
      <img src={country.flags.png} alt="notfound" />
      <h3>{country.name.common}</h3>
      <button
        onClick={() => handleCountry(country.name.common)}
        className="btn btn-primary mb-3"
      >
        Country info
      </button>
    </div>
  );
}
