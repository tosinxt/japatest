"use client";
import CourseCard from "@/app/components/CourseCard";
import { Courses, Reviews } from "@/app/page";
import { useJapaStore } from "@/app/store/store";
import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";

const CoursesPage = () => {
  const getCourses = useJapaStore((state) => state.getCourses);
  const courses = useJapaStore((state) => state.courses);
  useEffect(() => {
    getCourses();
    Aos.init({ once: true });
  }, [getCourses]);

  return (
    <main className="tablet:mt-36 mt-28">
      <section className="tablet:mx-[64px] mx-[15px]">
        <div className="bg-primary w-full h-full tablet:h-[500px] rounded-xl tablet:rounded-[30px] flex tablet:flex-row flex-col justify-center items-center gap-10 tablet:gap-[100px] tablet:px-[10px] px-5 py-14 tablet:py-0">
          <div className="flex flex-col gap-5 tablet:justify-start tablet:w-[500px]">
            <p
              className="text-white font-bold text-3xl leading-tight tablet:text-[60px]"
              data-aos="
fade-up"
              data-aos-duration="1500"
            >
              Learn Skills for your Dream Job
            </p>
          </div>
          <div className="flex items-center justify-center relative">
            <Image
              src="/courses.png"
              alt=""
              height={450}
              width={450}
              className="relative"
            />
            <div
              className="border-2 border-primary w-[120px] tablet:w-[200px] h-[80px] tablet:h-[100px] rounded-md bg-white absolute top-4 tablet:top-10 -right-2 tablet:-right-10"
              data-aos="
fade-up"
              data-aos-duration="1500"
            >
              <span className="text-lg tablet:text-2xl flex flex-col justify-center items-center  gap-1tablet:gap-2 h-full font-bold text-primary">
                10K+
                <span className="text-textDefault text-xs text-center tablet:text-sm font-normal">
                  Students taught
                </span>
              </span>
            </div>
            <div
              className="border-2 border-primary w-[130px] tablet:w-[180px]  h-[80px] tablet:h-[100px]  rounded-md bg-white absolute bottom-5 -left-2 tablet:-left-5"
              data-aos="
fade-up"
              data-aos-duration="1500"
            >
              <span className="text-lg tablet:text-2xl flex flex-col justify-center items-center  gap-1tablet:gap-2 h-full font-bold text-primary">
                1000
                <span className="text-textDefault text-xs text-center tablet:text-sm font-normal">
                  Jobs offered
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-[15px] tablet:mx-[64px] py-10 tablet:py-16 flex flex-col gap-5 tablet:gap-14 text-textDefault">
        <div className="text-center">
          <h4 className="text-2xl tablet:text-3xl font-bold">
            A broad Selection of Courses
          </h4>
          <p className="mt-2 tablet:mt-4">
            Learn skills to be more competitive in top industries without limits
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-5 justify-center items-center">
          {courses?.map((course) => (
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
      </section>
      <Reviews />
    </main>
  );
};

export default CoursesPage;
