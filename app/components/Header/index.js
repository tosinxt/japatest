"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Header = () => {
  const currentPath = usePathname()
  const NavLink = ({ text, path }) => (
    <Link
      href={path}
      className={`rounded-[30px] w-fit px-3 py-2 font-normal text-sm border flex items-center justify-center  ${
        currentPath === path
          ? "bg-primary border-primary text-white"
          : "bg-white border-textDefault text-textDefault"
      }`}
    >
      {text}
    </Link>
  );

  return (
    <div className='px-[50px] flex justify-between py-10'>
      <div className='flex gap-3'>
        <NavLink path="/" text={"Home"} />
        <NavLink path="" text={"Courses"} />
        <NavLink path="" text={"CV Revamp"} />
      </div>
      <div>
        <img src="/logo.svg" alt="" />
      </div>
      <div className='flex gap-3'>
        <NavLink path="" text={"Talent Assessment"} />
        <NavLink path="" text={"Jobs"} />
        <NavLink path="" text={"Login"} />
      </div>
    </div>
  );
}

export default Header;