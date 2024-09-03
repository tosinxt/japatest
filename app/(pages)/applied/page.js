"use client";
import { useJapaStore } from "@/app/store/store";
import { Box, Skeleton } from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

const Applied = () => {
  const { user, applied, fetchAppliedJobs, loading } = useJapaStore((state) => ({
    user: state.user,
    applied: state.applied,
    fetchAppliedJobs: state.fetchAppliedJobs,
    loading: state.loading
  }));

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const id = user._id;
        await fetchAppliedJobs(id);
      } catch (err) {
        toast.error(err.message || "Error fetching applied jobs");
      }
    };

    fetchJobs();
  }, [user._id, fetchAppliedJobs]);

  return (
    <div className="mx-[15px] tablet:mx-[64px] mt-28 tablet:mt-36 flex flex-col text-textDefault">
      <div className="text-2xl tablet:text-3xl font-bold mb-8">
        Applications
      </div>
      {applied.length < 1 ? (
        <div>
          <p>
            You have not applied for any job yet. Click{" "}
            <Link href={"/jobs"} className="underline text-blue-500">
              here
            </Link>{" "}
            to search for jobs.
          </p>
        </div>
      ) : (
        <div>
          {applied.map((job, index) => (
            <Box key={index}>
              {loading ? (
                <Skeleton
                  variant="rectangular"
                  width={9999}
                  height={250}
                  className="rounded-lg"
                />
              ) : (
                <div className="px-4 pb-6 pt-4 border rounded-xl bg-white w-full flex flex-col tablet:flex-row  tablet:gap-4 justify-between">
                  <div>
                    <div className="flex flex-col items-start justify-start mb-4 tablet:mb-7">
                      <p className="text-lg font-medium text-textNeutral">
                        Facebook
                      </p>
                      <p className="text-textNeutral text-sm font-light">
                        New York, USA
                      </p>
                    </div>
                    <div className="flex flex-col items-start justify-start mb-4">
                      <p className="font-bold tablet:text-xl text-textDefault line-clamp-2">
                        Front-end Developer
                      </p>
                      <p className="font-light text-xs tablet:text-sm">
                        Remote
                      </p>
                    </div>
                    <div className="flex items-start justify-start gap-y-0 gap-x-2 h-full tablet:h-[80px] flex-wrap font-light">
                      {/* {skills?.slice(0, 4).map((skill, index) => (
                      <div
                        key={index}
                        className="border w-fit px-2 py-1 text-textNeutral rounded-3xl text-xs tablet:text-[15px]"
                      >
                        {skill}
                      </div>
                    ))} */}
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="mt-4 tablet:mt-9 border-primary border rounded-3xl text-primary w-full tablet:w-[200px] py-2 font-semibold text-center">
                      Applied
                    </div>
                    <p>Jan 04</p>
                  </div>
                </div>
              )}
            </Box>
          ))}
        </div>
      )}
    </div>
  );
};

export default Applied;
