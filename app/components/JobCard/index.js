"use client";
import Link from "next/link";
import React from "react";

const JobCard = ({
  company,
  location,
  jobTitle,
  jobType,
  skills = [],
  path,
}) => {
  return (
    <div>
      <div className="flex flex-col items-start justify-start gap-2">
        <p className="text-lg font-semibold">{company}</p>
        <p className="text-textNeutral text-base font-light">{location}</p>
      </div>
      <div className="flex flex-col items-start justify-start gap-3">
        <p className="font-bold text-xl">{jobTitle}</p>
        <p className="font-light text-textDefault">{jobType}</p>
      </div>
      <div className="flex items-center justify-start gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="border w-fit px-2 py-1 text-textNeutral">{skill}</div>
        ))}
      </div>
      <Link href={path} className="mt-5 border-primary text-primary w-full py-2 font-semibold">
        Apply Now
      </Link>
    </div>
  );
};

export default JobCard;
