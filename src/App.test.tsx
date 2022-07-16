import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("render a button name 'Change color to Blue' ", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "Change to Blue" });
  expect(buttonElement).toHaveStyle({ backgroundColor: "red" });
});

test("onClick background color of button should be changed to red", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "Change to Blue" });
  fireEvent.click(buttonElement);

  expect(buttonElement.textContent).toBe("Change to Red");
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});
