import React from "react";
import Country from "./Country";
import "./countries.css";
import shortid from "shortid";
import Spinner from "../Spinner/Spinner";

export default function Countries({ country }) {
  return (
    <React.Fragment>
      {country.length !== 0 ? (
        country.map(
          (c) => (
            (c.id = shortid.generate()),
            (
              <div key={c.id} className="col-xl-4 col-md-6">
                <Country country={c} />
              </div>
            )
          )
        )
      ) : (
        <Spinner />
      )}
    </React.Fragment>
  );
}
