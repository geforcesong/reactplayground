import React, { useState, useEffect } from "react";
import CountryHeader from "./header";
import CountryList from "./countryList";
import "./styles/country.css";
import { sendRequest } from "./shared/common";

export default function CountryHome() {
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [containerClass, setContainerClass] = useState('country-container')

  const updateInputValue = function (evt) {
    setInputValue(evt.target.value);
  };

  const loadCountry = async function () {
    const data = await sendRequest("https://restcountries.com/v3.1/all");
    setCountries(data);
  };

  const handleKeyDown =async (event) => {
    if (event.key === "Enter") {
      if (!inputValue) {
        return loadCountry();
      }
      const url = `https://restcountries.com/v3.1/name/${inputValue.toLocaleLowerCase()}`;
      const data = await sendRequest(url);
      setCountries(data);
    }
  };

  const searchByRegion = async function (e) {
    const value = e.target.options[e.target.selectedIndex].value;
    if (value) {
      const url = `https://restcountries.com/v3.1/region/${value.toLowerCase()}`;
      const data = await sendRequest(url);
      setCountries(data);
    } else {
      loadCountry();
    }
  };

  const updateTheme = function(curTheme){
    if(curTheme === 'Dark'){
        setContainerClass('country-container dark');
    } else{
        setContainerClass('country-container');
    }
  }

  useEffect(() => {
    loadCountry();
  }, []);

  return (
    <div className={containerClass}>
      <CountryHeader updateTheme={updateTheme}></CountryHeader>
      <div className="country-inputs">
        <input
          type="text"
          placeholder="Please input country to search"
          onKeyDown={handleKeyDown}
          value={inputValue}
          onChange={updateInputValue}
        />
        <select name="regionSelect" onChange={searchByRegion}>
          <option value="">None</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="country-list">
        <CountryList countries={countries}></CountryList>
      </div>
    </div>
  );
}
