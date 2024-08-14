import { useJapaStore } from "@/app/store/store";
import { Box, Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseCard = ({ src, alt, title, text, path }) => {
  const loading = useJapaStore((state) => state.loading);
  return (
    <Box>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={392}
          height={392}
          className="rounded-2xl"
        />
      ) : (
        <Link href={path}>
          <div className="flex flex-col p-3 h-full rounded-2xl text-textDefault w-[370px] bg-primaryLight">
            <div className="flex flex-col gap-2 h-full">
              <Image src={src} alt={alt} width={9999} height={9999} style={{height: "318px", width: "100%"}} />
              <span className="text-2xl font-bold">{title}</span>
              <p className="w-full">{text}</p>
            </div>
            <div className="border border-textDefault w-full px-5 py-1 rounded-[30px] mt-16 mb-3 bg-transparent font-light text-center">
              Learn more
            </div>
          </div>
        </Link>
      )}
    </Box>
  );
};

export default CourseCard;
