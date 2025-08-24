import React, { useState,useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import RangesBar from "./components/RangeInput";
import Calculation from "./components/DetailedCalc";
import EMIChart from "./components/Charts";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [loanAmount, setLoanAmount] = useState(500000);
    const [tenure, setTenure] = useState(5);
    const [interest, setInterest] = useState(7);

    // Calculation logic in App
    const calculateEMI = (P, annualRate, years) => {
      const N = years * 12;
      const R = annualRate / 12 / 100;
      if (R === 0) return P / N;
      return (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    };

    const emi = calculateEMI(loanAmount, interest, tenure);
    const totalPayment = emi * tenure * 12;
    const totalInterest = totalPayment - loanAmount;

    const formatCurrency = (num) =>
      "₹ " + Math.round(num).toLocaleString("en-IN");

  // Build Chart Data (Amortization Schedule)
  const chartData = useMemo(() => {
  const data = [];
  let balance = loanAmount;
  const monthlyRate = interest / 12 / 100;

  for (let year = 1; year <= tenure; year++) {
    let interestPaidYear = 0;
    let principalPaidYear = 0;

    for (let m = 1; m <= 12; m++) {
      const interestComp = balance * monthlyRate;
      const principalComp = emi - interestComp;
      balance -= principalComp;

      interestPaidYear += interestComp;
      principalPaidYear += principalComp;
      if (balance <= 0) break;
    }

    data.push({
      year,
      EMI: Math.round(emi * 12),          // 👈 YEARLY EMI (fix)
      Interest: Math.round(interestPaidYear),
      Principal: Math.round(principalPaidYear),
    });

    if (balance <= 0) break;
  }

  return data;
}, [loanAmount, tenure, interest, emi]);

  return (
    <Container>
      <Row>
        <Col md={8}>
          <RangesBar 
            loanAmount={loanAmount}
            setLoanAmount={setLoanAmount}
            tenure={tenure}
            setTenure={setTenure}
            interest={interest}
            setInterest={setInterest}
            />
        </Col>
        <Col md={4}>
          <Calculation 
            emi={emi}
            totalInterest={totalInterest}
            totalPayment={totalPayment}
            formatCurrency={formatCurrency}
            />
        </Col>
      </Row>
      <Row>
        <Col md={8}>
            <EMIChart data={chartData} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
