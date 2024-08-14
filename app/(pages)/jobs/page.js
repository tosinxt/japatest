"use client";
import JobCard from "@/app/components/JobCard";
import { useJapaStore } from "@/app/store/store";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";

const Jobs = () => {
  const { jobs, findJobs, limit } = useJapaStore((state) => ({
    jobs: state.jobs,
    findJobs: state.findJobs,
    limit: state.limit,
  }));

  useEffect(() => {
    findJobs({limit,});
  }, [findJobs, limit]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const FilterBox = ({ text, onClick }) => (
    <button
      onClick={onClick}
      className="bg-lightPurple w-fit px-[10px] py-2 text-primary text-sm rounded-md"
    >
      {text}
    </button>
  );

  const jobTypes = [
    "Remote",
    "Full time",
    "Part time",
    "Intern",
    "Volunteer",
    "Others",
  ];
  const jobCategories = [
    "Product",
    "Sales",
    "Marketing",
    "Mobile app services",
  ];
  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "Angular", label: "Angular" },
    { value: "Bootstrap", label: "Bootstrap" },
    { value: "ReactJS", label: "React JS" },
    { value: "VueJS", label: "Vue JS" },
  ];
  const yearsOfExperience = ["1 -3 years", "4 - 7 years", "8 - 10 years"];
  const [technology, setTechnology] = useState("");
  const [category, setCategory] = useState("")
  const [experience, setExperience] = useState("")
  const [type, setType] = useState("")

  const onSubmit = (data) => {
    const {jobTitle, jobLocation, jobType} = data
    findJobs({location: jobLocation, title: jobTitle, type: jobType, limit})
    reset()
  }

   const handleCheckboxChange = (setter, value, stateKey) => {
     setter(value);
     console.log(stateKey, value)
     findJobs({[stateKey]: value, limit})
   };


 const handleSelectChange = (selectedOption) => {
   const value = selectedOption?.value;
   setTechnology(value);
   findJobs({technology: value, limit})
 };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#F5F5F5" : "white",
      color: state.isFocused ? "#333" : "#666",
      backgroundColor: state.isSelected
        ? "#D4D4D4"
        : state.isFocused
        ? "#F5F5F5"
        : "white",
      color: state.isSelected ? "#000" : state.isFocused ? "#333" : "#666",
      "&:hover": {
        backgroundColor: "#E0E0E0",
        color: "#333",
      },
    }),
    control: (provided, state) => ({
      ...provided,
      boxShadow: state.isFocused ? "none" : provided.boxShadow,
      borderColor: state.isFocused ? "#ccc" : provided.borderColor,
      "&:hover": {
        borderColor: "#aaa",
      },
      outline: "none", // Remove outline
    }),
    input: (provided) => ({
      ...provided,
      outline: "none", // Remove outline on the input
      boxShadow: "none", // Remove box-shadow on the input
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#f0f0f0", // Customize the background of selected options
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#333", // Customize the text color of selected options
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "#666",
      "&:hover": {
        backgroundColor: "#d4d4d4",
        color: "#333",
      },
    }),
  };

  return (
    <div className="flex flex-col gap-10 pt-36 pb-20 bg-[#fafafb] px-[50px]">
      {/* upper layout */}
      <div className="flex flex-col gap-12">
        <form
          className="rounded-l-lg flex h-16 shadow-sm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="bg-white flex w-full">
            <div className="flex items-center gap-2 border-r pl-4 bg-transparent w-full">
              <Image src={"/search.svg"} height={"18"} width={"18"} alt="" />
              <input
                type="text"
                placeholder="UX Designer"
                {...register("jobTitle")}
                className="w-full bg-transparent border-none h-full focus:border-0 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2 border-r pl-4 bg-transparent w-full">
              <Image src={"/location.svg"} height={"18"} width={"18"} alt="" />
              <input
                type="text"
                placeholder="New York, USA"
                {...register("jobLocation")}
                className="w-full bg-transparent border-none h-full focus:border-0 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2 pl-4 bg-transparent w-full">
              <Image src={"/jobType.svg"} height={"18"} width={"18"} alt="" />
              <input
                type="text"
                placeholder="Remote"
                {...register("jobType")}
                className="w-full bg-transparent border-none h-full focus:border-0 focus:outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary rounded-r-lg text-white w-[120px] font-medium"
          >
            Search
          </button>
        </form>
        <div className="flex justify-between">
          <FilterBox text={"All Jobs"} />
          <FilterBox text={"Remote Jobs"} />
          <FilterBox text={"Backend"} />
          <FilterBox text={"Web Dev"} />
          <FilterBox text={"Product design"} />
          <FilterBox text={"Frontend"} />
          <FilterBox text={"ios"} />
          <FilterBox text={"Data Science"} />
          <FilterBox text={"Design"} />
          <FilterBox text={"Webflow"} />
        </div>
      </div>
      {/* lower layout */}
      <div className="flex gap-8 items-start">
        {/* filter bar */}
        <div className="w-[350px] h-fit bg-white px-6 py-5 rounded-xl shadow-md">
          <p className="text-xl font-bold mb-7">Filters</p>
          <div className="flex flex-col gap-3 mb-8">
            <p className="text-sm font-bold flex justify-between items-center">
              Job Type
            </p>
            <div className="flex flex-col gap-3 text-sm">
              {jobTypes.map((jobType, index) => (
                <div className="flex justify-between items-center" key={index}>
                  <div className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      value={jobType}
                      checked={type === jobType}
                      onChange={() => handleCheckboxChange(setType, jobType, "type")}
                      className="h-[19px] w-[19px] rounded-lg accent-primary focus:border-0 focus:outline-0"
                    />
                    <label
                      className="text-textDefault text-opacity-80"
                      htmlFor={jobType}
                    >
                      {jobType}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 mb-8">
            <p className="text-sm font-bold flex justify-between items-center">
              Job Category
            </p>
            <div className="flex flex-col gap-3 text-sm">
              {jobCategories.map((jobCategory, index) => (
                <div className="flex justify-between items-center" key={index}>
                  <div className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      value={category}
                      checked={category === jobCategory}
                      onChange={() =>
                        handleCheckboxChange(setCategory, jobCategory, "category")
                      }
                      className="h-[19px] w-[19px] rounded-lg accent-primary focus:border-0 focus:outline-0"
                    />
                    <label
                      className="text-textDefault text-opacity-80"
                      htmlFor={jobCategory}
                    >
                      {jobCategory}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 mb-8">
            <p className="text-sm font-bold flex justify-between items-center">
              Technologies used
            </p>
            <Select
              options={options}
              value={options.find((option) => option.value === technology)}
              onChange={handleSelectChange}
              styles={customStyles}
              placeholder="Select a technology..."
              className="basic-single-select text-sm"
              classNamePrefix="select"
              isSearchable
            />
          </div>
          <div className="flex flex-col gap-3 mb-8">
            <p className="text-sm font-bold flex justify-between items-center">
              YOE required
            </p>
            <div className="flex flex-col gap-3 text-sm">
              {yearsOfExperience.map((years, index) => (
                <div className="flex justify-between items-center" key={index}>
                  <div className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      value={years}
                      checked={experience === years}
                      onChange={() =>
                        handleCheckboxChange(setExperience, years, "experience")
                      }
                      className="h-[19px] w-[19px] rounded-lg accent-primary focus:border-0 focus:outline-0"
                    />
                    <label
                      className="text-textDefault text-opacity-80"
                      htmlFor={years}
                    >
                      {years}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-fit flex items-center justify-center">
          <div className="flex gap-4 flex-wrap">
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
        </div>
      </div>
    </div>
  );
};

export default Jobs;
