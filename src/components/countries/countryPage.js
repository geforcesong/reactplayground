import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {sendRequest} from './shared/common';

export default function CountryPage() {
  const [country, setCountry] = useState();
  const [borders, setBorders] = useState([]);
  const [code, setCode] = useState('');
  const params = useParams();
  const history = useHistory();

  if( code !== params.countryCode){
      setCode(params.countryCode);
  }

  const loadCountry = async () => {
    
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    const data = await sendRequest(url)
    if (data && data.length) {
      return data[0];
    }
    return null;
  };

  const loadBorders = async (borders) => {
    if (!borders || !borders.length) {
      return null;
    }
    const param = borders.join(",");
    const url = `https://restcountries.com/v3.1/alpha?codes=${param}`;
    return await sendRequest(url);
  };

  const loadData = async () => {
    const country = await loadCountry();
    if (country) {
      setCountry(country);
      const borderData = await loadBorders(country.borders);
      if (borderData && borderData.length) {
        setBorders(borderData);
      }
    }
  };

  useEffect(() => {
    loadData();
  }, [code]);// eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = () => {
    history.goBack();
  };

  const gotoCountry = (country) => {
    history.push(`/country/${country.cioc}`);
  };

  if (!country) {
    return "Loading...";
  }

  return (
    <div>
      <button onClick={handleClick}>Back</button>
      <div className="country-page">
        <img src={country.flags.png} alt="" />
        <div>
          <h1>{country.name.official}</h1>
          <ul>
            <li>Native Name: {country.name.common}</li>
            <li>Top Level Domain: {country.tld?.join(" ")}</li>
            <li>Population: {country.population}</li>
            <li>Region: {country.region}</li>
            <li>SubRegion: {country.subregion}</li>
          </ul>
          <div>
            <b>Border Countries: </b>
            <br />
            {borders.map((b) => {
              return (
                <button key={b.cioc} onClick={() => gotoCountry(b)}>
                  {b.name.official}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
