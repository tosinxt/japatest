"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../component/button";
import Heading from "../component/heading";
import { useRouter } from "next/navigation";
import { useJapaStore } from "@/app/store/store";
import Image from "next/image";

const Login = () => {
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    formState: { isSubmitting, isSubmitted },
  } = useForm();

  const loginUser = useJapaStore((state) => state.login);
  const route = useRouter();
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  const onSubmit = async (data) => {
    const success = await loginUser(data);
    if (success) {
      route.push("/jobs");
    }
  };

  return (
    <section className="flex justify-center py-10 px-[15px]">
      <div className="flex flex-col gap-2 max-w-[390px] w-full">
        <Heading title="Log in to track your job applications" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 mt-2"
        >
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="email"
              className="text-textDefault text-base font-[500]"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              {...register("email", {
                required: "Please enter an email address",
              })}
              className="border-[1.5px] border-textDefault h-[52px] pl-2 rounded-lg text-[15px]"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className="text-textDefault text-base font-[500]"
              >
                Password
              </label>
              <div className="border-[1.5px] border-textDefault h-[52px] px-2 rounded-lg text-[15px] flex">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Please enter your password",
                  })}
                  className="h-full focus:outline-none w-full"
                />
                <Image src={show? "/eye-closed.svg" : "/eye.svg"} alt="view password" height={9999} width={9999} style={{width: "28px"}} onClick={handleShow} className="w-fit"/>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-sm">
                <input
                  type="radio"
                  name="remember"
                  className="accent-primary"
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link href="/resetEmail">
                <span className="text-primary text-sm font-[500] flex items-end justify-end underline">
                  Forgot Password?
                </span>
              </Link>
            </div>
          </div>
          <Button text="Log in" isSubmitting={isSubmitting} />
        </form>
        <div className="mt-4 mx-auto">
          <Link
            className="text-primary font-semibold border-b-[1px] border-b-primary"
            href="/signup"
          >
            Create an account
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
