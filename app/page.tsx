"use client";
import Topbar from "@/components/topbar";
import Sidebar from "@/components/sidebar";

import Impression from "@/components/impression";
import Revenue from "@/components/revenue";
import VisitorGraph from "@/components/visitors";
import CourseStatus from "@/components/course-status";
import Sales from "@/components/sales";
import WeeklySales from "@/components/weekly-sales";
import StudentQuery from "@/components/queries";
import { useEffect, useState } from "react";

export default function Home() {
  // return <></>
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex ">
          <Sidebar />
          <div className="w-full md:ml-40 md:px-40 px-4 ">
            <Topbar />
            <Impression />
            <div className="flex items-center justify-center md:flex-row flex-col mt-10 ">
              <div className=" w-full  md:w-8/12">
                <Revenue />
              </div>
              <div className="w-full md:w-4/12">
                <VisitorGraph />
              </div>
            </div>
            <div className="grid my-10 md:grid-cols-3 pag-2 grid-cols-1">
              <Sales />
              <WeeklySales />
              <StudentQuery />
            </div>
            <div className="mt-10">
              <CourseStatus />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
