"use client";
import JobCard from "@/app/components/JobCard";
import { useJapaStore } from "@/app/store/store";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";

const Jobs = () => {
  const { jobs, findJobs, limit } = useJapaStore((state) => ({
    jobs: state.jobs,
    findJobs: state.findJobs,
    limit: state.limit,
  }));

  const [fetchComplete, setFetchComplete] = useState(false);
  const [currentLimit, setCurrentLimit] = useState(20);

  useEffect(() => {
    const fetchJobs = async () => {
      await findJobs({ limit: currentLimit });
      setFetchComplete(true);
    };
    fetchJobs();
  }, [findJobs, currentLimit]);

  const showMoreJobs = () => {
    setCurrentLimit((prevLimit) => prevLimit + 20);
  };

  console.log(jobs.length);

  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

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

  const [dropDown, setDropDown] = useState(false);

  const handleToggle = () => {
    setDropDown(!dropDown);
  };

  const onSubmit = (data) => {
    const { jobTitle, jobLocation, jobType } = data;
    findJobs({ location: jobLocation, title: jobTitle, type: jobType, limit });
    reset();
  };

  const [filters, setFilters] = useState({
    technology: "",
    category: "",
    experience: "",
    type: "",
  });

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  const resetFilter = () => {
    // Reset filters to their default values
    setFilters({
      technology: "",
      category: "",
      experience: "",
      type: "",
    });

    // Call findJobs with the reset filters
    findJobs({
      technology: "",
      category: "",
      experience: "",
      type: "",
      limit,
    });
  };

  const handleCheckboxChange = (setter, value, stateKey) => {
    setter((prevFilters) => {
      const newFilters = { ...prevFilters, [stateKey]: value };

      // Call findJobs with all the current filters
      findJobs({ ...newFilters, limit });

      return newFilters;
    });
  };

  const handleSelectChange = (selectedOption) => {
    const value = selectedOption?.value;
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters, technology: value };

      // Call findJobs with all the current filters
      findJobs({ ...newFilters, limit });

      return newFilters;
    });
  };

  const FilterBox = ({ text, onClick }) => (
    <button
      onClick={onClick}
      className="bg-lightPurple w-fit px-[10px] py-2 text-primary text-sm rounded-md"
    >
      {text}
    </button>
  );

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
      outline: "none",
    }),
    input: (provided) => ({
      ...provided,
      outline: "none",
      boxShadow: "none",
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#f0f0f0",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#333",
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

  const Filter = ({ display }) => (
    <div
      className={`tablet:w-[350px] h-fit bg-white px-6 py-5 tablet:rounded-xl shadow-md ${display}`}
    >
      <p className="text-xl font-bold mb-7 flex justify-between">
        Filters{" "}
        <Image
          src={"/cancel.svg"}
          alt={"close"}
          height={14}
          width={14}
          onClick={resetFilter}
        />
      </p>
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
                  checked={filters.type === jobType}
                  onChange={() =>
                    handleCheckboxChange(setFilters, jobType, "type")
                  }
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
                  value={filters.category}
                  checked={filters.category === jobCategory}
                  onChange={() =>
                    handleCheckboxChange(setFilters, jobCategory, "category")
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
          value={options.find((option) => option.value === filters.technology)}
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
                  value={filters.experience}
                  checked={filters.experience === years}
                  onChange={() =>
                    handleCheckboxChange(setFilters, years, "experience")
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
  );

  return (
    <div className="flex flex-col gap-10 pt-24 tablet:pt-36 pb-20 bg-[#fafafb] tablet:px-[64px] px-[15px]">
      {/* upper layout */}
      <div className="flex flex-col gap-12">
        <form
          className="rounded-l-lg flex flex-col tablet:flex-row h-full tablet:h-16 shadow-sm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className=" tablet:bg-white flex flex-col gap-0 tablet:flex-row w-full h-full">
            <div className="flex items-center gap-2 border-b tablet:border-b-0 tablet:border-r pl-3 tablet:pl-4 bg-transparent w-full h-full py-2 tablet:py-0 rounded-none bg-white tablet:bg-transparent shadow-lg tablet:shadow-none ">
              <div>
                <Image
                  src={"/search.svg"}
                  height={18}
                  width={18}
                  layout="responsive"
                  alt=""
                />
              </div>
              <input
                type="text"
                placeholder="UX Designer"
                {...register("jobTitle")}
                className="text-sm tablet:text-base w-full bg-transparent border-none h-full focus:border-0 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2 border-b tablet:border-b-0 tablet:border-r pl-3 tablet:pl-4 bg-transparent w-full h-full py-2 tablet:py-0 rounded-none bg-white tablet:bg-transparent shadow-lg tablet:shadow-none">
              <div>
                <Image
                  src={"/location.svg"}
                  height={18}
                  width={18}
                  layout="responsive"
                  alt=""
                />
              </div>
              <input
                type="text"
                placeholder="New York, USA"
                {...register("jobLocation")}
                className="text-sm tablet:text-base w-full bg-transparent border-none h-full focus:border-0 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2 pl-3 tablet:pl-4 bg-transparent w-full h-full py-2 tablet:py-0 px-2 tablet:px-0 rounded-none bg-white tablet:bg-transparent shadow-lg tablet:shadow-none">
              <div>
                <Image
                  src={"/jobType.svg"}
                  height={18}
                  width={18}
                  layout="responsive"
                  alt=""
                />
              </div>
              <input
                type="text"
                placeholder="Remote"
                {...register("jobType")}
                className="text-sm tablet:text-base w-full bg-transparent border-none h-full focus:border-0 focus:outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary h-10 tablet:h-full tablet:rounded-r-lg text-white text-xs tablet:text-base px-2 tablet:w-[120px] font-medium"
          >
            Search
          </button>
        </form>
        <div className="tablet:flex hidden justify-between">
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
        <Filter display={"tablet:block hidden"} />
        <div className="w-fit flex flex-col gap-4 relative">
          {fetchComplete && (
            <div className="tablet:hidden flex items-end justify-end text-primary underline font-medium">
              <span onClick={handleToggle} className="w-fit cursor-pointer">
                Filters
              </span>
            </div>
          )}
          {dropDown && (
            <Filter display={"tablet:hidden absolute top-6 right-0 z-10"} />
          )}
          <div className="flex flex-col justify-center items-center gap-8">
            <div className="flex gap-4 flex-wrap justify-center tablet:justify-start">
              {fetchComplete && !jobs === 0 ? (
                <div>Your search parameters did not match any jobs</div>
              ) : (
                jobs?.map((job) => (
                  <JobCard
                    key={job?._id}
                    company={job?.company_name}
                    location={job?.location}
                    jobTitle={job?.job_title}
                    jobType={job?.job_type}
                    skills={job?.technology}
                    path={`/jobs/${job?._id}`}
                  />
                ))
              )}
            </div>
            {fetchComplete && jobs.length === currentLimit && (
              <button
                onClick={showMoreJobs}
                className="bg-primary h-10 rounded-lg text-white text-xs tablet:text-base px-4 w-full tablet:w-fit font-medium flex justify-center items-center"
              >
                Load More Jobs
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
