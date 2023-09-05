import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Test if the status is correct when the game is starting
//   Test if X and O can win with the row one completed
// Test cell values after click on the reset button
// Test tie game, one posibility
