import React, { useState } from "react";

import axios from "axios";

const App = () => {
  const [countryList, setCountryList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [weather, setWeather] = useState([]);

  const handleChange = event => {
    setSearchInput(event.target.value);
  };

  const submitCountry = event => {
    event.preventDefault();
    axios
      .get(`https://restcountries.eu/rest/v2/name/${searchInput}`)
      .then(response => setCountryList(response.data));
  };

  const displayDetails = (lt, ll) => {
    console.log("lt", lt);
    console.log("ll", ll);
    axios
      .get(`https://restcountries.eu/rest/v2/alpha/${lt}`)
      .then(response => setCountryList([response.data]));

    countryList.map(element => (
      <div key={element.numericCode}>
        <div>
          <h2>{element.name}</h2>
          <div>capital: {element.capital}</div>
          <div>population: {element.population}</div>
        </div>
        <img src={element.flag} style={{ height: "50px" }} alt="new" />
        <h3>languages</h3>
        {element.languages.map((el, index) => (
          <div key={index}>
            <li>{el.name}</li>
          </div>
        ))}
      </div>
    ));

    axios
      .get(
        `http://api.weatherstack.com/current?access_key=a53f41c9ac5e5730bea28d381713dc1d&query=${ll}`
      )
      .then(response => setWeather([response.data]));
    weather.map((element, index) => (
      <div key={index}>
        <div>temperature: {element.current.temperature} Celsius</div>
        console.log("element.current.temperature", element.current.temperature)
        <img
          src={element.current.weather_icons}
          style={{ height: "50px" }}
          alt="new"
        />
        <div>
          wind {element.current.wind_speed} direction {element.current.wind_dir}
        </div>
      </div>
    ));
  };

  let display;
  if (countryList.length > 10) {
    display = <div>Too many matches</div>;
  }
  if (countryList.length < 10) {
    display = countryList.map(element => (
      <div key={element.numericCode}>
        <h2>
          {element.name}
          <button
            onClick={() => displayDetails(element.alpha3Code, element.capital)}
          >
            show
          </button>
        </h2>
      </div>
    ));
  }

  if (countryList.length === 1)
    display = countryList.map(element => (
      <div key={element.numericCode}>
        <div>
          <h2>{element.name}</h2>
          <div>capital: {element.capital}</div>
          <div>population: {element.population}</div>
        </div>
        <img src={element.flag} style={{ height: "50px" }} alt="new" />
        <h3>languages</h3>
        {element.languages.map((el, index) => (
          <div key={index}>
            <li>{el.name}</li>
          </div>
        ))}
      </div>
    ));

  return (
    <div>
      <form onSubmit={submitCountry}>
        find countries <input value={searchInput} onChange={handleChange} />
      </form>
      {display}
    </div>
  );
};

export default App;
