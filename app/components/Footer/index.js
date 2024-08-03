import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex justify-between items-start px-[50px] my-40">
      <img src="/logo.svg" alt="" />
      <div className="text-sm text-textDefault flex gap-20">
        <ul className="flex flex-col gap-3">
          <li>About us</li>
        </ul>
        <ul className="flex flex-col gap-3">
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
}

export default Footer