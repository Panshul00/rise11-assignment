"use client";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "react-apexcharts";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { MoreVertical, TrendingUp } from "lucide-react";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

function Revenue() {
  const [state, setState] = useState<any>({
    options: {
      chart: {
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
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100],
        },
      },
      xaxis: {
        // show: false,
        // labels: {
        //   show: false,
        // },
        // axisBorder: {
        //   show: false,
        // },
        // axisTicks: {
        //   show: false,
        // },
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "June",
          "July",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        name: "Course Sale",
        data: [5, 30, 25, 40, 20, 15, 75, 20, 10, 60, 70, 30],
      },
      {
        name: "Course Visit",
        data: [20, 50, 40, 45, 30, 20, 40, 25, 50, 40, 60, 90],
      },
    ],
  });
  return (
    <>
      <div className="w-full  h-auto">
        <div className="flex mx-3 border-b pb-3 justify-between">
          <h1 className="font-medium flex">
            revenue{" "}
            <span className="ml-2 flex items-center justify-center text-green-500">
              <TrendingUp className="" />
              <span className="ml-1">+0.3%</span>
            </span>
          </h1>
          <div className="flex gap-4">
            <div className="flex gap-2 items-center">
              <h2 className="font-semibold">Course Visit</h2>
              <div className="h-3 w-3 rounded-full bg-green-700"></div>
            </div>
            <div className="flex gap-2 items-center">
              <h2 className="font-semibold">Course Sale</h2>
              <div className="h-3 w-3 rounded-full bg-blue-700"></div>
            </div>
            <div>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered">This Month</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="new">Jan</DropdownItem>
                  <DropdownItem key="copy">Feb</DropdownItem>
                  <DropdownItem key="edit">March</DropdownItem>
                  <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                  >
                    Delete file
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="">
          <Chart
            height={400}
            type="area"
            options={state.options}
            series={state.series}
          />
        </div>
      </div>
    </>
  );
}

export default Revenue;
