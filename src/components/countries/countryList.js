import React from "react";
import CountryCard from "./countryCard";

export default function CountryList({ countries }) {
  if (!countries || !countries.length) {
    return <div>No countries loaded!</div>;
  }
  return countries.map((c) => {
    return <CountryCard country={c} key={c.name.official}></CountryCard>;
  });
}
