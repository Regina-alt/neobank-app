import React from "react";
import Faq from "react-faq-component";

const data = {
  title: "Using a credit card",
  rows: [
    {
      title: "What is an interest free credit card?",
      content: `A credit card with a grace period is a bank card with an established credit limit, designed for payment, reservation of goods and services, as well as for receiving cash, which allows you to use credit funds free of charge for a certain period.`,
    },
    {
      title: "How to activate a credit card",
      content:
        "You can activate your credit card and generate a PIN code immediately after receiving the card at a bank branch using a PIN pad.",
    },
    {
      title: "What is a settlement date?",
      content: `The settlement date is the date from which you can pay off the debt for the reporting period. The settlement date falls on the first calendar day following the last day of the reporting period. The first settlement date is reported by the bank when transferring the issued credit card to the client, and then in the monthly account statement.`,
    },
    {
      title: "What do I need to know about interest rates?",
      content: `For each reporting period from the 7th day of the previous month to the 6th day of the current month inclusive, a statement is generated for the credit card. The statement contains information on the amount and timing of the minimum payment, as well as the total amount of debt as of the date of issue.`,
    },
  ],
};

const styles = {
  bgColor: "transpanent",
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentColor: "#7B7454",
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  tabFocus: true,
};

function FAQ() {
  return (
    <>
      <div className="faq">
        <Faq data={data} styles={styles} config={config} />
      </div>
    </>
  );
}

export default FAQ;
