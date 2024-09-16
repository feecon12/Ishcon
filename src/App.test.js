import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react"; // Import act from react
import App from "./App";

test("renders learn react link", () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    render(<App />);
  });

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
