import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

it("renders a heading", () => {
  render(<Page />);

  const heading = screen.getByText("qantas hotels code challenge");

  expect(heading).toBeInTheDocument();
});
