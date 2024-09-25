import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-9 tablet:flex-row justify-between items-start tablet:px-[64px] px-[15px] tablet:my-40 my-10">
      <div>
        <Image
          src="/logo.svg"
          alt="Japa logo"
          width={40}
          height={40}
          layout="responsive"
        />
      </div>
      <div className="text-sm text-textDefault flex justify-between gap-20 w-full tablet:w-fit">
        <ul className="tablet:flex tablet:flex-col gap-3 hidden">
          <li>About us</li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li className="tablet:hidden">About us</li>
          <li className="hover:underline">
            <Link href={"/courses"}>Courses</Link>
          </li>
          <li className="hover:underline">
            <Link
              href={
                "https://docs.google.com/forms/d/1OsZ5mkU3BAB0Cfv_BmcrlCjU7ZUGKm22GSWtSRT7px4/viewform?ref=dishapages&edit_requested=true"
              }
            >
              CV Revamp
            </Link>
          </li>
          <li className="hover:underline">
            <Link href={"/jobs"}>Jobs</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li>Contact</li>
          <li>talent@japatalent.com</li>
          <li>+234 8128206869</li>
          <li className="flex items-center gap-6">
            <Link
              className="hover:scale-105"
              href="https://www.instagram.com/stories/japatechglobal/ "
            >
              <Image
                height={28}
                width={28}
                alt="instagram link"
                src="/instagram.svg"
              />
            </Link>
            <Link
              className="hover:scale-105"
              href=" https://x.com/japatechglobal"
            >
              <Image
                height={24}
                width={24}
                alt="twitter link"
                src="/twitter.svg"
              />
            </Link>
            <Link
              className="hover:scale-105"
              href="https://www.linkedin.com/company/japaglobal/?viewAsMember=true"
            >
              <Image
                height={28}
                width={28}
                alt="linkedin link"
                src="/linkedin.svg"
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
