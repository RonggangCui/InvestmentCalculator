import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx"
import { useState } from "react"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualAmount: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInputChange(inputIdentifier, inputValue) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: inputValue
      }
    });
  }

  const inputIsValid = userInput.initialInvestment > 0 && userInput.annualAmount > 0 && userInput.expectedReturn > 0
    && userInput.duration > 0 && Number.isInteger(userInput.duration);;

  return (
    <>
      <Header />
      <UserInput onInputChange={handleInputChange} userInput={userInput} />
      {inputIsValid && <Results userInput={userInput} />}
      {!inputIsValid && <p className="center"> Please enter valid input </p>}
    </>

  )
}

export default App
