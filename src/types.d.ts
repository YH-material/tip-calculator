type values = {
  billAmount: number;
  tipPercentage: number;
  numberOfPeople: number;
};

type dispatchers = {
  setBillAmount: Dispatch<SetStateAction<number>>;
  setTipPercentage: Dispatch<SetStateAction<number>>;
  setNumberOfPeople: Dispatch<SetStateAction<number>>;
};
