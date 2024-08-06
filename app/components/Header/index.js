"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const currentPath = usePathname();
  const NavLink = ({ text, path }) => (
    <Link
      href={path}
      className={`rounded-[30px] w-fit px-6 h-10 font-normal text-sm border flex items-center justify-center  ${
        currentPath === path
          ? "bg-primary border-primary text-white"
          : "bg-white border-textDefault text-textDefault"
      }`}
    >
      {text}
    </Link>
  );

  return (
    <header className="pt-8 pb-3 border fixed top-0 bg-white w-full z-10">
      <div className="flex justify-between px-[50px]">
        <div className="flex gap-3">
          <NavLink path="/" text={"Home"} />
          <NavLink path="/courses" text={"Courses"} />
          <NavLink path="" text={"CV Revamp"} />
        </div>
        <div>
          <Link href={"/"}>
            <img src="/logo.svg" alt="" />
          </Link>
        </div>
        <div className="flex gap-3">
          <NavLink path="" text={"Talent Assessment"} />
          <NavLink path="" text={"Jobs"} />
          <NavLink path="/login" text={"Login"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
