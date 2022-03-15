
import './App.css';
import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { Country, State, City }  from 'country-state-city';


function App() {
  const [value, setValue] = useState('')
const [state_of_countary, setstate_of_countary] = useState('')
  const [State_name, setstate_name] = useState('')
  const options = useMemo(() => countryList().getData(), [])
 // const State = useMemo(() => stateList().getData(), [])

  const changeHandler = value => {
    console.log(value);
    Country.getAllCountries()
     setstate_of_countary(State.getStatesOfCountry(value.value));
    setValue(value)
    setstate_name(State_name)
  }
 
  
  console.log(state_of_countary);
  return (
    <div className="App">
     
     <h1>Hello World</h1>
     <div className='container'>
     <Select options={options} value={value} onChange={(e)=>{changeHandler(e)}} />
     <div className='mb-3 mx-auto'>
     <Select options={state_of_countary} value={State_name} onChange={(e)=>{changeHandler(e)}} />
     </div>
     </div>
    </div>
  );
}

export default App;
