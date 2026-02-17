import { useState } from "react";
import styles from '../components/Input.module.css'
import cities from '../cities.json'



function Input() {
  const [userInput, setUserInput] = useState("")
  const [suggestion, setSuggestion] = useState("")


  const inputHandler = (e) => {
    const value = e.target.value
    setUserInput(value)


    const match = cities.find((city) => city.toLowerCase().startsWith(value.toLowerCase()) )

    setSuggestion(match && match !== value ? match : '')
  }


  const handleKeyDown = (e) => {
    if( e.key === 'Tab' && suggestion){
      e.preventDefault()
      setUserInput(suggestion)
      setSuggestion('')
    }
  }

  return (
    <div className={styles.autocompletewrapper}>
      <div className={styles.inputwrapper}>
        <input
          type="text"
          name="field"
          placeholder="Type the city..."
          autoFocus="on"
          value={userInput}
          onChange={inputHandler}
          onKeyDown={handleKeyDown}
          className={styles.input}
        />
        <span className={styles.inputborder}></span>
      {
        suggestion && <div className={styles.suggest}>{suggestion}</div>
      }
      </div>
      
    </div>
  );
}

export default Input;
