

import './App.css';
import React, { useState } from 'react'
import Select from 'react-select'
//import countryList from 'react-select-country-list'
import { Country, State, City }  from 'country-state-city';


function App() {
 const [value, setValue] = useState('')
//const [state_of_countary, setstate_of_countary] = useState('')
  //const [State_name, setstate_name] = useState('')
  //const options = useMemo(() => countryList().getData(), [])
 // const State = useMemo(() => stateList().getData(), [])

//  const opt = languages.map(item => ({'value':item}));
//  console.log(opt);
const country = Country.getAllCountries()
const opt =country.map(({isoCode:value, name:label}) => ({value,label}));
console.log(opt); 
 const state = State.getStatesOfCountry("IN")
 
 //const res = state.map((state_name => ({'value':state_name,'label':state_name})));
 const res = state.map(({isoCode:value, name:label}) => ({value,label}));
 console.log(res); 
 const city = City.getCitiesOfState("IN" ,"RJ")
 //const citycode=[{"countryCode":"value"}, {"isoCode":"value"}, {"name":"value"}]
 const rese = city.map(({isoCode:value, name:label}) => ({value,label}));
 console.log(rese); 


  const changeHandler = value => {
   console.log(value); 
   Country.getAllCountries()
   State.getStatesOfCountry()
   City.getCitiesOfState()

    //setstate_of_countary(State.getStatesOfCountry(value.value));
    setValue(value)
    //setstate_name(State_name)
  }
  
 // console.log(Country.getAllCountries());
  //console.log( State.getStatesOfCountry("IN"));
  //console.log(city.getCitiesOfState("RJ"));
  
  return (

    <>
      <div className="App">
      
          <h1>Hello World</h1>
          <div className='container'>
            <div className='mb-3 mx-auto'>
            
              <Select options={country} value={value} onChange={(e)=>{changeHandler(e)}} placeholder="Country" />
            </div>
            <div className='mb-3 mx-auto'>
            
            <Select options={state} value={res} onChange={(e)=>{changeHandler(e)}}  placeholder="State"/>
            </div>
            <div className='mb-3 mx-auto'>
          
            <Select options={city} value={rese} onChange={(e)=>{changeHandler(e)}} placeholder="City" />
            </div>
          </div>
      </div>
    </>
  );
}

export default App;

