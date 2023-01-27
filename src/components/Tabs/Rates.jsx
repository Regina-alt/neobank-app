import React from "react";

function Rates() {
  return (
    <>
      <table className="table-rates">
        <tbody>
          <tr>
            <td>Card currency</td>
            <td>Rubles, dollars, euro</td>
          </tr>
          <tr>
            <td>Interest free period</td>
            <td>0% up to 160 days</td>
          </tr>
          <tr>
            <td>Payment system</td>
            <td>Mastercard, Visa</td>
          </tr>
          <tr>
            <td>Maximum credit limit on the card</td>
            <td>600 000 ₽</td>
          </tr>
          <tr>
            <td>Replenishment and withdrawal</td>
            <td>
              At any ATM. Top up your credit card for free with cash or transfer
              from other cards
            </td>
          </tr>
          <tr>
            <td>Max cashback per month</td>
            <td>15 000 ₽</td>
          </tr>
          <tr>
            <td>Transaction Alert</td>
            <td>
              60 ₽ — SMS or push notifications
              <br></br>0 ₽ — card statement, information about transactions in
              the online bank
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Rates;
