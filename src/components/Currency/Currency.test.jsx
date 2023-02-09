import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import Currency from "./Currency";

describe("Currency component", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => data,
      })
    );
  });

  it("should render Currency component correctly", () => {
    const { getByText } = render(<Currency />, { wrapper: MemoryRouter });
    const element = getByText(/Exchange rate in internet bank/i);
    expect(element).toBeInTheDocument();
  });

  it("should render data in Currency component correctly", async () => {
    render(<Currency />, { wrapper: MemoryRouter });

    await waitFor(() =>
      expect(screen.getByText("Currency")).toBeInTheDocument()
    );
  });

  it("date is correct", async () => {
    render(<Currency />, { wrapper: MemoryRouter });
    const today = new Date();
    
    screen.getByTestId('timeUpdate') == today
  });

});
