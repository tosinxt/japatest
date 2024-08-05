"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "../component/button";
import Heading from "../component/heading";
import { useRouter } from "next/navigation";
import { useStore } from "@/app/store/store";

const Login = () => {
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    formState: { isSubmitting, isSubmitted },
  } = useForm();

  const loginUser = useStore((state) => state.login)
  const route = useRouter()

  const onSubmit = async () => {
    const data = {
      email: getValues("email"),
      password: getValues("password"),
    };

    console.log(data);

      try {
        await loginUser(data);
        console.log(data);
        route.push("/");
      } catch (error) {
        console.log(error);
      }
  };
  return (
    <section className="flex justify-center py-10">
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
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Please enter your password",
                })}
                className="border-[1.5px] border-textDefault h-[52px] pl-2 rounded-lg text-[15px]"
              />
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
          <Button
            text="Log in"
            isSubmitting={isSubmitting}
          />
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
