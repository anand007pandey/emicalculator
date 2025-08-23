import React from "react";
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

export default function EMIChart() {
  // Sample Data (Tenure in years, EMI fixed, Interest decreases, Principal increases)
  const data = [
    { year: 1, EMI: 87254, Interest: 55939, Principal: 41315 },
    { year: 2, EMI: 87254, Interest: 52000, Principal: 45000 },
    { year: 3, EMI: 87254, Interest: 47000, Principal: 50000 },
    { year: 4, EMI: 87254, Interest: 43000, Principal: 54000 },
    { year: 5, EMI: 87254, Interest: 38000, Principal: 59000 },
    { year: 6, EMI: 87254, Interest: 32000, Principal: 65000 },
    { year: 7, EMI: 87254, Interest: 25000, Principal: 72000 },
    { year: 8, EMI: 87254, Interest: 17000, Principal: 80000 },
    { year: 9, EMI: 87254, Interest: 10000, Principal: 87000 },
    { year: 10, EMI: 87254, Interest: 5000, Principal: 92000 },
  ];

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h3 className="text-xl font-bold text-center mb-4">EMI Chart</h3>
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
          <Line
            type="monotone"
            dataKey="EMI"
            stroke="#00bcd4"
            strokeWidth={2}
          />
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
