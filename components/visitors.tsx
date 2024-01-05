'use client'
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);
import Chart from "react-apexcharts";
import { MoreVertical, TrendingDown, TrendingUp } from "lucide-react";

function VisitorGraph() {
  const [state, setState] = useState<any>({
    options: {
      chart: {
        width: 10,
        id: "line",
        toolbar: {
          autoSelected: "pan",
          show: false,
        },
      },
      stoke: {
        width: 0.5,
      },
      dataLabels: {
        enabled: false,
      },

      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
    },
    series: [
      {
        name: "Visitors",
        data: [80, 50, 35, 53, 37, 20],
      },
    ],
  });

  return (
    <div className="w-full h-full">
      <div className="flex mx-3 border-b pb-3 justify-between">
        <h1 className="font-medium flex">
          revenue{" "}
          <span className="ml-2 flex items-center justify-center text-red-500">
            <TrendingDown className="" />
            <span className="ml-1">-0.3%</span>
          </span>
        </h1>
        <MoreVertical />
      </div>
      <Chart
        height={400}
        type="bar"
        options={state.options}
        series={state.series}
      />
    </div>
  );
}

export default VisitorGraph;
