import { React} from "react";
import { useTranslation } from "react-i18next";

function Calculation({ emi, totalInterest, totalPayment, formatCurrency }) {
  const { t } = useTranslation();
  return (
    <div class="dtil-info">
      <h3>{t("common.detailedCalculations")}</h3>
      <div class="info-sec">
        <div class="txt-val" id="totalEmiDef">
          {formatCurrency(emi)}
        </div>
        <p>{t("calculation.emi")}</p>
      </div>
      <div class="info-sec">
        <div class="txt-val" id="totalInterestPreEmiDef">
          {formatCurrency(totalInterest)}
        </div>
        <p>{t("calculation.totalInterest")}</p>
      </div>
      <div class="info-sec">
        <div class="txt-val" id="totalPayOfLoanDef">
         {formatCurrency(totalPayment)}
        </div>
        <p>{t("calculation.totalPayment")}</p>
      </div>
    </div>
  );
}

export default Calculation;
