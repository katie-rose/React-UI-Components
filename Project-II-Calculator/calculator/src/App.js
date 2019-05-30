import React, { useState } from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
  const [display, setDisplay] = useState(0);
  return (
    <div className="container">
      <CalculatorDisplay number={display} />
      <NumberButton setDisplay={setDisplay} />
    </div>
  );
};

export default App;
