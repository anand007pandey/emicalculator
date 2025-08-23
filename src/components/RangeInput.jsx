import React, { useState } from "react";
import { InputGroup, FormControl, Form } from "react-bootstrap";

export default function Rangesbar() {
  const [loanAmount, setLoanAmount] = useState(7500000);
  const [tenure, setTenure] = useState(10);
  const [interest, setInterest] = useState(9.55);

  return (
    <div className="firstleft">
      <h2>Home Loan EMI Calculator</h2>
      <div className="slider-box">
        <div className="rightinput">
          <label>Home Loan Amount</label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">₹</InputGroup.Text>
            <Form.Control value={loanAmount} aria-describedby="basic-addon1" />
          </InputGroup>
        </div>
        <input
          type="range"
          min="500000"
          max="20000000"
          step="500000"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
        />
        <div className="scale">
          <span>5L</span>
          <span>25L</span>
          <span>50L</span>
          <span>75L</span>
          <span>1Cr</span>
          <span>1.5Cr</span>
          <span>2Cr</span>
        </div>
      </div>

      <div className="slider-box">
        <div className="rightinput middle">
          <label>Loan Tenure</label>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control value={tenure} />
            <InputGroup.Text>Yr</InputGroup.Text>
          </InputGroup>
        </div>
        <input
          type="range"
          min="0"
          max="30"
          step="1"
          value={tenure}
          onChange={(e) => setTenure(Number(e.target.value))}
        />
        <div className="scale">
          <span>0Yr</span>
          <span>5Yr</span>
          <span>10Yr</span>
          <span>15Yr</span>
          <span>20Yr</span>
          <span>25Yr</span>
          <span>30Yr</span>
        </div>
      </div>

      <div className="slider-box">
        <div className="rightinput">
          <label>Interest Rate</label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
            <Form.Control value={interest} aria-describedby="basic-addon1" />
          </InputGroup>
        </div>
        <input
          type="range"
          min="4"
          max="16"
          step="0.01"
          value={interest}
          onChange={(e) => setInterest(Number(e.target.value))}
        />
        <div className="scale">
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
          <span>11</span>
          <span>12</span>
          <span>13</span>
          <span>14</span>
          <span>15</span>
          <span>16</span>
        </div>
      </div>
    </div>
  );
}
