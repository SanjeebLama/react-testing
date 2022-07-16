import React, { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setColor] = useState<string>("red");
  const [buttonState, setButtonDisabled] = useState<boolean>(false);
  const newButtonText = buttonColor === "red" ? "blue" : "red";

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
        Change to {newButtonText}
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
