import { useState } from "react";
import cities from '../cities.json'
function Input () {
  const [inputValue, setInputValue] = useState("");
  // const [cities, setCities] = useState('')

  const inputHandler = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };
 
  const filteredCities = inputValue === "" ? [] : 
  cities.filter((city) => city.startsWith(inputValue))
  console.log(filteredCities);
  
  return (
    <div className="input">
      <label htmlFor="input"></label>
      <input
        type="text"
        id="input"
        name="field"
        value={inputValue}
        onChange={inputHandler}
      />
      <div className="">
       {inputValue ? filteredCities.map((city) => <p key={inputValue}>{city}</p>) : ''}
      </div>
    </div>
  );
};

export default Input;
