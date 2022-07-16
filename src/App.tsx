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
        style={{ backgroundColor: buttonColor, color: "white" }}
        disabled={buttonState}
      >
        Change to {newButtonText}
      </button>

      <input
        type="checkbox"
        onChange={(e) => setButtonDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
