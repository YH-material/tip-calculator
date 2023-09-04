import styles from "./TipDisplay.module.css";

interface ITipDisplay {
  totalTipPerPerson: number;
  totalPerPerson: number;
  resetAll: () => void;
}

function TipDisplay({
  totalTipPerPerson,
  totalPerPerson,
  resetAll,
}: ITipDisplay) {
  return (
    <div className={styles["container"]}>
      <div className={styles["tip-display"]}>
        <p>
          Tip amount <br />{" "}
          <span className={styles["per-person"]}>/ person</span>
        </p>
        <p className={styles["tip-amount"]}>
          ${(totalTipPerPerson || 0).toFixed(2)}
        </p>
        <p>
          Total <br />
          <span className={styles["per-person"]}>/ person</span>
        </p>
        <p className={styles["tip-amount"]}>
          ${(totalPerPerson || 0).toFixed(2)}
        </p>
      </div>
      <button className={styles["reset-button"]} onClick={() => resetAll()}>
        RESET
      </button>
    </div>
  );
}

export default TipDisplay;
