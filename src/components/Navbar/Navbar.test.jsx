import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  it("should render Navbar component correctly", () => {
    const { getByText } = render(<Navbar />, { wrapper: BrowserRouter });
    const element = getByText(/NeoBank/i);
    expect(element).toBeInTheDocument();
  });

  it("should render the home page", () => {
    const { container, getByTestId } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const navbar = getByTestId("navbar");
    const link = getByTestId("home-link");
    expect(container.innerHTML).toMatch("NeoBank");
    expect(navbar).toContainElement(link);
  });

  it("should navigate to page", () => {
    const { container, getByTestId } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    fireEvent.click(getByTestId("loan-link"));
    expect(container.innerHTML).toMatch("Credit card");
  });
});
