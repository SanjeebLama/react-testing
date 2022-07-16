import { fireEvent, render, screen } from "@testing-library/react";
import App, { replaceCamelCaseWithSpaces } from "./App";

test("render a button name 'Change color to Blue' ", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "Change to blue" });
  expect(buttonElement).toHaveStyle({ backgroundColor: "red" });
});

test("onClick background color of button should be changed to red", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "Change to blue" });
  fireEvent.click(buttonElement);

  expect(buttonElement.textContent).toBe("Change to red");
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});

test("render a checkbox", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "Change to blue" });
  expect(buttonElement).toBeEnabled();

  const checkboxElement = screen.getByRole("checkbox");
  expect(checkboxElement).not.toBeChecked();
});

test("when checkbox is checked, the button should be disabled", () => {
  render(<App />);

  const buttonElement = screen.getByRole("button", { name: "Change to blue" });

  expect(buttonElement).toBeEnabled();

  const checkboxElement = screen.getByRole("checkbox");

  fireEvent.click(checkboxElement);

  expect(checkboxElement).toBeChecked();

  expect(buttonElement).toBeDisabled();
});

test("button should be enabled when the checkbox is unchecked", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "Change to blue" });
  expect(buttonElement).toBeEnabled();

  const checkboxElement = screen.getByRole("checkbox", {
    name: "Disable Button",
  });
  expect(checkboxElement).not.toBeChecked();

  fireEvent.click(checkboxElement);
  expect(checkboxElement).toBeChecked();

  expect(buttonElement).toBeDisabled();

  fireEvent.click(checkboxElement);
  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toBeEnabled();
});

test("button color should be grey when the button is disabled", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "Change to blue" });

  expect(buttonElement).toHaveStyle({ backgroundColor: "red" });

  const checkboxElement = screen.getByRole("checkbox", {
    name: "Disable Button",
  });

  expect(checkboxElement).not.toBeChecked();

  fireEvent.click(checkboxElement);

  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveStyle({ backgroundColor: "gray" });
});

test("button color should be back to as it is when checkbox is disabled", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "Change to blue" });
  const checkboxElement = screen.getByRole("checkbox", {
    name: "Disable Button",
  });

  fireEvent.click(checkboxElement);

  expect(buttonElement).toBeDisabled();
  expect(checkboxElement).toBeChecked();

  expect(buttonElement).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkboxElement);

  expect(buttonElement).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
  expect(buttonElement).toBeEnabled();
});

describe('test if the function replaces camelcase with spaces', () => {
  test("Works with no inner capital",()=>{
    expect(replaceCamelCaseWithSpaces("Red")).toBe("Red")
  })
  test("Works for one inner capital letter",()=>{
    expect(replaceCamelCaseWithSpaces("MidnightBlue")).toBe("Midnight Blue")
  })
  test("Works for multiple inner capital letters",()=>{
    expect(replaceCamelCaseWithSpaces("MediumVioletRed")).toBe("Medium Violet Red")

  })
})

