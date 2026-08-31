import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  const exchangeRate = 95.15;

  function convert() {
    setResult(amount * exchangeRate);
  }

  return (
    <div>
      <h1>Currency Exchange</h1>

      <input
        type="number"
        placeholder="Enter USD"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={convert}>Convert</button>

      <h2>INR: ₹{result}</h2>
    </div>
  );
}

export default App;
