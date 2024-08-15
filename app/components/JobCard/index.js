"use client";
import { useJapaStore } from "@/app/store/store";
import { Box, Skeleton } from "@mui/material";
import Link from "next/link";
import React from "react";

const JobCard = ({
  company,
  location,
  jobTitle,
  jobType,
  jobId,
  path,
  skills = [],
}) => {
  const loading = useJapaStore((state) => state.loading);
  return (
    <Box>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={290}
          height={290}
          className="rounded-lg"
        />
      ) : (
        <Link href={path} className="">
          <div className="px-4 pb-6 pt-4 border rounded-xl bg-white w-[calc(100vw-30px)] tablet:w-[calc(302px-16px)] tablet:nax-w-[calc(330px-16px)]">
            <div className="flex flex-col items-start justify-start mb-4 tablet:mb-7">
              <p className="text-lg font-medium text-textNeutral">{company}</p>
              <p className="text-textNeutral text-sm font-light">{location}</p>
            </div>
            <div className="flex flex-col items-start justify-start mb-4">
              <p className="font-bold tablet:text-xl text-textDefault">{jobTitle}</p>
              <p
                className={`font-light text-xs tablet:text-sm ${
                  jobType === "Remote" ? "text-textDefault" : "text-green-500"
                }`}
              >
                {jobType}
              </p>
            </div>
            <div className="flex items-start justify-start gap-y-0 gap-x-2 h-full tablet:h-[80px] flex-wrap font-light">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="border w-fit px-2 py-1 text-textNeutral rounded-3xl text-xs tablet:text-[15px]"
                >
                  {skill}
                </div>
              ))}
            </div>
            <div className="mt-4 tablet:mt-9 border-primary border rounded-3xl text-primary w-full py-2 font-semibold text-center">
              Apply Now
            </div>
          </div>
        </Link>
      )}
    </Box>
  );
};

export default JobCard;
