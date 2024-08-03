"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Heading = ({ text, title }) => {
  return (
    <div className="flex flex-col gap-1 text-textDefault">
      <p className="text-center text-[25px] font-[500]">{title}</p>
      {text && (
        <span className="text-center text-base">{text}</span>
      )}
    </div>
  );
};

export default Heading;
