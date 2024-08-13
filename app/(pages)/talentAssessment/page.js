import Button from "@/app/components/Button";
import withAuth from "@/app/protected";
import Image from "next/image";
import React from "react";

const TalentAssessment = () => {
  return (
    <div className="mt-20">
      <section className='flex justify-end items-center bg-[url("/talentBanner.svg")] bg-no-repeat bg-contain h-[calc(100vh-80px)]'>
        <div className="w-[500px] flex flex-col gap-5 mr-40 ">
          <p className="text-sm font-medium text-primary py-1.5 px-1.5 border bg-[#F2EAFD] w-fit rounded-2xl">
            Talent Assessment
          </p>
          <h2 className="text-[42px] text-textDefault font-bold mb-4">
            Finding Suitable Courses for your Skills?
          </h2>
          <Button
            path={"/"}
            text={"Book a session"}
            bgColor={"bg-primary"}
            width={"w-full"}
            color={"text-white"}
          />
        </div>
      </section>
      <section className="mx-[50px] flex flex-col items-center justify-center text-textDefault">
        <div className="flex flex-col justify-center items-center mb-8">
          <p className="text-sm font-medium text-primary py-1.5 px-1.5 border bg-[#F2EAFD] w-fit rounded-2xl">
            How it Works
          </p>
          <p className="font-bold text-2xl mt-2">Step-by-Step Process</p>
        </div>
        <div className="flex items-center font-medium  justify-between gap-16 w-full">
          <div className="flex items-center gap-2 flex-1">
            <Image src={"/profile.svg"} alt="" height={42} width={42} />
            <span className="">Fill out your information</span>
          </div>
          <div className="flex items-center gap-2 flex-1">
            <Image src={"/calendar.svg"} alt="" height={42} width={42} />
            <span className="">Schedule your session</span>
          </div>
          <div className="flex items-center gap-2 flex-1">
            <Image src={"/consult.svg"} alt="" height={42} width={42} />
            <span className="">
              Receive personalized course recommendations
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-24 mt-32 w-full">
          <div className="w-fit relative">
            <div className="relative">
              <Image
                src={"/talent2.svg"}
                alt=""
                height={500}
                width={400}
                className="absolute z-[10] left-5 top-0"
              />
              <div className="h-[570px] w-[400px] bg-[#a98ed2] rounded-r-3xl relative top-6"></div>
            </div>
          </div>
          <div className="flex flex-col gap-5 font-medium w-fit">
            <div className="flex items-center gap-2 flex-1">
              <Image src={"/arrow-double.svg"} alt="" height={24} width={24} />
              <span className="">Elevate Your Skills!</span>
            </div>
            <div className="flex items-center gap-2 flex-1">
              <Image src={"/arrow-double.svg"} alt="" height={24} width={24} />
              <span className="">Discover Your Story!</span>
            </div>
            <div className="flex items-center gap-2 flex-1">
              <Image src={"/arrow-double.svg"} alt="" height={24} width={24} />
              <span className="">Shine in Your Field!</span>
            </div>
            <div className="flex items-center gap-2 flex-1">
              <Image src={"/arrow-double.svg"} alt="" height={24} width={24} />
              <span className="">Land Your Ideal Job!</span>
            </div>
            <div className="flex items-center gap-2 flex-1 mb-3">
              <Image src={"/arrow-double.svg"} alt="" height={24} width={24} />
              <span className="">Maximize Success with expert Guidance!</span>
            </div>
            <Button
              path={"/"}
              text={"Book a session"}
              bgColor={"bg-primary"}
              width={"w-full"}
              color={"text-white"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalentAssessment;
