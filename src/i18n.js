import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        calculation: {
          loanAmount: "Loan Amount",
          tenure: "Tenure (Years)",
          interest: "Interest Rate",
          emi: "EMI",
          totalInterest: "Total Interest Payable",
          totalPayment: "Total Payment",
          chartTitle: "Amortization Chart",
        },
        common:{
            homeloancalculator : "Home Loan EMI Calculator",
             detailedCalculations: "Detailed Calculations",
            emichart : "EMI Chart",
        },
        ranges:{
            homeloanamt: "Home Loan Amount",
            loanten: "Loan Tenure",
            intrate: "Interest Rate",
        },
        table: {
          month: "Month",
          beginningBalance: "Beginning Loan Balance",
          emi: "EMI",
          principal: "Principal",
          monthlyInterest: "Monthly Interest",
          outstandingBalance: "Outstanding Balance",
        },
      },
    },
    hi: {
      translation: {
        calculation: {
          loanAmount: "ऋण राशि",
          tenure: "अवधि (वर्ष)",
          interest: "ब्याज दर",
          emi: "ईएमआई",
          totalInterest: "कुल ब्याज",
          totalPayment: "कुल भुगतान",
          chartTitle: "अमॉर्टाइजेशन चार्ट",
        },
        common: {
            homeloancalculator: "गृह ऋण ईएमआई कैलकुलेटर",
            emichart: "ईएमआई चार्ट",
            detailedCalculations: "विस्तृत गणना",
        },
        ranges: {
            homeloanamt: "गृह ऋण राशि",
            loanten: "ऋण अवधि",
            intrate: "ब्याज दर",
        },
        table: {
          month: "महीना",
          beginningBalance: "शुरुआती ऋण शेष",
          emi: "ईएमआई",
          principal: "मूलधन",
          monthlyInterest: "मासिक ब्याज",
          outstandingBalance: "बकाया शेष",
        },
      },
    },
    mr: {
      translation: {
        calculation: {
          loanAmount: "कर्जाची रक्कम",
          tenure: "कर्ज कालावधी (वर्षे)",
          interest: "व्याज दर",
          emi: "ईएमआय",
          totalInterest: "एकूण व्याज",
          totalPayment: "एकूण परतफेड",
          chartTitle: "अमॉर्टायझेशन चार्ट",
        },
        common: {
            homeloancalculator: "गृहकर्ज ईएमआय कॅल्क्युलेटर",
            emichart: "ईएमआय चार्ट",
            detailedCalculations: "सविस्तर गणना",
        },
        ranges: {
            homeloanamt: "गृहकर्जाची रक्कम",
            loanten: "कर्ज कालावधी",
            intrate: "व्याज दर",
        },
        table: {
          month: "महिना",
          beginningBalance: "कर्जाची सुरुवातीची शिल्लक",
          emi: "ईएमआय",
          principal: "मूलधन",
          monthlyInterest: "मासिक व्याज",
          outstandingBalance: "बाकी शिल्लक",
        },
      },
    },
    gu: {
      translation: {
        calculation: {
          loanAmount: "લોનની રકમ",
          tenure: "કાળાવધિ (વર્ષ)",
          interest: "વ્યાજ દર",
          emi: "ઈએમઆઈ",
          totalInterest: "કુલ વ્યાજ",
          totalPayment: "કુલ ચુકવણી",
          chartTitle: "એમોર્ટાઇઝેશન ચાર્ટ",
        },
        common: {
            homeloancalculator: "હોમ લોન EMI કેલ્ક્યુલેટર",
            detailedCalculations: "વિગતવાર ગણતરી",
            emichart: "EMI ચાર્ટ",
        },
         ranges: {
            homeloanamt: "હોમ લોનની રકમ",
            loanten: "લોન સમયગાળો",
            intrate: "વ્યાજ દર",
        },
        table: {
          month: "મહિનો",
          beginningBalance: "લોનની શરૂઆતની બેલેન્સ",
          emi: "ઈએમઆઈ",
          principal: "મૂળધન",
          monthlyInterest: "માસિક વ્યાજ",
          outstandingBalance: "બાકી બેલેન્સ",
        },
      },
    },
    ta: {
      translation: {
        calculation: {
          loanAmount: "கடன் தொகை",
          tenure: "காலம் (ஆண்டு)",
          interest: "வட்டி விகிதம்",
          emi: "இஎம்ஐ",
          totalInterest: "மொத்த வட்டி",
          totalPayment: "மொத்த கட்டணம்",
          chartTitle: "அமோர்டிசேஷன் வரைபடம்",
        },
        common: {
            homeloancalculator: "வீட்டு கடன் EMI கணக்கீட்டாளர்",
            emichart: "EMI வரைபடம்",
            detailedCalculations: "விரிவான கணக்கீடுகள்",
        },
         ranges: { homeloanamt: "வீட்டு கடன் தொகை",
            loanten: "கடன் காலம்",
            intrate: "வட்டி விகிதம்",
        },
       
        table: {
          month: "மாதம்",
          beginningBalance: "கடன் ஆரம்ப இருப்பு",
          emi: "இஎம்ஐ",
          principal: "முதல்தொகை",
          monthlyInterest: "மாதாந்திர வட்டி",
          outstandingBalance: "நிலுவை இருப்பு",
        },
      },
    },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
