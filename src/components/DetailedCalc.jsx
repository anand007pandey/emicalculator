import { React, useState } from "react";

function Calculation() {
  return (
    <div class="dtil-info">
      <h3>Detailed Calculations</h3>
      <div class="info-sec">
        <div class="txt-val" id="totalEmiDef">
          ₹ 97254
        </div>
        <p>EMI</p>
      </div>
      <div class="info-sec">
        <div class="txt-val" id="totalInterestPreEmiDef">
          ₹ 4,170,432
        </div>
        <p>Total interest payable over the loan term</p>
      </div>
      <div class="info-sec">
        <div class="txt-val" id="totalPayOfLoanDef">
          ₹ 11,670,432
        </div>
        <p>Total payments made over the loan term</p>
      </div>
    </div>
  );
}

export default Calculation;
