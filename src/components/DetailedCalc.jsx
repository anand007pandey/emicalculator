import { React, useState } from "react";

function Calculation({ emi, totalInterest, totalPayment, formatCurrency }) {
  return (
    <div class="dtil-info">
      <h3>Detailed Calculations</h3>
      <div class="info-sec">
        <div class="txt-val" id="totalEmiDef">
          {formatCurrency(emi)}
        </div>
        <p>EMI</p>
      </div>
      <div class="info-sec">
        <div class="txt-val" id="totalInterestPreEmiDef">
          {formatCurrency(totalInterest)}
        </div>
        <p>Total interest payable over the loan term</p>
      </div>
      <div class="info-sec">
        <div class="txt-val" id="totalPayOfLoanDef">
         {formatCurrency(totalPayment)}
        </div>
        <p>Total payments made over the loan term</p>
      </div>
    </div>
  );
}

export default Calculation;
