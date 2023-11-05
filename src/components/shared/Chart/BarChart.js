import React from "react";
import { Bar } from "react-chartjs-2";

export default function BarChart({ indexAxis = "x" }) {
  return (
    <div>
      <Bar
        data={{
          layout: {
            padding: 24,
          },
          labels: ["Inbound", "Outbound"],
          datasets: [
            {
              label: "",
              data: [15, 12],
              backgroundColor: ["#6366f1", "#60a5fa"],
            },
          ],
        }}
        height={250}
        width={500}
        options={{
          maintainAspectRatio: false,
          indexAxis: indexAxis,
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
