"use client";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import Button from "../component/button";
import Heading from "../component/heading";
import { useRouter } from "next/navigation";
import { useJapaStore } from "@/app/store/store";

const SignUp = () => {
  const {
    register,
    reset,

    handleSubmit,
    control,
    getValues,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const signUpUser = useJapaStore((state) => state.register);
  const route = useRouter();

  const onSubmit = async () => {
    const data = {
      first_name: getValues("fName"),
      last_name: getValues("lName"),
      phone_number: getValues("PhoneNumber"),
      email: getValues("email"),
      pass_word: getValues("password"),
    };

    console.log(data);

    try {
      await signUpUser(data);
      console.log(data);
      route.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="flex justify-center py-10 px-[15px]">
      <div className="flex flex-col gap-2 max-w-[390px] w-full">
        <Heading title="Create an account to track your job applications" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 mt-2"
        >
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="fName"
              className="text-textDefault text-base font-[500]"
            >
              First Name
            </label>
            <input
              type="text"
              name="fName"
              placeholder="Enter your first name"
              {...register("fName", {
                required: "Enter your first name",
              })}
              className="border-[1.5px] border-textDefault h-[52px] pl-2 rounded-lg text-[15px]"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="LName"
              className="text-textDefault text-base font-[500]"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lName"
              placeholder="Enter your last name"
              {...register("lName", {
                required: "Enter your last name",
              })}
              className="border-[1.5px] border-textDefault h-[52px] pl-2 rounded-lg text-[15px]"
            />
          </div>
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
          <div className="flex flex-col gap-[6px]">
            <label>Phone Number</label>
            <Controller
              name="phoneNumber"
              control={control}
              rules={{ required: "Phone number is required" }}
              render={({ field }) => (
                <PhoneInput
                  country="ng"
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder="Enter phone number"
                  enableSearch={true}
                  disableDropdown={false}
                  inputStyle={{ width: "100%", height: "50px" }}
                />
              )}
            />
            {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
          </div>
          <div className="flex flex-col gap-[6px] relative">
            <label
              htmlFor="password"
              className="text-textDefault text-base font-[500]"
            >
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Please enter your password",
                  pattern: {
                    value:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                    message:
                      "Password must be at least 8 characters long, include uppercase and lowercase letters, a number, and a special character",
                  },
                })}
                className="border-[1.5px] border-textDefault h-[52px] pl-2 pr-10 rounded-lg text-[15px] w-full"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {errors.password && (
              <span className="text-[12.5px] opacity-50">
                Your password should be at least 8 characters long, include
                uppercase and lowercase letters, a number, and a special
                character.
              </span>
            )}
          </div>
          <Button text="Create Account" isSubmitting={isSubmitting} />
        </form>
        <div className="text-textNeutral flex flex-col items-center justify-center py-6">
          By signing up, you agree to our{" "}
          <Link href={"/"} className="text-textDefault font-medium">
            Terms of Service & Privacy Policy
          </Link>
        </div>
        <div className="mx-auto flex items-center gap-1">
          <span className="text-textDefault">Already have an account?</span>
          <Link
            className="text-primary font-semibold border-b-[1px] border-b-primary"
            href="/login"
          >
            Log In
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
