import React, { useState } from "react";
import "./App.css";

export function replaceCamelCaseWithSpaces(colorName: string) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setColor] = useState<string>("MediumVioletRed");
  const [buttonState, setButtonDisabled] = useState<boolean>(false);
  const newButtonText = buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div className="App">
      <button
        onClick={() => setColor(newButtonText)}
        style={{
          backgroundColor: buttonState ? "gray" : buttonColor,
          color: "white",
        }}
        disabled={buttonState}
      >
        Change to {replaceCamelCaseWithSpaces(newButtonText)}
      </button>

      <input
        type="checkbox"
        id="disable-button"
        onChange={(e) => setButtonDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button">Disable Button</label>
    </div>
  );
}

export default App;
