/* eslint-disable react/display-name */
"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

const withAuth = (WrappedComponent) => {
  return (props) => {

    const signedIn = useJapaStore((state) => state.signedIn);
    const router = useRouter()

    useEffect(() => {
      if (!signedIn) {
        toast.warning("Please login to access page");
        router.push("/login");
      }
    }, [signedIn, router]);

    return signedIn ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
