import { useState } from "react";
function Simpleinterest() {
  const [principal, setprincipal] = useState(0);
  const [rate, setrate] = useState(0);
  const [time, settime] = useState(0);
  const [interest, setinterest] = useState(0);
  function calculate(e) {
    e.preventDefault();
    const calculation = (principal * rate * time) / 100;
    setinterest(calculation);
  }
  return (
    <div>
      <div>THIS IS SIMPLE INTEREST CALCULATOR</div>
      <form onSubmit={calculate}>
        <input
          type="number"
          name="principal"
          id="principal"
          placeholder="enter your principal amount"
          onChange={(e) => setprincipal(e.target.value)}
        />
        <input
          type="number"
          name="rate"
          id="rate"
          placeholder="enter interest rate"
          onChange={(e) => setrate(e.target.value)}
        />
        <input
          type="number"
          name="time"
          id="time"
          placeholder="enter the time period"
          onChange={(e) => settime(e.target.value)}
        />
        <button>calculate</button>
      </form>
      <p>YOUR INTEREST IS {interest}</p>
    </div>
  );
}
export default Simpleinterest;
