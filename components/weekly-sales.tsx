'use client'
import { MoreVertical } from "lucide-react";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
} from "@nextui-org/react";

function WeeklySales() {
  const [state, setState] = useState<any>({
    options: {
      chart: {
        id: "line",
        toolbar: {
          autoSelected: "pan",
          show: false,
        },
      },
      height: 20,
      stoke: {
        width: 0.5,
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
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
      },
    },
    series: [
      {
        name: "Course Sale",
        data: [5, 30, 25, 40, 20],
      },
    ],
  });
  return (
    <>
      <div>
        <div className="flex mx-3 border-b pb-3 justify-between">
          <h1 className="font-medium">Weekly Sales Stats</h1>
          <MoreVertical />
        </div>
        <div className="">
          <Chart
            height="150"
            className=""
            type="area"
            options={state.options}
            series={state.series}
          />
        </div>
        <div>
          <Table
            hideHeader={true}
            removeWrapper
            aria-label="Example static collection table"
          >
            <TableHeader>
              <TableColumn>NAME</TableColumn>
              <TableColumn>ROLE</TableColumn>
              <TableColumn>STATUS</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>
                  <Avatar
                    radius="none"
                    src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                  />
                </TableCell>
                <TableCell>
                  <h1 className="font-bold">Adobe XD Part 01</h1>
                  <p className="text-gray-500">UI/UX Design</p>
                </TableCell>
                <TableCell>
                  <div className="px-1 rounded-sm bg-purple-300 py-1 flex items-center justify-center">
                    <span>$20</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>
                  <Avatar
                    radius="none"
                    src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                  />
                </TableCell>
                <TableCell>
                  <h1 className="font-bold">Adobe XD Part 01</h1>
                  <p className="text-gray-500">UI/UX Design</p>
                </TableCell>
                <TableCell>
                  <div className="px-1 rounded-sm bg-yellow-300 py-1 flex items-center justify-center">
                    <span>$20</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>
                  <Avatar
                    radius="none"
                    src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                  />
                </TableCell>
                <TableCell>
                  <h1 className="font-bold">Adobe XD Part 01</h1>
                  <p className="text-gray-500">UI/UX Design</p>
                </TableCell>
                <TableCell>
                  <div className="px-1 rounded-sm bg-red-300 py-1 flex items-center justify-center">
                    <span>$20</span>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default WeeklySales;
