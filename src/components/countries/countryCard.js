import React from "react";
import { useHistory } from "react-router-dom";

export default function CountryCard({ country }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/country/${country.cioc}`);
  };

  return (
    <div className="country-card" onClick={handleClick}>
      <img src={country.flags.png} alt="" />
      <ul>
        <li>
          <b>{country.name.official}</b>
        </li>
        <li>Population: {country.population}</li>
        <li>Region: {country.region}</li>
        <li>Subregion: {country.subregion}</li>
      </ul>
    </div>
  );
}
