import Button from "@/app/components/Button";
import { Reviews } from "@/app/page";
import Image from "next/image";
import React from "react";

const TalentAssessment = () => {
  return (
    <div className="mt-20">
      <section className='flex items-center gap-52 bg-[url("/talentBanner.png")] bg-no-repeat bg-contain h-[calc(100vh-80px)]'>
        <div className="basis-1/3"></div>
        <div className="flex flex-col gap-5 basis-2/3">
          <p className="text-sm font-medium text-primary py-1.5 px-1.5 border bg-[#F2EAFD] w-fit rounded-2xl">
            Talent Assessment
          </p>
          <div className=" w-[600px]">
            <h2 className="text-[48px] text-textDefault font-bold mb-4">
              Finding Suitable Courses for your Skills?
            </h2>
            <Button
              path={"/"}
              text={"Book a session"}
              bgColor={"bg-primary"}
              width={"w-full mt-8"}
              color={"text-white"}
            />
          </div>
        </div>
      </section>
      <section
        className="mx-[64px]
 mt-20 flex flex-col items-center justify-center text-textDefault"
      >
        <div className="flex flex-col justify-center items-center gap-2 mb-8">
          <p className="font-medium text-primary py-1.5 px-1.5 border bg-[#F2EAFD] w-fit rounded-2xl">
            How it Works
          </p>
          <p className="font-bold text-2xl mt-2">Step-by-Step Process</p>
        </div>
        <div className="flex items-center font-medium  justify-between gap-16 w-full">
          <div className="flex items-center gap-4 flex-1">
            <Image src={"/profile.svg"} alt="" height={42} width={54} />
            <span className="text-xl">Fill out your information</span>
          </div>
          <div className="flex items-center gap-4 flex-1">
            <Image src={"/calendar.svg"} alt="" height={54} width={54} />
            <span className="text-xl">Schedule your session</span>
          </div>
          <div className="flex items-center gap-4 flex-1">
            <Image src={"/consult.svg"} alt="" height={54} width={54} />
            <span className="text-xl">
              Receive personalized course recommendations
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-24 mt-32 w-full">
          <div className="w-fit relative">
            <div className="relative">
              <Image
                src={"/talent2.png"}
                alt=""
                height={500}
                width={400}
                className="absolute z-[10] left-5 top-0"
              />
              <div className="h-[570px] w-[400px] bg-[#a98ed2] rounded-r-3xl relative top-6"></div>
            </div>
          </div>
          <div className="flex flex-col gap-9 font-medium text-2xl w-fit">
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
      <section className="bg-talent bg-cover bg-[#D7BFFA] mt-20 h-[810px] flex items-center justify-center">
        <div className="bg-white w-fit m-auto border-2 border-primary shadow-talent">
          <p className="bg-[#E4E4E4] h-28 text-4xl font-bold flex justify-center items-center">
            ₦5000/hr
          </p>
          <div className=" px-5 py-8">
            <ul className="list-none flex flex-col gap-6">
              <li className="flex items-center gap-2">
                <Image src={"/check.svg"} width={18} height={18} alt="" />{" "}
                Personalized Course Recommendations
              </li>
              <li className="flex items-center gap-2">
                <Image src={"/check.svg"} width={18} height={18} alt="" />{" "}
                Career Development
              </li>
              <li className="flex items-center gap-2">
                <Image src={"/check.svg"} width={18} height={18} alt="" />{" "}
                Enforced Employability
              </li>
              <li className="flex items-center gap-2">
                <Image src={"/check.svg"} width={18} height={18} alt="" />{" "}
                Increased Confidence
              </li>
              <li className="flex items-center gap-2">
                <Image src={"/check.svg"} width={18} height={18} alt="" />{" "}
                Actionable Feedback
              </li>
            </ul>
            <Button
              color={"text-white"}
              text={"Book Now"}
              bgColor={"bg-primary"}
              width={"w-full mt-8 mb-8"}
              path={"/"}
            />
          </div>
        </div>
      </section>
      <section className="bg-talent2 bg-cover pt-12 pb-28 mt-36 flex flex-col justify-center items-center">
        <div className="w-[420px] flex flex-col gap-2 text-center text-white">
          <p className="font-medium">Still unsure about which course?</p>
          <p className="text-lg font-bold">
            Over 50,000 people are with you in this ship.
          </p>
          <p className="text-2xl text-[#d7bffa] font-bold mt-6">
            With our Talent Assessment, you will get Clarity on your Career
            Journey
          </p>
          <Button
            color={"text-white"}
            text={"Book Now"}
            bgColor={"bg-primary"}
            width={"w-full mt-8"}
            path={"/"}
          />
        </div>
      </section>
      <Reviews />
    </div>
  );
};

export default TalentAssessment;
