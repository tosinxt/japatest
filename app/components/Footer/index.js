import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-9 tablet:flex-row justify-between items-start tablet:px-[64px] px-[15px] tablet:my-40 my-10">
      <div>
        <Image src="/logo.svg" alt="" width={40} height={40} layout="responsive" />
      </div>
      <div className="text-sm text-textDefault flex justify-between gap-20 w-full tablet:w-fit">
        <ul className="tablet:flex tablet:flex-col gap-3 hidden">
          <li>About us</li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li className="tablet:hidden">About us</li>
          <li>Courses</li>
          <li>CV Revamp</li>
          <li>Jobs</li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li>Contact</li>
          <li>talent@japatalent.com</li>
          <li>+234 8128206869</li>
          <li className="flex gap-6">
            <Link href="">
              <img src="/instagram.svg" alt="" />
            </Link>
            <Link href="">
              <img src="/twitter.svg" alt="" />
            </Link>
            <Link href="">
              <img src="/linkedin.svg" alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
