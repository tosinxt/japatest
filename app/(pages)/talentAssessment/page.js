"use client"
import Button from "@/app/components/Button";
import Modal from "@/app/components/Modal";
import { Reviews } from "@/app/page";
import Image from "next/image";
import React, { useState } from "react";

const TalentAssessment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mt-20">
      <section className='flex flex-col-reverse tablet:flex-row tablet:items-center gap-8 tablet:gap-52 tablet:bg-[url("/talentBanner.png")] bg-no-repeat bg-contain tablet:h-[calc(100vh-80px)]'>
        <div className="tablet:basis-1/3 ">
          <Image
            src={"/talentBanner.png"}
            alt=""
            height={9999}
            width={9999}
            style={{ height: "280px", width: "100%" }}
            className="tablet:hidden "
          />
        </div>
        <div className="flex flex-col gap-5 tablet:basis-2/3 px-[15px] tablet:px-0 pt-14 tablet:pt-0">
          <p className="font-medium text-primary py-1.5 px-1.5 border bg-[#F2EAFD] w-fit rounded-2xl">
            Talent Assessment
          </p>
          <div className=" tablet:w-[600px]">
            <h2 className="text-3xl tablet:text-[48px] leading-tight text-textDefault font-bold mb-4">
              Finding Suitable Courses for your Skills?
            </h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-white w-full bg-primary text-sm tablet:text-base py-2 px-5 flex justify-center items-center hover:opacity-90 gap-1 rounded-[30px] border border-primary text-center"
            >
              Book a session
            </button>
          </div>
        </div>
      </section>
      <section className="mx-[15px] tablet:mx-[64px] mt-16 tablet:mt-20 flex flex-col items-center justify-center text-textDefault">
        <div className="flex flex-col justify-center items-center gap-2 mb-8">
          <p className="font-medium text-primary py-1.5 px-1.5 border bg-[#F2EAFD] w-fit rounded-2xl">
            How it Works
          </p>
          <p className="font-bold text-2xl mt-2">Step-by-Step Process</p>
        </div>
        <div className="text-base tablet:text-xl flex flex-col tablet:flex-row items-center font-medium  justify-between gap-16 w-full text-center tablet:text-left">
          <div className="flex flex-col tablet:flex-row items-center gap-4 flex-1">
            <Image src={"/profile.svg"} alt="" height={42} width={54} />
            <span>Fill out your information</span>
          </div>
          <div className="flex flex-col tablet:flex-row items-center gap-4 flex-1">
            <Image src={"/calendar.svg"} alt="" height={54} width={54} />
            <span>Schedule your session</span>
          </div>
          <div className="flex flex-col tablet:flex-row items-center gap-4 flex-1">
            <Image src={"/consult.svg"} alt="" height={54} width={54} />
            <span>Receive personalized course recommendations</span>
          </div>
        </div>
        <div className="flex flex-col tablet:flex-row justify-center tablet:items-center gap-20 tablet:gap-32 mt-20 tablet:mt-32 mb-0 tablet:mb-20 w-full">
          <div className="w-fit relative m-auto tablet:m-0">
            <div className="relative">
              <Image
                src={"/talent2.png"}
                alt=""
                height={9999}
                width={9999}
                style={{ height: "100%", width: "487px" }}
                className="absolute z-[10] left-7 top-0"
              />
              <div className="h-[570px] w-[300px] max-w-[487px] tablet:w-[450px] bg-[#a98ed2] rounded-r-3xl relative top-7"></div>
            </div>
          </div>
          <div className="flex flex-col gap-6 tablet:gap-9 font-medium text-base tablet:text-2xl tablet:w-fit tablet:p-[10px]">
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
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-white w-full bg-primary text-sm tablet:text-base py-2 px-5 flex justify-center items-center hover:opacity-90 gap-1 rounded-[30px] border border-primary text-center"
            >
              Book a session
            </button>
          </div>
        </div>
      </section>
      <section className="bg-talent bg-cover bg-[#D7BFFA] mt-20 h-[600px] tablet:h-[810px] flex items-center justify-center">
        <div className="bg-white w-[310px] tablet:w-fit m-auto border-2 border-primary shadow-talent">
          <p className="bg-[#E4E4E4] h-28 text-2xl tablet:text-4xl font-bold flex justify-center items-center">
            ₦5000/hr
          </p>
          <div className="px-3 tablet:px-5 py-3 tablet:py-8">
            <ul className="list-none text-base flex flex-col gap-6">
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
            <button
              onClick={() => setIsModalOpen(true)}
              className="my-8 text-white w-full bg-primary text-sm tablet:text-base py-2 px-5 flex justify-center items-center hover:opacity-90 gap-1 rounded-[30px] border border-primary text-center"
            >
              Book a session
            </button>
          </div>
        </div>
      </section>
      <section className="bg-talent2 bg-cover py-20 tablet:pt-12 tablet:pb-28 mt-20 tablet:mt-36 flex flex-col justify-center items-center">
        <div className="px-[15px] tablet:px-0 tablet:w-[420px] flex flex-col gap-2 text-center text-white">
          <p className="font-medium">Still unsure about which course?</p>
          <p className="tablet:text-lg font-bold">
            Over 50,000 people are with you in this ship.
          </p>
          <p className="text-lg tablet:text-2xl text-[#d7bffa] font-bold mt-4 tablet:mt-6">
            With our Talent Assessment, you will get Clarity on your Career
            Journey
          </p>
          <Button
            color={"text-white"}
            text={"Book Now"}
            bgColor={"bg-primary"}
            width={"w-full tablet:mt-8 mt-4"}
            path={"/"}
          />
        </div>
      </section>
      <Reviews />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default TalentAssessment;
