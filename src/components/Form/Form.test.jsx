import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import React from "react";
import FormPrescoring from "./FormPrescoring";

describe("Form component", () => {
  describe("with valid inputs", () => {
    it("calls the onSubmit function", async () => {
      const mockOnSubmit = jest.fn();
      const { getByLabelText, getByRole } = render(
        <FormPrescoring onSubmit={mockOnSubmit} />
      );

      await act(async () => {
        fireEvent.change(getByLabelText("You have chosen the amount"), {
          target: { value: "15000" },
        });
        fireEvent.change(getByLabelText("Your last name *"), {
          target: { value: "Migacheva" },
        });
        fireEvent.change(getByLabelText("Your first name *"), {
          target: { value: "Regina" },
        });
        fireEvent.change(getByLabelText("Your patronymic"), {
          target: { value: "Mikhailovna" },
        });
        fireEvent.change(getByLabelText("Your email *"), {
          target: { value: "migacheva288@gmail.com" },
        });
        fireEvent.change(getByLabelText("Your date of birth *"), {
          target: { value: "2003-03-18" },
        });
        fireEvent.change(getByLabelText("Your passport series *"), {
          target: { value: "1111" },
        });
        fireEvent.change(getByLabelText("Your passport number *"), {
          target: { value: "111111" },
        });
      });

      await act(async () => {
        fireEvent.click(getByRole("button"));
      });

      expect(mockOnSubmit).toBeCalled;
    });
  });

  describe("with invalid passport series", () => {
    it("renders the passport series validation error", async () => {
      const {getByLabelText, container} = render(<FormPrescoring />)

      await act(async () => {
        const passport = getByLabelText("Your passport series *")
        fireEvent.change(passport, {target: {value: "123"}})
        fireEvent.blur(passport)
      })

      expect(container.innerHTML).toMatch("The series must be 4 digits")
    })
  })

  describe("with invalid amount", () => {
    it("renders the amount validation error", async () => {
      const {getByLabelText, container} = render(<FormPrescoring />)

      await act(async () => {
        const passport = getByLabelText("You have chosen the amount")
        fireEvent.change(passport, {target: {value: "123"}})
        fireEvent.blur(passport)
      })

      expect(container.innerHTML).toMatch("Wrong amount")
    })
  })

  describe("with invalid last name", () => {
    it("renders the last name validation error", async () => {
      const {getByLabelText, container} = render(<FormPrescoring />)

      await act(async () => {
        const passport = getByLabelText("Your last name *")
        fireEvent.change(passport, {target: {value: ""}})
        fireEvent.blur(passport)
      })

      expect(container.innerHTML).toMatch("Enter your last name")
    })
  })


  describe("with invalid first name", () => {
    it("renders the first name validation error", async () => {
      const {getByLabelText, container} = render(<FormPrescoring />)

      await act(async () => {
        const passport = getByLabelText("Your first name *")
        fireEvent.change(passport, {target: {value: ""}})
        fireEvent.blur(passport)
      })

      expect(container.innerHTML).toMatch("Enter your first name")
    })
  })


  describe("with invalid email", () => {
    it("renders the email validation error", async () => {
      const {getByLabelText, container} = render(<FormPrescoring />)

      await act(async () => {
        const passport = getByLabelText("Your email *")
        fireEvent.change(passport, {target: {value: "123"}})
        fireEvent.blur(passport)
      })

      expect(container.innerHTML).toMatch("Incorrect email address")
    })
  })

  describe("with invalid passport series", () => {
    it("renders the passport series validation error", async () => {
      const {getByLabelText, container} = render(<FormPrescoring />)

      await act(async () => {
        const passport = getByLabelText("Your date of birth *")
        fireEvent.change(passport, {target: {value: "123"}})
        fireEvent.blur(passport)
      })

      expect(container.innerHTML).toMatch("Incorrect date of birth")
    })
  })
});
