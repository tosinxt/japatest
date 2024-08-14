"use client";
import Button from "@/app/components/Button";
import { useJapaStore } from "@/app/store/store";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const Job = () => {
  const { job } = useParams();
  const { jobById, findJobByID } = useJapaStore((state) => ({
    jobById: state.job,
    findJobByID: state.findJobByID,
  }));

  useEffect(() => {
    findJobByID(job);
  }, [job, findJobByID]);

  return (
    <section className="mt-36  mx-[50px] text-textDefault">
      <div key={jobById?._id} className="flex flex-col gap-9">
        <div className="bg-lightPurple flex justify-between items-center px-[40px] h-[180px] rounded-lg">
          <div>
            <p className="font-bold text-3xl pb-2">{jobById?.job_title}</p>
            <p className="font-medium text-lg pb-1">{jobById?.company_name}</p>
            <p className="text-textNeutral text-sm">{jobById?.location}</p>
          </div>
          <Button
            text={"Apply Now"}
            path={"/"}
            bgColor={"bg-primary"}
            color={"text-white"}
            src={"/apply.svg"}
          />
        </div>
        <div className="flex  justify-between">
          {/**First Layout */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <p className="text-2xl font-bold">About Job</p>
              <p className="text-base">{jobById?.about}</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-2xl font-bold">What you will be doing</p>
              <ul className="text-base">
                {jobById?.about.split(". ").map((about, index) => (
                  <li className="list-disc list-inside pl-2" key={index}>
                    {about}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-2xl font-bold">What we are looking for</p>
              <ul className="text-base">
                {jobById?.what_we_are_lookin_for
                  .split(". ")
                  .map((look, index) => (
                    <li className="list-disc list-inside pl-2" key={index}>
                      {look}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-2xl font-bold">Nice to have</p>
              <ul className="text-base">
                {jobById?.nice_to_have.split(". ").map((have, index) => (
                  <li className="list-disc list-inside pl-2" key={index}>
                    {have}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-2xl font-bold">Preferred candidate data</p>
              <p className="text-base">
                {jobById?.ideal_candidate}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-2xl font-bold">Skills</p>
              <ul className="text-base">
                {jobById?.skills.split(". ").map((skill, index) => (
                  <li className="list-disc list-inside pl-2" key={index}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/**Second Layout */}
          <div className="w-[250px] flex flex-col gap-6">
            <div className="flex flex-col gap-7 py-5 px-3 border rounded-xl">
              <div className="flex flex-col gap-2">
                <p className="text-3xl font-bold">Summary</p>
                <hr className="h-[3px] w-12 bg-primary" />
              </div>
              <div className="flex justify-between gap-2">
                <p className="font-medium">Job Type</p>
                <span className="font-light">{jobById?.job_type}</span>
              </div>
              <div className="flex justify-between gap-2">
                <p className="font-medium">Posted </p>
                <span className="font-light">
                  {jobById?.date_posted.slice(0, 10)}
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <p className="font-medium">Salary</p>
                <span className="font-light">20,000</span>
              </div>
              <div className="flex justify-between gap-2">
                <p className="font-medium">Experience </p>
                <span className="font-light">{jobById?.experience}</span>
              </div>
              <div className="flex justify-between gap-2">
                <p className="font-medium">Applied</p>
                <span className="font-light">30 Applicants</span>
              </div>
            </div>
            <div className="flex flex-col gap-7 py-5 px-3 border rounded-xl">
              <div className="flex flex-col gap-2">
                <p className="text-3xl font-bold">Share with</p>
                <hr className="h-[3px] w-12 bg-primary" />
              </div>
              <div className="flex justify-between items-center">
                <Link href={"/"}>
                  <Image
                    src={"/twitter2.svg"}
                    height={24}
                    width={24}
                    alt="twitter"
                    className="hover:scale-[1.1] ease-in-out"
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    src={"/instagram.svg"}
                    height={24}
                    width={24}
                    alt="twitter"
                    className="hover:scale-[1.1] ease-in-out"
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    src={"/fb.svg"}
                    height={12}
                    width={12}
                    alt="twitter"
                    className="hover:scale-[1.1] ease-in-out"
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    src={"/linkedin2.svg"}
                    height={26}
                    width={26}
                    alt="twitter"
                    className="hover:scale-[1.1] ease-in-out"
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-5 px-3 border rounded-xl">
              <div className="flex flex-col gap-2">
                <p className="text-3xl font-bold">Tags</p>
                <hr className="h-[3px] w-12 bg-primary" />
              </div>
            </div>
          </div>
        </div>
        <Button
          text={"Apply Now"}
          path={"/"}
          bgColor={"bg-primary"}
          color={"text-white"}
        />
      </div>
    </section>
  );
};

export default Job;
