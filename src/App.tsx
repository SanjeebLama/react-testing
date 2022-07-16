import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [buttonColor, setColor] = useState("red");

  const handleChange = () => {
    setColor("blue");
  };
  return (
    <div className="App">
      <button onClick={handleChange} style={{ backgroundColor: buttonColor }}>
        {buttonColor === "red" ? "Change to Blue" : "Change to Red"}
      </button>
    </div>
  );
}

export default App;
