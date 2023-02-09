import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import News from "./News";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe("Currency component", () => {
    
  it("should render post in News component correctly", async () => {
    render(<News />);

    await waitFor(() =>
      expect(
        screen.getByText("Current news from the world of finance")
      ).toBeInTheDocument()
    );
  });

  it("buttons are worked correctly", async () => {
    render(<News />);

    expect(screen.getByTestId("prevButton")).toBeDisabled;
    expect(screen.getByTestId("nextButton")).toBeEnabled;
  });
});
