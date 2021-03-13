import React, { useEffect, useState } from "react";
import axios from "axios";

const Currency = () => {
  const [input, setInput] = useState("");
  const [fromCurrency, setFrom] = useState("USD");
  const [toCurrency, setTo] = useState("PKR");
  const [result, setResult] = useState("");

  useEffect(() => {
    const call = async () => {
      let value = await axios.get("https://api.exchangerate.host/convert", {
        params: {
          from: fromCurrency,
          to: toCurrency,
        },
      });

      setResult((value.data.info.rate * input).toFixed(3));
      console.log(value.data);
    };
    call();
  });
  //console.log(result);

  // const options1 = value.map((elements) => {
  //   console.log("ok");
  // });

  return (
    <div>
      <h1>Currency Converter</h1>
      <label>Enter Amount </label>
      <input
        input="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <label>From</label>
      <select onChange={(event) => setFrom(event.target.value)}>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="CAD">CAD</option>/
      </select>
      <label>To</label>
      <select onChange={(event) => setTo(event.target.value)}>
        <option value="PKR">PKR</option>
        <option value="INR">INR</option>
        <option value="SAR">SAR</option>
      </select>

      <label>{result}</label>
    </div>
  );
};

export default Currency;
