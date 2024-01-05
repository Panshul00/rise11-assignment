/* eslint-disable @next/next/no-img-element */
"use client";
import Chart from "react-apexcharts";

import React, { useState } from "react";
function Impress(props: any) {
  let { name, number }: any = props;
  const state = {
    options: {
      grid: {
        show: false,
      },
      chart: {
        id: "line",
        toolbar: {
          autoSelected: undefined,
          show: false,
        },
      },
      stoke: {
        width: 1,
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        show: false,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      xaxis: {
        show: false,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "June",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
        ],
      },
    },
    series: [
      {
        name: "Course Sale",
        data: [0, 200, 150, 100, 235, 140, 100, 230, 250, 270],
      },
    ],
  };
  return (
    <>
      <div className="flex justify-between items-center my-2 border-l-2 px-4 border-l-purple-600">
        <div>
          <h4 className="font-semibold mb-4">{name}</h4>
          <span className="mt-4 font-semibold">{number}</span>
        </div>
        <div className=" flex items-center justify-center">
          <Chart
            className=""
            height="100"
            width="160"
            type="area"
            options={state.options}
            series={state.series}
          />
        </div>
      </div>
    </>
  );
}
function Impression() {
  const data = [
    {
      name: "Impression",
      number: 832,
    },
    {
      name: "Total audience",
      number: 832,
    },
    {
      name: "Engagements",
      number: 832,
    },
    {
      name: "Engaged audience",
      number: 832,
    },
  ];
  return (
    <>
      <div className="grid mt-10  lg:grid-cols-4  grid-cols-1 sm:grid-cols-2">
        {data.map((doc: any) => {
          return (
            <>
              <Impress name={doc.name} number={doc.number} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Impression;
