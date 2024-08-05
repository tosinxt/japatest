"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import logo from "../../../../public/logo2.svg"

const Heading = ({ text, title, goBack }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 text-textDefault">
      <div className="w-full border-b flex items-center justify-center py-4">
        <Image src={logo} alt="" width={50} height={50} priority={true} />
      </div>
      <div className="">
        {text && <div onClick={goBack} className="text-4xl -pb-2 cursor-pointer">&lsaquo;</div>}
        <p className="text-left text-[25px] font-extrabold">{title}</p>
        {text && <p className="text-textNeutral text-base pt-1">{text}</p>}
      </div>
    </div>
  );
};

export default Heading;
