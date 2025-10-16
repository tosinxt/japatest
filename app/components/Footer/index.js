"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-white to-primaryLight/50 border-t border-gray-100">
      {/* Newsletter Section */}
      <div className="tablet:px-[64px] px-[15px] py-16 tablet:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm text-primary font-medium">📧 Stay Updated</span>
          </div>
          <h3 className="text-2xl tablet:text-4xl font-bold text-textDefault mb-4">
            Subscribe to our Newsletter
          </h3>
          <p className="text-textNeutral text-base tablet:text-lg mb-8">
            Get the latest job opportunities, courses, and career tips delivered to your inbox
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col tablet:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              {subscribed ? "✓ Subscribed!" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="tablet:px-[64px] px-[15px] py-12 tablet:py-16 border-t border-gray-200">
        <div className="grid grid-cols-1 tablet:grid-cols-4 gap-10 tablet:gap-12">
          {/* Brand Section */}
          <div className="tablet:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.svg"
                alt="Japa logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-textNeutral text-sm leading-relaxed mb-6">
              Empowering careers through education, opportunity, and community. Your path to global success starts here.
            </p>
            <div className="flex items-center gap-3">
              <Link
                className="group w-10 h-10 rounded-full bg-primaryLight hover:bg-gradient-to-r hover:from-primary hover:to-purple-600 flex items-center justify-center transition-all duration-300"
                href="https://www.instagram.com/stories/japatechglobal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link
                className="group w-10 h-10 rounded-full bg-primaryLight hover:bg-gradient-to-r hover:from-primary hover:to-purple-600 flex items-center justify-center transition-all duration-300"
                href="https://x.com/japatechglobal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link
                className="group w-10 h-10 rounded-full bg-primaryLight hover:bg-gradient-to-r hover:from-primary hover:to-purple-600 flex items-center justify-center transition-all duration-300"
                href="https://www.linkedin.com/company/japaglobal/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-textDefault font-bold text-base mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-textNeutral hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-textNeutral hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-textNeutral hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/careerCoaching" className="text-textNeutral hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                  Career Coaching
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-textDefault font-bold text-base mb-4">Services</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="https://docs.google.com/forms/d/1OsZ5mkU3BAB0Cfv_BmcrlCjU7ZUGKm22GSWtSRT7px4/viewform?ref=dishapages&edit_requested=true"
                  className="text-textNeutral hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                  CV Revamp
                </Link>
              </li>
              <li>
                <span className="text-textNeutral text-sm flex items-center gap-2">
                  <span className="w-0 h-0.5 bg-primary"></span>
                  Job Placement
                </span>
              </li>
              <li>
                <span className="text-textNeutral text-sm flex items-center gap-2">
                  <span className="w-0 h-0.5 bg-primary"></span>
                  Skill Training
                </span>
              </li>
              <li>
                <span className="text-textNeutral text-sm flex items-center gap-2">
                  <span className="w-0 h-0.5 bg-primary"></span>
                  Community Support
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-textDefault font-bold text-base mb-4">Contact Us</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-textNeutral text-sm">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:JapatechGlobal@gmail.com" className="hover:text-primary transition-colors">
                  JapatechGlobal@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-textNeutral text-sm">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+2348128206869" className="hover:text-primary transition-colors">
                  +234 812 820 6869
                </a>
              </li>
              <li className="flex items-start gap-2 text-textNeutral text-sm">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 tablet:px-[64px] px-[15px] py-6">
        <div className="flex flex-col tablet:flex-row justify-between items-center gap-4 text-sm text-textNeutral">
          <p>© {new Date().getFullYear()} JAPA. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
