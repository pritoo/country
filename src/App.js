
import "./App.css";
import React, { useState } from "react";
import Select from "react-select";
import { Country, State, City } from "country-state-city";

function App() {
  const [values, setValues] = useState("");
  const [States, setStates] = useState("");
  const [Cities, setCity] = useState("");

  const country = Country.getAllCountries();
  const countryList = [];
  country.map((index) => {
    countryList.push({ countryCode: index.isoCode, label: index.name });
  });

  const country_state = State.getStatesOfCountry(States.country);
  const stateList = [];
  country_state.map((index) => {
    stateList.push({ value: index.isoCode, label: index.name });
  });
  //debugger;
  const city_name = City.getCitiesOfState(States.country, Cities.state_val);
  console.log(city_name);
  const cityList = [];
  city_name.map((index) => {
    cityList.push({
      value: index.isocode,
      label: index.name,
      element: index.stateCode,
    });
  });

  // console.log(cityList);
  // const changeHandler = (value) => {
  //   Country.getAllCountries();
  //   State.getStatesOfCountry();
  //   City.getCitiesOfState();

  //   setValues(value);

  //setstate_name(State_name)
  //};

  return (
    <>
      <div className="App">
        <h1>Hello World</h1>
        <div className="container">
          <div className="mb-3 mx-auto">
            <Select
              options={countryList}
              value={values.country}
              onChange={(value) => {
                setStates({ country: value.countryCode });
              }}
              placeholder="Country"
            />
          </div>
          <div className="mb-3 mx-auto">
            <Select
              options={stateList}
              value={States.country_state}
              onChange={(value) => {
                debugger;
                setCity({ state: value.label, state_val: value.value });
              }}
              placeholder="State"
            />
          </div>
          <div className="mb-3 mx-auto">
            <Select
              options={cityList}
              value={Cities.city}
              onChange={(value) =>
                setValues({
                  city: value.label,
                  city_name: Cities.country,
                  city: Cities.country_state,
                })
              }
              placeholder="City"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


