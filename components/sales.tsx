'use client'
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { MoreVertical, TrendingDown, TrendingUp } from "lucide-react";

function Sales() {
  return (
    <>
      <div>
        <div className=" flex mx-3 border-b pb-3 justify-between">
          <h1 className="font-medium">Sales</h1>
          <MoreVertical />
        </div>
        <div className="flex justify-center items-center">
          <div className="mx-auto my-2 flex  items-center justify-center">
            <div
              style={{
                background:
                  "linear-gradient( 10deg, purple, purple 50%,  red 50% )",
              }}
              className="h-52 w-52 rounded-full p-3"
            >
              <div className="flex flex-col  h-full w-full items-center justify-center rounded-full bg-white back">
                <h1 className="text-2xl font-bold text-black">3,500</h1>
                <span className="text-gray-500">Total Sale</span>
              </div>
            </div>
          </div>
        </div>
        <Table hideHeader={true} aria-label="Example static collection table">
          <TableHeader className="hidden">
            <TableColumn>Week</TableColumn>
            <TableColumn>Sales</TableColumn>
            <TableColumn>Percentage</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Current Week</TableCell>
              <TableCell>2000</TableCell>
              <TableCell>
                <div className="flex text-green-500">
                  <TrendingUp className="" />
                  <span>+0.3%</span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Last Week</TableCell>
              <TableCell>1500</TableCell>
              <TableCell>
                <div className="flex text-red-500">
                  <TrendingDown className="" />
                  <span>-0.3%</span>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default Sales;
