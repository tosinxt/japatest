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
import Header from "./components/Header";
import Footer from "./components/Footer";
import AOS from "aos";

const Courses = ({ courses }) => (
  <div className="flex flex-wrap gap-x-6  gap-y-5 justify-center items-center">
    {courses?.slice(0, 3).map((course) => (
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
  <section className="px-[15px] tablet px-[15px]:tablet:px-[64px] flex flex-col gap-8 tablet:gap-14 items-center justify-center tablet:pt-20 pt-16">
    <div>
      <p
        className="text-2xl text-center tablet:text-3xl font-bold text-textDefault"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        What our community members are saying
      </p>
    </div>
    <div className="flex items-center flex-col gap-10 tablet:gap-14">
      <div
        className="flex flex-col tablet:flex-row gap-10 tablet:gap-12 mr-[15px] tablet:mr-0"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <CommunityCard
          text={
            "Japa is a platform that has helped me understand what being informed is. \n\nI got to understand that I don’t have to settle for less. I could keep going till I get to the destination i desire"
          }
          name={"Ogala"}
          src={"/avatar.svg"}
          alt={"profile picture"}
        />
        <CommunityCard
          text={
            "Got an offer for this role that was posted on this forum. \n\nThank you to the leaders of this platform, more blessings "
          }
          name={"Barr Rachael Ogbebor"}
          src={"/avatar2.svg"}
          alt={"profile picture"}
        />
      </div>
      <div className="mr-[15px] tablet:mr-0 mb-20 tablet:mb-0">
        <CommunityCard
          text={
            "I just want to say thank you to the Japa team for the exclusive role I got. \n\nI have started working and it can only get better from here      "
          }
          name={"Jennifer"}
          src={"/avatar3.svg"}
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

  useEffect(() => {
    findJobs({ limit: 8 });
    getCourses();
    AOS.init({ once: true });
  }, [findJobs, getCourses]);

  const WhyCard = ({ src, alt, title, text }) => (
    <div
      className="text-textDefault flex items-center tablet:items-start tablet:justify-start gap-4"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div>
        <Image src={src} alt={alt} height={80} width={116} />
      </div>
      <div className="flex flex-col gap-2 justify-between">
        <p className="font-medium tablet:text-lg">{title}</p>
        <p className="font-light w-[240px] text-textNeutral text-sm tablet:text-base">
          {text}
        </p>
      </div>
    </div>
  );

  return (
    <div>
      <Header />
      <section className=":h-[calc(100vh-160px)] tablet:h-[calc(100vh-128px)] mt-16 tablet:bg-banner bg-no-repeat bg-bannerPosition flex flex-col gap-8">
        <div className="flex flex-col h-[50%] tablet:h-full justify-between">
          <div className="flex flex-col justify-center items-start gap-1 tablet:gap-3 tablet:h-full px-[15px] tablet:px-[64px] pt-10 pb-6 tablet:pt-0 tablet:pb-0">
            <h2 className="text-textDefault font-bold text-3xl tablet:text-[60px] leading-normal">
              <span>
                Unlock Your Potential
                <br /> For Global Success <br />
                With
              </span>
              <span
                className="text-primary"
                data-aos="
fade-up"
                data-aos-duration="1500"
              >
                {" "}
                JAPA
              </span>
            </h2>
            <p
              className="text-textDefault text-opacity-85"
              data-aos="
fade-up"
              data-aos-duration="1500"
            >
              The Easiest Way to Boost Your Employability and Secure <br />{" "}
              Global Opportunities
            </p>
            <div
              className="flex gap-2 tablet:gap-4 mt-8 tablet:mt-3"
              data-aos="fade-up"
            >
              <Button
                text={"Take a course"}
                width={"w-fit"}
                bgColor={"bg-primary"}
                color={"text-white"}
                path="/courses"
              />
              <Button
                text={"Apply for Jobs"}
                width={"w-fit"}
                bg={"bg-white"}
                color={"text-primary"}
                path="/jobs"
              />
            </div>
          </div>
        </div>

        <div className="h-1/2 w-full tablet:hidden">
          <Image
            src="/banner-small.svg"
            alt="landing"
            height={9999}
            width={9999}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </section>
      <div className="bg-primary tablet:px-0 px-2 h-20 tablet:h-16 flex items-center justify-center text-center text-white text-sm tablet:text-[20px]">
        Discover the ultimate platform where we upskill, empower, and walk with
        you to your dream career
      </div>
      <section className="flex flex-col tablet:flex-row justify-center py-16 tablet:py-28 gap-8 tablet:gap-[108px] items-center border-b border-textDefault  mx-[15px] tablet:mx-[64px]">
        <div
          className="border-2 border-primary w-[220px] tablet:w-[300px] h-[150px] tablet:h-[164px] rounded-md"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <span className="text-4xl flex flex-col justify-center items-center gap-2 h-full font-bold text-primary">
            10K+
            <span className="text-textNeutral text-base font-normal">
              Students taught
            </span>
          </span>
        </div>
        <div
          className="border-2 border-primary w-[220px] tablet:w-[300px] h-[150px] tablet:h-[164px] rounded-md"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <span className="text-4xl flex flex-col justify-center items-center gap-2 h-full font-bold text-[#FF9F24]">
            1K
            <span className="text-textNeutral text-base font-normal">
              CV Revamped
            </span>
          </span>
        </div>
        <div
          className="border-2 border-primary w-[220px] tablet:w-[300px] h-[150px] tablet:h-[164px] rounded-md"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <span className="text-4xl flex flex-col justify-center items-center gap-2 h-full font-bold text-[#FF5FCC]">
            100+
            <span className="text-textNeutral text-base font-normal">
              Students taught
            </span>
          </span>
        </div>
      </section>
      <section className="mx-[15px] tablet:mx-[64px]  py-16 flex flex-col gap-14 text-textDefault">
        <div className="text-center">
          <h4 className="text-3xl tablet:text-4xl font-bold">Our Courses</h4>
          <p className="mt-4 text-base tablet:text-lg">
            We Ignite Your Career, Your Path to Success Begins Here
          </p>
        </div>
        <Courses courses={courses} />
      </section>
      <section className="flex flex-col gap-10 mx-[15px] tablet:mx-[64px] py-14 tablet:py-28 border-t border-textDefault">
        <div className="flex flex-col tablet:flex-row tablet:justify-center tablet:items-center gap-10 pb-28">
          <div>
            <p className="tablet:text-right text-left text-2xl tablet:text-4xl font-bold text-textDefault">
              Why Japa?
            </p>
          </div>
          <div className="flex flex-col gap-2 tablet:grid tablet:grid-cols-2 justify-stretch tablet:gap-x-20 tablet:gap-y-12 tablet:border-l border-textDefault tablet:pl-12">
            <WhyCard
              src={"/why1.png"}
              title={"Transform Your Career"}
              text={
                "Gain the skills and knowledge to excel in today's job market."
              }
              alt={"why japa card img"}
            />
            <WhyCard
              src={"/why2.png"}
              title={"Career Support"}
              text={"Get help with CVs and access to job postings."}
              alt={"why japa card img"}
            />
            <WhyCard
              src={"/why3.png"}
              title={"Expert Instructions"}
              text={
                "Learn from industry professionals with real-world experience."
              }
              alt={"why japa card img"}
            />
            <WhyCard
              src={"/why4.png"}
              title={"Network and Grow"}
              text={"Join a community of learners and professionals."}
              alt={"why japa card img"}
            />
          </div>
        </div>
        <div
          className="bg-primary px-5 tablet:px-[30px] py-14 tablet:py-0 w-full h-full tablet:h-[500px] rounded-[30px] flex tablet:flex-row flex-col-reverse justify-center items-center gap-5 tablet:gap-[150px]"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <div className="flex items-center justify-center">
            <Image src="/cv.svg" alt="" height={450} width={450} />
          </div>
          <div className="flex flex-col gap-3 tablet:gap-5 justify-start tablet:w-[400px]">
            <span className="tablet:text-lg font-light text-white">
              CV Revamp
            </span>
            <p className="text-white font-bold text-2xl tablet:text-3xl">
              Get your CV revamped by professionals to stand out in the job
              market.
            </p>
            <Button
              text={"Revamp My CV"}
              bgColor={"bg-white"}
              width={"w-fit tablet:mt-0 mt-2"}
              path="https://docs.google.com/forms/d/1OsZ5mkU3BAB0Cfv_BmcrlCjU7ZUGKm22GSWtSRT7px4/viewform?ref=dishapages&edit_requested=true"
              color={"text-primary"}
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-primaryLighter gap-10 px-[15px] tablet:px-[64px] pb-10 py-16">
        <div className="text-xl tablet:text-2xl font-bold">
          Hot Jobs Available Now
        </div>
        <div className="flex gap-4 flex-wrap w-fit pc:grid pc:grid-cols-4 justify-center items-center">
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
      <Footer />
    </div>
  );
};

export default Home;
export { Courses, Reviews };
