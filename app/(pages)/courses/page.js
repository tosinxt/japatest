"use client";
import CourseCard from "@/app/components/CourseCard";
import { Courses, Reviews } from "@/app/page";
import { useJapaStore } from "@/app/store/store";
import Image from "next/image";
import React, { useEffect } from "react";

const CoursesPage = () => {
  const getCourses = useJapaStore((state) => state.getCourses);
  const courses = useJapaStore((state) => state.courses);
  useEffect(() => {
    getCourses();
  }, [getCourses]);

  return (
    <main className="mt-36">
      <section className="mx-[50px]">
        <div className="bg-primary w-full h-[500px] rounded-[30px] flex justify-center items-center gap-[100px] px-[10px]">
          <div className="flex flex-col gap-5 justify-start w-[500px]">
            <p className="text-white font-bold text-[60px]">
              Learn Skills for your Dream Job
            </p>
          </div>
          <div className="flex items-center justify-center relative">
            <Image
              src="/courses.svg"
              alt=""
              height={450}
              width={450}
              className="relative"
            />
            <div className="border-2 border-primary w-[200px] h-[100px] rounded-md bg-white absolute top-10 -right-10">
              <span className="text-2xl flex flex-col justify-center items-center gap-2 h-full font-bold text-primary">
                100K+
                <span className="text-textDefault text-sm font-normal">
                  Students taught
                </span>
              </span>
            </div>
            <div className="border-2 border-primary w-[180px] h-[100px] rounded-md bg-white absolute bottom-5 -left-5">
              <span className="text-2xl flex flex-col justify-center items-center gap-2 h-full font-bold text-primary">
                2000
                <span className="text-textDefault text-sm font-normal">
                  Jobs offered
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-[50px] py-16 flex flex-col gap-14 text-textDefault">
        <div className="text-center">
          <h4 className="text-3xl font-bold">A broad Selection of Courses</h4>
          <p className="mt-4">
            Learn skills to be more competitive in top industries without limits
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-5 justify-center items-center">
          {courses?.map((course) => (
            <CourseCard
              src={"/dataA.svg"}
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
