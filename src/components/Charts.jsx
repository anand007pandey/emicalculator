// EMIChart.js
import React from "react";
import { useTranslation } from "react-i18next";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function EMIChart({ data }) {
   const { t } = useTranslation();
  return (
    <div style={{ width: "100%", height: 400 }}>
      <h3 className="text-xl font-bold text-center mb-4">{t("common.emichart")}</h3>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            label={{
              value: "Tenure (Years)",
              position: "insideBottom",
              offset: -5,
            }}
          />
          <YAxis
            label={{ value: "Amount (₹)", angle: -90, position: "insideLeft" }}
          />
          <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
          <Legend />
          <Line type="monotone" dataKey="EMI" stroke="#00bcd4" strokeWidth={2} />
          <Line
            type="monotone"
            dataKey="Interest"
            stroke="#e91e63"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="Principal"
            stroke="#2196f3"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
