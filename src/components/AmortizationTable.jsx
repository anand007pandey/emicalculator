import React from "react";
import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const AmortizationTable = ({ loanAmount, interest, tenure, emi, formatCurrency }) => {
  const monthlyRate = interest / 12 / 100;
  const totalMonths = tenure * 12;
  const { t } = useTranslation();
  let balance = loanAmount;
  let rows = [];

  for (let month = 1; month <= totalMonths; month++) {
    const interestComp = balance * monthlyRate;
    const principalComp = emi - interestComp;
    const beginningBalance = balance;
    balance -= principalComp;

    rows.push({
      month,
      beginningBalance,
      emi,
      principal: principalComp,
      interest: interestComp,
      outstanding: balance > 0 ? balance : 0,
    });

    if (balance <= 0) break;
  }

  return (
    <div className="mt-4">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>{t("table.month")}</th>
            <th>{t("table.beginningBalance")}</th>
            <th>{t("table.emi")}</th>
            <th>{t("table.principal")}</th>
            <th>{t("table.monthlyInterest")}</th>
            <th>{t("table.outstandingBalance")}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.month}>
              <td>{row.month}</td>
              <td>{formatCurrency(row.beginningBalance)}</td>
              <td>{formatCurrency(row.emi)}</td>
              <td>{formatCurrency(row.principal)}</td>
              <td>{formatCurrency(row.interest)}</td>
              <td>{formatCurrency(row.outstanding)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AmortizationTable;
