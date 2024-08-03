"use client"
import Link from 'next/link';
import React from 'react'
import { useForm } from 'react-hook-form';
import Button from '../component/button';
import Heading from '../component/heading';

const Login = () => {
    const {register, reset, handleSubmit, getValues, formState: {isSubmitting, isSubmitted}} = useForm();

    const onSubmit = async () => {
      const data = {
        email: getValues("email"),
        password: getValues("password"),
      };

      console.log(data)

    //   try {
    //     await loginUser(data);
    //     console.log(data);
    //     route.push("/verifyAccount");
    //   } catch (error) {
    //     console.log(error);
    //   }
    };
  return (
    <section className="flex justify-center py-10">
      <div className="flex flex-col gap-8 max-w-[390px] w-full">
        <Heading
          title="Log In"
          text="Are you ready to take the next step towards a succesful future?"
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 mt-2"
        >
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="email"
              className="text-textDefault text-sm font-[500]"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="myemail@gmail.com"
              {...register("email", {
                required: "Please enter an email address",
              })}
              className="border-[1.5px] border-gray-300 h-[40px] pl-2 rounded-lg text-[15px]"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="password"
              className="text-textDefault text-sm font-[500]"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="*************"
              {...register("password", {
                required: "Please enter your password",
              })}
              className="border-[1.5px] border-gray-300 h-[40px] pl-2 rounded-lg text-[15px]"
            />
            <Link href="/">
              <span className="text-primary text-[13px] font-[500] flex items-end justify-end">
                Forgot Password?
              </span>
            </Link>
          </div>
          <Button text="Log in" isSubmitting={isSubmitting} />
        </form>
        <div className="mt-1">
          <p className="text-center text-base">
            <span className="text-textDefault">Don&#39;t have an account?</span>
            &nbsp;
            <span>
              <Link
                className="text-primary font-semibold border-b-[1px] border-b-primary"
                href="/signup"
              >
                Sign up
              </Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login