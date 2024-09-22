import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils"; // Import act from react
import App from "./App";

test("renders Home", () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    render(<App />);
  });

  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

