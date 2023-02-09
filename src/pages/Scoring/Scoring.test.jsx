import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import React from "react";
import Scoring from "./Scoring";

describe("Scoring component", () => {
  describe("with valid inputs", () => {
    it("calls the onSubmit function", async () => {
      const mockOnSubmit = jest.fn();
      const { getByLabelText, getByRole } = render(
        <Scoring onSubmit={mockOnSubmit} />
      );

      await act(async () => {
        fireEvent.change(getByLabelText("What's your gender *"), {
          target: { value: "MALE" },
        });
        fireEvent.change(getByLabelText("Your marital status *"), {
          target: { value: "MARRIED" },
        });
        fireEvent.change(getByLabelText("Your number of dependents *"), {
          target: { value: "1" },
        });
        fireEvent.change(getByLabelText("Date of issue of the passport *"), {
          target: { value: "2003-03-18" },
        });
        fireEvent.change(getByLabelText("Division code *"), {
          target: { value: "000-000" },
        });
        fireEvent.change(getByLabelText("Your employment status *"), {
          target: { value: "UNEMPLOYED" },
        });
        fireEvent.change(getByLabelText("Your employer INN *"), {
          target: { value: "000000000000" },
        });
        fireEvent.change(getByLabelText("Your salary *"), {
          target: { value: "111111" },
        });
        fireEvent.change(getByLabelText("Your position *"), {
            target: { value: "111111" },
          });
          fireEvent.change(getByLabelText("Your work experience total *"), {
            target: { value: "11" },
          });
          fireEvent.change(getByLabelText("Your work experience current *"), {
            target: { value: "12" },
          });
      });

      await act(async () => {
        fireEvent.click(getByRole("button"));
      });

      expect(mockOnSubmit).toBeCalled;
    });
  });

  describe("with invalid gender", () => {
    it("renders the gender validation error", async () => {
      const {getByLabelText, container} = render(<Scoring />)

      await act(async () => {
        const gender = getByLabelText("What's your gender *")
        fireEvent.change(gender, {target: {value: "123"}})
        fireEvent.blur(gender)
      })

      expect(container.innerHTML).toMatch("Select one of the options")
    })
  })

  describe("with invalid status", () => {
    it("renders the status validation error", async () => {
      const {getByLabelText, container} = render(<Scoring />)

      await act(async () => {
        const status = getByLabelText("Your marital status *")
        fireEvent.change(status, {target: {value: "123"}})
        fireEvent.blur(status)
      })

      expect(container.innerHTML).toMatch("Select one of the options")
    })
  })

  describe("with invalid dependents", () => {
    it("renders the dependents validation error", async () => {
      const {getByLabelText, container} = render(<Scoring />)

      await act(async () => {
        const dependents = getByLabelText("Your number of dependents *")
        fireEvent.change(dependents, {target: {value: "6"}})
        fireEvent.blur(dependents)
      })

      expect(container.innerHTML).toMatch("Select one of the options")
    })
  })



  describe("with invalid code", () => {
    it("renders the code validation error", async () => {
      const {getByLabelText, container} = render(<Scoring />)

      await act(async () => {
        const code = getByLabelText("Division code *")
        fireEvent.change(code, {target: {value: "123"}})
        fireEvent.blur(code)
      })

      expect(container.innerHTML).toMatch("The series must be 6 digits")
    })
  })

  describe("with invalid employment", () => {
    it("renders the employment validation error", async () => {
      const {getByLabelText, container} = render(<Scoring />)

      await act(async () => {
        const employment = getByLabelText("Your employment status *")
        fireEvent.change(employment, {target: {value: "123"}})
        fireEvent.blur(employment)
      })

      expect(container.innerHTML).toMatch("Select one of the options")
    })
  })
});