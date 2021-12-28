import { useState, useRef } from "react";
import { Input } from "./components/Input";
import { currencyConstants } from "./constants/currency.constants";
import "./App.css";

function App() {
  const [value, setValue] = useState({
    amount: 0,
    currency: "",
  });

  const inputRef = useRef();
  const rate = 490;

  const tryToConvert = (value, currency) => {
    const amount = Number(value);
    if (currency === currencyConstants.USD) {
      return (amount * rate).toFixed(2);
    }

    return (amount / rate).toFixed(2);
  };

  const handleSetValue = (amount, currency) => {
    setValue({
      amount,
      currency,
    });
  };

  const amd =
    value.currency === currencyConstants.AMD
      ? value.amount
      : tryToConvert(value.amount, value.currency);

  const usd =
    value.currency === currencyConstants.USD
      ? value.amount
      : tryToConvert(value.amount, value.currency);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h2>AMD to USD Calculator</h2>
        <Input
          value={amd}
          placeholder={currencyConstants.AMD}
          name={currencyConstants.AMD}
          handleChange={handleSetValue}
          type="number"
          inputRef={inputRef}
        />
        <Input
          value={usd}
          placeholder={currencyConstants.USD}
          name={currencyConstants.USD}
          handleChange={handleSetValue}
          type="number"
        />
      </div>
    </div>
  );
}

export default App;
