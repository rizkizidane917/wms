import React from "react";
import { Pie } from "react-chartjs-2";

export default function PieChart() {
  return (
    <div>
      <Pie
        data={{
          labels: ["Item Name", "QTY"],
          datasets: [
            {
              data: [15, 12],
              backgroundColor: ["#64748b", "#475569"],
            },
          ],
        }}
        height={250}
        width={500}
        options={{
          maintainAspectRatio: false,
          layout: {
            padding: 24,
          },
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
