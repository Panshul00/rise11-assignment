'use client'
import { MoreVertical } from "lucide-react";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
} from "@nextui-org/react";

function StudentQuery() {
  return (
    <div>
      <div className="flex mx-3 border-b pb-3 justify-between">
        <h1 className="font-medium">Student Queries</h1>
        <MoreVertical />
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
            <TableColumn>BTN1</TableColumn>
            <TableColumn>BTN2</TableColumn>
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
                <h1 className="font-bold">Machine Learning Bootcamp</h1>
                <p className="text-gray-500">By James Board</p>
              </TableCell>
              <TableCell>
                <button className="px-4 w-full rounded-sm bg-purple-300 py-1 flex items-center justify-center">
                  <span className="text-purple-600">view</span>
                </button>
              </TableCell>
              <TableCell>
                <button className="px-4 w-full rounded-sm bg-red-300 py-1 flex items-center justify-center">
                  <span className="text-red-700">Decline</span>
                </button>
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
                <h1 className="font-bold">Python & R In Data Science</h1>
                <p className="text-gray-500">By James Board</p>
              </TableCell>
              <TableCell>
                <button className="px-4 w-full rounded-sm bg-green-300 py-1 flex items-center justify-center">
                  <span className="text-green-600">Approval</span>
                </button>
              </TableCell>
              <TableCell>
                <button className="px-4 w-full rounded-sm bg-red-300 py-1 flex items-center justify-center">
                  <span className="text-red-700">Decline</span>
                </button>
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
                <h1 className="font-bold">SuperDataScience Support</h1>
                <p className="text-gray-500">Data Science</p>
              </TableCell>
              <TableCell>
                <button className="px-4 w-full rounded-sm bg-green-300 py-1 flex items-center justify-center">
                  <span className="text-green-600">Approval</span>
                </button>
              </TableCell>
              <TableCell>
                <button className="px-4 w-full rounded-sm bg-red-300 py-1 flex items-center justify-center">
                  <span className="text-red-700">Decline</span>
                </button>
              </TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>
                <Avatar
                  radius="none"
                  src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                />
              </TableCell>
              <TableCell>
                <h1 className="font-bold">Analyst Bootcamp 2020</h1>
                <p className="text-gray-500">Data Science</p>
              </TableCell>
              <TableCell>
                <button className="px-4 w-full rounded-sm bg-green-300 py-1 flex items-center justify-center">
                  <span className="text-green-600">Approval</span>
                </button>
              </TableCell>
              <TableCell>
                <button className="px-4 w-full rounded-sm bg-red-300 py-1 flex items-center justify-center">
                  <span className="text-red-700">Decline</span>
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default StudentQuery;
