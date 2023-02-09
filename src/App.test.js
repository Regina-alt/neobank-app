import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "./App";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe("App component", () => {
  it("landing on a bad page", () => {
    const badRoute = "/some/bad/route";
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });

  it("full app rendering/navigating", async () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(
      screen.getByText(
        /Choose the design you like and apply for card right now/i
      )
    ).toBeInTheDocument();
    await userEvent.click(screen.getByText(/credit card/i));
    expect(
      screen.getByText(/Platinum digital credit card/i)
    ).toBeInTheDocument();
  });
});
