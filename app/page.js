"use client";
import React from "react";
import Image from "next/image";
import Button from "./components/Button";
import CourseCard from "./components/CourseCard";
import CommunityCard from "./components/CommunityCard";
import Link from "next/link";
import JobCard from "./components/JobCard";
import { useJapaStore } from "./store/store";
import { useEffect } from "react";

const Courses = ({ courses }) => (
  <div className="flex flex-wrap gap-x-6  gap-y-5 justify-center items-center">
    {courses?.slice(0,3).map((course) => (
      <CourseCard
        src={"/dataA.png"}
        alt={course.title}
        title={course.title}
        text="Learn data analysis from industry experts. Gain practical skills and hands-on experience."
        path={`/courses/${course._id}`}
        key={course._id}
      />
    ))}
  </div>
);

const Reviews = () => (
  <section className="px-[15px] tablet:px-[64px] flex flex-col gap-8 tablet:gap-14 items-center justify-center tablet:pt-20 pt-16">
    <div>
      <p className="text-2xl text-center tablet:text-3xl font-bold text-textDefault">
        What our community members are saying
      </p>
    </div>
    <div className="flex items-center flex-col gap-10 tablet:gap-14">
      <div className="flex flex-col tablet:flex-row gap-10 tablet:gap-12 mr-[15px] tablet:mr-0">
        <CommunityCard
          text={
            "Japa is a platform that has helped me understand what being informed is. I got to understand that I don’t have to settle for less. I could keep going till I get to the destination i desire"
          }
          name={"Ogala"}
          src={"/avatar.svg"}
          alt={"profile picture"}
        />
        <CommunityCard
          text={
            "Japa is a platform that has helped me understand what being informed is. I got to understand that I don’t have to settle for less. I could keep going till I get to the destination i desire"
          }
          name={"Ogala"}
          src={"/avatar.svg"}
          alt={"profile picture"}
        />
      </div>
      <div className="mr-[15px] tablet:mr-0 mb-20 tablet:mb-0">
        <CommunityCard
          text={
            "Japa is a platform that has helped me understand what being informed is. I got to understand that I don’t have to settle for less. I could keep going till I get to the destination i desire"
          }
          name={"Ogala"}
          src={"/avatar.svg"}
          alt={"profile picture"}
        />
      </div>
    </div>
  </section>
);

const Home = () => {
  const { jobs, findJobs, courses, getCourses } = useJapaStore((state) => ({
    jobs: state.jobs,
    findJobs: state.findJobs,
    courses: state.courses,
    getCourses: state.getCourses,
  }));

  console.log(courses);

  useEffect(() => {
    findJobs({ limit: 8 });
    getCourses();
  }, [findJobs, getCourses]);

  const WhyCard = ({ src, alt, title, text }) => (
    <div className="text-textDefault flex items-start justify-start gap-4">
      <div>
        <Image src={src} alt={alt} height={80} width={116} />
      </div>
      <div className="flex flex-col gap-2 justify-between">
        <p className="font-medium text-lg">{title}</p>
        <p className="font-light w-[240px] text-textNeutral">{text}</p>
      </div>
    </div>
  );

  return (
    <div>
      <section className="h-[calc(100vh-128px)] mt-16 bg-banner bg-no-repeat bg-bannerPosition">
        <div className="flex flex-col h-full justify-between">
          <div
            className="flex flex-col justify-center items-start gap-3 h-full px-[64px]
"
          >
            <h2 className="text-textDefault font-bold text-[60px] leading-normal ">
              Unlock Your Potential
              <br /> For Global Success <br />
              With <span className="text-primary">JAPA</span>
            </h2>
            <p className="text-textDefault text-opacity-85">
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
        </div>
      </section>
      <div className="bg-primary h-16 flex items-center justify-center text-center text-white text-[20px]">
        Discover the ultimate platform where we upskill, empower, and walk with
        you to your dream career
      </div>
      <section
        className="flex justify-center py-28 gap-[108px] items-center border-b border-textDefault  mx-[64px]
 "
      >
        <div className="border-2 border-primary w-[300px] h-[164px] rounded-md">
          <span className="text-4xl flex flex-col justify-center items-center gap-2 h-full font-bold text-primary">
            100K+
            <span className="text-textNeutral text-base font-normal">
              Students taught
            </span>
          </span>
        </div>
        <div className="border-2 border-primary w-[300px] h-[164px] rounded-md">
          <span className="text-4xl flex flex-col justify-center items-center gap-2 h-full font-bold text-[#FF9F24]">
            50K
            <span className="text-textNeutral text-base font-normal">
              CV Revamped
            </span>
          </span>
        </div>
        <div className="border-2 border-primary w-[300px] h-[164px] rounded-md">
          <span className="text-4xl flex flex-col justify-center items-center gap-2 h-full font-bold text-[#FF5FCC]">
            30K
            <span className="text-textNeutral text-base font-normal">
              Students taught
            </span>
          </span>
        </div>
      </section>
      <section
        className="mx-[64px] py-16 flex flex-col gap-14 text-textDefault"
      >
        <div className="text-center">
          <h4 className="text-4xl font-bold">Our Courses</h4>
          <p className="mt-4 text-lg">
            We Ignite Your Career, Your Path to Success Begins Here
          </p>
        </div>
        <Courses courses={courses} />
      </section>
      <section
        className="flex flex-col gap-10 mx-[64px] py-28 border-t border-textDefault"
      >
        <div className="flex justify-center items-center gap-10 pb-28">
          <div>
            <p className="text-right text-4xl font-bold text-textDefault">
              Why Japa?
            </p>
          </div>
          <div className="grid grid-cols-2 justify-stretch gap-x-20 gap-y-12 border-l border-textDefault pl-12">
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
          <div className="flex flex-col gap-5 justify-start w-[400px]">
            <span className="text-lg font-light text-white">CV Revamp</span>
            <p className="text-white font-bold text-3xl">
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
      <section
        className="flex flex-col items-center bg-primaryLighter gap-10 px-[64px]
 pb-10 py-16"
      >
        <div className="text-2xl font-bold">Hot Jobs Available Now</div>
        <div className="flex gap-4 flex-wrap w-fit pc:grid pc:grid-cols-4">
          {jobs?.map((job) => (
            <JobCard
              key={job?._id}
              company={job?.company_name}
              location={job?.location}
              jobTitle={job?.job_title}
              jobType={job?.job_type}
              skills={job?.technology}
              path={`/jobs/${job?._id}`}
            />
          ))}
        </div>
        <Link href="/jobs" className="underline text-primary mt-4">
          See more jobs
        </Link>
      </section>
      <Reviews />
    </div>
  );
};

export default Home;
export { Courses, Reviews };
