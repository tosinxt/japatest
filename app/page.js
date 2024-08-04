"use client"
import Image from "next/image";
import Button from "./components/Button";
import CourseCard from "./components/CourseCard";
import CommunityCard from "./components/CommunityCard";
import Link from "next/link";
import JobCard from "./components/JobCard";
import { useStore } from "./store/store";
import { useEffect } from "react";

export default function Home() {
  const { jobs, findJobs } = useStore((state) => ({
    jobs: state.jobs,
    findJobs: state.findJobs
  }));

  useEffect(() => {
    findJobs()
  }, [findJobs])

  const WhyCard = ({ src, alt, title, text }) => (
    <div className="text-textDefault flex items-start justify-start gap-3">
      <div>
        <Image src={src} alt={alt} height={80} width={80} />
      </div>
      <div className="flex flex-col justify-between">
        <p className="font-medium">{title}</p>
        <p className="font-light text-sm w-[220px] text-textNeutral">{text}</p>
      </div>
    </div>
  );



  return (
    <div>
      <section className="h-screen bg-banner bg-no-repeat bg-bannerPosition">
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col justify-center items-start gap-3 h-full px-[50px]">
            <h2 className="text-textDefault font-bold text-4xl leading-normal ">
              Unlock Your Potential
              <br /> For Global Success <br />
              With <span className="text-primary">JAPA</span>
            </h2>
            <p className="text-sm text-textDefault text-opacity-85">
              The Easiest Way to Boost Your Employability and Secure <br />{" "}
              Global Opportunities
            </p>
            <div className="flex gap-4 mt-3">
              <Button
                text={"Take a course"}
                width={"w-fit"}
                bgColor={"bg-primary"}
                color={"text-white"}
                path="/"
              />
              <Button
                text={"Apply for Jobs"}
                width={"w-fit"}
                bg={"bg-white"}
                color={"text-primary"}
                path="/"
              />
            </div>
          </div>
          <div className="bg-primary py-5 text-center text-white">
            Discover the ultimate platform where we upskill, empower, and walk
            with you to your dream career
          </div>
        </div>
      </section>
      <section className="flex justify-center py-28 gap-24 items-center">
        <div className="border-2 border-primary w-[250px] h-[140px] rounded-md">
          <span className="text-3xl flex flex-col justify-center items-center gap-2 h-full font-bold text-primary">
            100K+
            <span className="text-textNeutral text-sm font-normal">
              Students taught
            </span>
          </span>
        </div>
        <div className="border-2 border-primary w-[250px] h-[140px] rounded-md">
          <span className="text-3xl flex flex-col justify-center items-center gap-2 h-full font-bold text-[#FF9F24]">
            50K
            <span className="text-textNeutral text-sm font-normal">
              CV Revamped
            </span>
          </span>
        </div>
        <div className="border-2 border-primary w-[250px] h-[140px] rounded-md">
          <span className="text-3xl flex flex-col justify-center items-center gap-2 h-full font-bold text-[#FF5FCC]">
            30K
            <span className="text-textNeutral text-sm font-normal">
              Students taught
            </span>
          </span>
        </div>
      </section>
      <section className="border-y border-textDefault mx-[50px] py-16 flex flex-col gap-14 text-textDefault">
        <div className="text-center">
          <h4 className="text-3xl font-bold">Our Courses</h4>
          <p className="mt-4">
            We Ignite Your Career, Your Path to Success Begins Here
          </p>
        </div>
        <div className="flex gap-10 justify-center items-center">
          <CourseCard
            src={"/dataA.svg"}
            alt={"data analysis"}
            title={"Data Analysis"}
            text={
              "Learn data analysis from industry experts. Gain practical skills and hands-on experience."
            }
            path={"/"}
            bg={"bg-lemon"}
          />
          <CourseCard
            src={"/product.svg"}
            alt={"data analysis"}
            title={"Product Management"}
            text={
              "Learn data analysis from industry experts. Gain practical skills and hands-on experience."
            }
            path={"/"}
            bg={"bg-primaryLight"}
          />
          <CourseCard
            src={"/dataA.svg"}
            alt={"data analysis"}
            title={"Data Analysis"}
            text={
              "Learn data analysis from industry experts. Gain practical skills and hands-on experience."
            }
            path={"/"}
            bg={"bg-lemon"}
          />
        </div>
      </section>
      <section className="flex flex-col gap-10 px-[50px] py-28">
        <div className="flex justify-center items-center gap-10 pb-28">
          <div>
            <p className="text-right text-3xl font-bold text-textDefault">
              Why Japa?
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 border-l border-textDefault pl-12">
            <WhyCard
              src={"/why1.svg"}
              title={"Transform Your Career"}
              text={
                "Gain the skills and knowledge to excel in today's job market."
              }
              alt={"why japa card img"}
            />
            <WhyCard
              src={"/why2.svg"}
              title={"Career Support"}
              text={"Get help with CVs and access to job postings."}
              alt={"why japa card img"}
            />
            <WhyCard
              src={"/why3.svg"}
              title={"Expert Instructions"}
              text={
                "Learn from industry professionals with real-world experience."
              }
              alt={"why japa card img"}
            />
            <WhyCard
              src={"/why4.svg"}
              title={"Network and Grow"}
              text={"Join a community of learners and professionals."}
              alt={"why japa card img"}
            />
          </div>
        </div>
        <div className="bg-primary w-full h-[500px] rounded-[30px] flex justify-center items-center gap-[150px] px-[30px]">
          <div className="flex items-center justify-center">
            <Image src="/cv.svg" alt="" height={450} width={450} />
          </div>
          <div className="flex flex-col gap-5 justify-start w-[300px]">
            <span className="text-[15px] font-light text-white">CV Revamp</span>
            <p className="text-white font-bold text-2xl">
              Get your CV revamped by professionals to stand out in the job
              market.
            </p>
            <Button
              text={"Revamp My CV"}
              bgColor={"bg-white"}
              width={"w-fit"}
              path="/"
              color={"text-primary"}
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-primaryLighter gap-10 px-[50px] pb-10 py-16">
        <div className="text-lg font-bold">Hot Jobs Available Now</div>
        <div className="flex gap-4">
          {jobs.map((job) => (
            <JobCard key={job._id} company={job.company_name} location={job.location} jobTitle={job.job_title} jobType={job.job_type} skills={job.technology}  />
          ))}
        </div>
        <Link href="/" className="underline text-primary mt-4 text-sm">See more jobs</Link>
      </section>
      <section className="px-[50px] flex flex-col gap-14 items-center justify-center pt-20">
        <div>
          <p className="text-3xl font-bold text-textDefault">
            What our community members are saying
          </p>
        </div>
        <div className="flex items-center flex-col gap-14">
          <div className="flex gap-12">
            <CommunityCard
              text={
                "Japa is a platform that has helped me understand what being informed is. I got to undetstand that I don’t have to settle for less. I could keep going till I get to the destination i desire"
              }
              name={"Ogala"}
              src={"/avatar.svg"}
              alt={"profile picture"}
            />
            <CommunityCard
              text={
                "Japa is a platform that has helped me understand what being informed is. I got to undetstand that I don’t have to settle for less. I could keep going till I get to the destination i desire"
              }
              name={"Ogala"}
              src={"/avatar.svg"}
              alt={"profile picture"}
            />
          </div>
          <div className="">
            <CommunityCard
              text={
                "Japa is a platform that has helped me understand what being informed is. I got to undetstand that I don’t have to settle for less. I could keep going till I get to the destination i desire"
              }
              name={"Ogala"}
              src={"/avatar.svg"}
              alt={"profile picture"}
            />
          </div>
        </div>
      </section>
    </div>
  );

}
