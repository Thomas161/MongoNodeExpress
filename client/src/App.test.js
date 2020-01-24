import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import App from "./App";
import Form from "./components/Form";
import { Field } from "./components/Field";

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

// test("Find these placeholder elements", () => {
//   const { getByPlaceholderText } = render(<Field />);
//   const exampleHTML = getByPlaceholderText("Email");
//   expect(exampleHTML).toBeInTheDocument();
// });

test("Query Selector in DOM", () => {
  const { container } = render(<Form />);
  const queryTerm = container.querySelector("firstName");
  expect(queryTerm).toBeDefined();
});

it("captures clicks", () => {
  function handleClick() {}
  const { getByText } = render(
    <button onClick={handleClick}>Click Me!</button>
  );
  const node = getByText("Click Me!");
  fireEvent.click(node);
});
afterEach(cleanup);
