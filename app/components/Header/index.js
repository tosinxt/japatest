"use client";
import { useJapaStore } from "@/app/store/store";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const currentPath = usePathname();
  const signedIn = useJapaStore((state) => state.signedIn);
  const user = useJapaStore((state) => state.user);
  const [dropDown, setDropDown] = useState(false);

  // Modified isActive function
  const isActive = (path) => {
    // Check for exact match or if currentPath starts with the path and has a trailing slash
    return (
      currentPath === path ||
      (path === "/jobs" && currentPath.startsWith("/jobs/")) ||
      (path === "/courses" && currentPath.startsWith("/courses/"))
    );
  };

  const NavLink = ({ text, path }) => (
    <Link
      href={path}
      className={`rounded-[30px] text-sm tablet:text-base w-fit px-4 tablet:px-6 h-10 font-normal border flex items-center justify-center   ${
        isActive(path)
          ? "bg-primary border-primary text-white"
          : "bg-white border-textDefault text-textDefault hover:bg-gray-100"
      }`}
    >
      {text}
    </Link>
  );

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  const DropDown = () => {
    return (
      <div className="flex flex-col gap-6 absolute top-100 right-0 bg-white px-4 py-10 h-screen shadow-lg ease-in-out">
        {signedIn ? (
          <div className="flex flex-col gap-6">
            <NavLink path="/" text={"Home"} />
            <NavLink path="/applied" text={"Applied"} />
            <NavLink path="" text={"Talent Assessment"} />
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <NavLink path="/" text={"Home"} />
            <NavLink path="/courses" text={"Courses"} />
            <NavLink path="" text={"CV Revamp"} />
          </div>
        )}

        {signedIn ? (
          <div className="flex flex-col gap-6">
            <div className="text-xs">{user}</div>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <NavLink path="/talentAssessment" text={"Talent Assessment"} />
            <NavLink path={"/jobs"} text={"Jobs"} />
            <NavLink path="/login" text={"Login"} />
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="pt-4 pb-4 tablet:pt-8 tablet:pb-4 border fixed top-0 bg-white w-full z-20">
      <div className="flex justify-between items-center tablet:px-[64px] px-[15px] relative">
        <div className="hidden tablet:block">
          {signedIn ? (
            <div className="flex gap-3">
              <NavLink path="/" text={"Home"} />
              <NavLink path="/applied" text={"Applied"} />
              <NavLink path="" text={"Talent Assessment"} />
            </div>
          ) : (
            <div className="flex gap-3">
              <NavLink path="/" text={"Home"} />
              <NavLink path="/courses" text={"Courses"} />
              <NavLink path="" text={"CV Revamp"} />
            </div>
          )}
        </div>
        <div>
          <Link href={"/"} className="">
            <Image src="/logo.svg" alt="" height={9999} width={9999}  style={{height: "40px", width: "100px", minWidth: "200px"}}/>
          </Link>
        </div>
        <div className="tablet:hidden" onClick={toggleDropDown}>
          <Image src="/menu.svg" alt="" height={36} width={36} />
          {dropDown && <DropDown />}
        </div>
        <div className="hidden tablet:block">
          {signedIn ? (
            <div className="flex gap-3">
              <div className="text-xs">{user}</div>
            </div>
          ) : (
            <div className="flex gap-3">
              <NavLink path="/talentAssessment" text={"Talent Assessment"} />
              <NavLink path={"/jobs"} text={"Jobs"} />
              <NavLink path="/login" text={"Login"} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
