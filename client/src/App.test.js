import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Form from "./components/Form";

test("renders a header", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/React Form/i);
  expect(linkElement).toBeInTheDocument();
});

test("Find elements in DOM", () => {
  const { getByPlaceholderText } = render(<Form />);
  const test1 = getByPlaceholderText("First Name");
  expect(test1).toBeInTheDocument();
});
