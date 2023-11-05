import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart,
  Tooltip,
  DoughnutController,
  ArcElement,
  TimeScale,
} from "chart.js";

import { chartColors } from "@/config/chart-config";

Chart.register(DoughnutController, ArcElement, TimeScale, Tooltip);

export default function DoughnutChart({ labels, data }) {
  const {
    tooltipTitleColor,
    tooltipBodyColor,
    tooltipBgColor,
    tooltipBorderColor,
  } = chartColors;

  return (
    <div>
      <Doughnut
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: ["#1e293b", "#e2e8f0"],
            },
          ],
        }}
        height={250}
        width={500}
        options={{
          cutout: "80%",
          layout: {
            padding: 24,
          },

          maintainAspectRatio: false,
          resizeDelay: 200,
          interaction: {
            intersect: false,
            mode: "nearest",
          },
          animation: {
            duration: 500,
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              titleColor: tooltipTitleColor.light,
              bodyColor: tooltipBodyColor.light,
              backgroundColor: tooltipBgColor.light,
              borderColor: tooltipBorderColor.light,
            },
          },
        }}
      />
    </div>
  );
}
