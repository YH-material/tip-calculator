import { SetStateAction } from "react";
import styles from "./TipForm.module.css";
import personIcon from "./person.svg";

interface ITipForm {
  values: values;
  dispatchers: dispatchers;
}

function TipForm({ values, dispatchers }: ITipForm) {
  const { billAmount, tipPercentage, numberOfPeople } = values;
  const { setBillAmount, setTipPercentage, setNumberOfPeople } = dispatchers;
  return (
    <div className={styles["form-container"]}>
      <label htmlFor="bill">Bill</label>
      <div className={styles["form-input-container"]}>
        <span className={styles["form-icon"]}>$</span>
        <input
          className={styles["form-input"]}
          id="bill"
          type="number"
          value={billAmount}
          onChange={(e) => updateValueIfNum(e, setBillAmount)}
        />
      </div>
      <span>Select Tip %</span>
      <div className={styles["button-container"]}>
        <button
          className={`${styles["tip-amount-button"]} ${
            tipPercentage === 5 ? styles["selected"] : ""
          }
              ]`}
          onClick={() => setTipPercentage(5)}
        >
          5%
        </button>
        <button
          className={`${styles["tip-amount-button"]} ${
            tipPercentage === 10 ? styles["selected"] : ""
          }
            ]`}
          onClick={() => setTipPercentage(10)}
        >
          10%
        </button>
        <button
          className={`${styles["tip-amount-button"]} ${
            tipPercentage === 15 ? styles["selected"] : ""
          }
              ]`}
          onClick={() => setTipPercentage(15)}
        >
          15%
        </button>
        <button
          className={`${styles["tip-amount-button"]} ${
            tipPercentage === 25 ? styles["selected"] : ""
          }
              ]`}
          onClick={() => setTipPercentage(25)}
        >
          25%
        </button>
        <button
          className={`${styles["tip-amount-button"]} ${
            tipPercentage === 50 ? styles["selected"] : ""
          }
              ]`}
          onClick={() => setTipPercentage(50)}
        >
          50%
        </button>
        <input
          className={`${styles["form-input"]} ${styles["custom-tip"]}`}
          type="number"
          placeholder="Custom"
          value={tipPercentage}
          onChange={(e) => updateValueIfNum(e, setTipPercentage)}
        />
      </div>
      <span>Number of people</span>
      <div className={styles["form-input-container"]}>
        <img
          src={personIcon}
          alt="person icon"
          className={styles["form-icon"]}
        />
        <input
          className={styles["form-input"]}
          type="number"
          id="people"
          value={numberOfPeople}
          onChange={(e) => updateValueIfNum(e, setNumberOfPeople)}
        />
      </div>
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
