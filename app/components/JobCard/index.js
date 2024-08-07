"use client";
import Link from "next/link";
import React from "react";

const JobCard = ({ company, location, jobTitle, jobType, jobId, path, skills = [] }) => {
  return (
    <div className="px-4 pb-6 pt-4 border rounded-xl bg-white min-w-[220px] nax-w-[290px]">
      <div className="flex flex-col items-start justify-start mb-7">
        <p className="text-lg font-medium text-textNeutral">{company}</p>
        <p className="text-textNeutral text-sm font-light">{location}</p>
      </div>
      <div className="flex flex-col items-start justify-start mb-4">
        <p className="font-bold text-xl text-textDefault">{jobTitle}</p>
        <p
          className={`font-light text-sm ${
            jobType === "Remote" ? "text-textDefault" : "text-green-500"
          }`}
        >
          {jobType}
        </p>
      </div>
      <div className="flex items-center justify-start gap-x-2 flex-wrap font-light">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border w-fit px-2 py-1 text-textNeutral rounded-3xl text-[15px]"
          >
            {skill}
          </div>
        ))}
      </div>
      <Link href={path}>
        <div
          className="mt-9 border-primary border rounded-3xl text-primary w-full py-2 font-semibold text-center"
        >
          Apply Now
        </div>
      </Link>
    </div>
  );
};

export default JobCard;
