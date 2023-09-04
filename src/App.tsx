import { useState } from "react";
import "./App.css";
import TipDisplay from "./components/TipDisplay";
import TipForm from "./components/TipForm";

function App() {
  const [billAmount, setBillAmount] = useState(100);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const totalPerPerson =
    (billAmount * (tipPercentage / 100 + 1)) / numberOfPeople;
  const totalTipPerPerson = (billAmount * tipPercentage) / 100 / numberOfPeople;

  const resetAll = () => {
    setBillAmount(100);
    setTipPercentage(0);
    setNumberOfPeople(1);
  };
  return (
    <div className="app-container">
      <TipForm
        values={{ billAmount, tipPercentage, numberOfPeople }}
        dispatchers={{ setBillAmount, setTipPercentage, setNumberOfPeople }}
      />
      <TipDisplay
        totalPerPerson={totalPerPerson}
        totalTipPerPerson={totalTipPerPerson}
        resetAll={resetAll}
      />
    </div>
  );
}

export default App;
