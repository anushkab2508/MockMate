"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { mockmate } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, WebcamIcon } from "lucide-react";
import React, { use, useEffect, useState } from "react";
import Webcam from "react-webcam";
import Link from "next/link";

function Interview({ params }) {
  const actualParams = use(params);
  const [interviewData, setInterviewData] = useState();
  const [webCamEnabled, setWebCamEnabled] = useState(false);
  //   useEffect(() => {
  //     console.log(params.interviewId);
  //     GetInterviewDetails();
  //   }, []);

  //   //fetch interview details
  //   const GetInterviewDetails = async () => {
  //     const result = await db
  //       .select()
  //       .from(mockmate)
  //       .where(eq(mockmate.mockId, params.interviewId));

  //     setInterviewData(result[0]);
  //   };

  useEffect(() => {
    if (actualParams?.interviewId) {
      console.log(actualParams.interviewId);
      GetInterviewDetails(actualParams.interviewId);
    }
  }, [actualParams]);

  const GetInterviewDetails = async (interviewId) => {
    try {
      const result = await db
        .select()
        .from(mockmate)
        .where(eq(mockmate.mockId, interviewId));
      setInterviewData(result[0]);
    } catch (error) {
      console.error("Failed to fetch interview details", error);
    }
  };
  return (
    <div className="my-10 ">
      <h2 className="font-bold text-2xl">Let's Get Started</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {interviewData ? (
          <div className="flex flex-col my-5 gap-5 ">
            <div className="flex flex-col p-5 rounded-lg border gap-5">
              <h2 className="text-lg">
                <strong>Job Role/Job Position: </strong>
                {interviewData.jobPosition}
              </h2>
              <h2 className="text-lg">
                <strong>Job Description/Tech Stack: </strong>
                {interviewData.jobDesc}
              </h2>
              <h2 className="text-lg">
                <strong>Years of Experience: </strong>
                {interviewData.jobExp}
              </h2>
            </div>
            <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-100">
              <h2 className="flex gap-2 items-center text-yellow-500">
                <Lightbulb />
                <span>Information</span>
              </h2>
              <h2 className="mt-3 text-yellow-500">
                {process.env.NEXT_PUBLIC_INFORMATION}
              </h2>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-4">
            Loading interview data...
          </p>
        )}
        <div>
          {webCamEnabled ? (
            <Webcam
              onUserMedia={() => setWebCamEnabled(true)}
              onUserMediaError={() => setWebCamEnabled(false)}
              mirrored={true}
              style={{ height: 300, width: 300 }}
            />
          ) : (
            <>
              <WebcamIcon className="h-72 w-full p-20 my-7 bg-secondary rounded-lg border" />
              <Button
                className="w-full"
                variant="ghost"
                onClick={() => setWebCamEnabled(true)}
              >
                Enable Web Cam and Microphone
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-end items-end">
        <Link href={`/dashboard/interview/${actualParams.interviewId}/start`}>
          <Button>Start Interview</Button>
        </Link>
      </div>
    </div>
  );
}

export default Interview;
