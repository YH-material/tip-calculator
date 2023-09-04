import { SetStateAction } from "react";

interface ITipForm {
  values: values;
  dispatchers: dispatchers;
}

function TipForm({ values, dispatchers }: ITipForm) {
  const { billAmount, tipPercentage, numberOfPeople } = values;
  const { setBillAmount, setTipPercentage, setNumberOfPeople } = dispatchers;
  return (
    <div className="form-container">
      <label htmlFor="bill">Bill</label>
      <div className="form-input-container">
        <span className="form-icon">$</span>
        <input
          className="form-input"
          id="bill"
          type="number"
          value={billAmount}
          onChange={(e) => updateValueIfNum(e, setBillAmount)}
        />
      </div>
      <span>Select Tip %</span>
      <div className="button-container">
        <button
          className="tip-amount-button"
          onClick={() => setTipPercentage(5)}
        >
          5%
        </button>
        <button
          className="tip-amount-button"
          onClick={() => setTipPercentage(10)}
        >
          10%
        </button>
        <button
          className="tip-amount-button"
          onClick={() => setTipPercentage(15)}
        >
          15%
        </button>
        <button
          className="tip-amount-button"
          onClick={() => setTipPercentage(25)}
        >
          25%
        </button>
        <button
          className="tip-amount-button"
          onClick={() => setTipPercentage(50)}
        >
          50%
        </button>
        <input
          className="form-input custom-tip"
          type="number"
          placeholder="Custom"
          value={tipPercentage}
          onChange={(e) => updateValueIfNum(e, setTipPercentage)}
        />
      </div>
      <span>Number of people</span>
      <input
        className="form-input"
        type="number"
        id="people"
        value={numberOfPeople}
        onChange={(e) => updateValueIfNum(e, setNumberOfPeople)}
      />
    </div>
  );
}

const updateValueIfNum = (
  e: React.ChangeEvent<HTMLInputElement>,
  stateDispatcher: React.Dispatch<SetStateAction<number | undefined>>
) => {
  if (!/[0-9]/.test(e.target.value)) {
    e.preventDefault();
  }
  if (e.target.value === "") {
    stateDispatcher(undefined);
    return;
  }
  stateDispatcher(parseFloat(e.target.value));
};

export default TipForm;
