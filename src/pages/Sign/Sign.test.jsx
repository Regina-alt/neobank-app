import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import React from "react";
import Sign from "./Sign";

describe("Sign component", () => {
  it("should render Sign component correctly", () => {
    const { getByText } = render(<Sign />);
    const element = getByText(/Signing of documents/i);
    expect(element).toBeInTheDocument();
  });

  it("checkbox is worked", () => {
    const onChange = jest.fn();

    const { getByTestId } = render(<Sign onChange={onChange}></Sign>);

    fireEvent.click(getByTestId("CHECKBOX_ID"));
    expect(getByTestId("CHECKBOX_ID")).toBeInTheDocument();
    expect(getByTestId("CHECKBOX_ID")).toBeChecked();
  });

  it("sign is worked", async () => {
    const mockOnSubmit = jest.fn();
    const { getByTestId, getByRole } = render(<Sign onClick={mockOnSubmit} />);

    await act(async () => {
      fireEvent.click(getByTestId("CHECKBOX_ID"));
    });

    expect(mockOnSubmit).toBeCalled;
  });
});
