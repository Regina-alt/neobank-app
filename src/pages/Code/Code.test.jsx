import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import React from "react";
import Code from "./Code";

describe("Code component", () => {
  it("should render Code component correctly", () => {
    const { getByText } = render(<Code />);
    const element = getByText(/Please enter confirmation code/i);
    expect(element).toBeInTheDocument();
  });

  it("inputs code valid", async () => {
    const mockOnSubmit = jest.fn();
    const { getByLabelText, getByRole } = render(
      <Code onClick={mockOnSubmit} />
    );

    await act(async () => {
      fireEvent.change(getByLabelText(""), {
        target: { value: "4444" },
      });
    });

    expect(mockOnSubmit).toBeCalled;
  });

  it("inputs code invalid", async () => {
    const { getByLabelText, container } = render(<Code />);

    await act(async () => {
      const code = getByLabelText("");
      fireEvent.change(code, { target: { value: "123" } });
      fireEvent.blur(code);
    });

    expect(container.innerHTML).toMatch("Invalid confirmation code");
  });
});
