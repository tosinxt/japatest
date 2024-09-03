import { useJapaStore } from "@/app/store/store";
import { Box, Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";

const CourseCard = ({ src, alt, title, text, path }) => {
  const loading = useJapaStore((state) => state.loading);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <Box>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={392}
          height={500}
          className="rounded-2xl"
        />
      ) : (
        <Link href={path}>
          <div
            className="flex flex-col h-full p-3 rounded-2xl text-textDefault max-w-[370px] bg-primaryLight"
            data-aos="flip-left"
            data-aos-duration="1500"
          >
            <div className="flex flex-col gap-2 h-full flex-grow">
              <Image
                src={src}
                alt={alt}
                width={9999}
                height={9999}
                style={{ height: "auto", width: "100%" }}
              />
              <span className="text-xl tablet:text-2xl font-bold line-clamp-2 min-h-[60px]">
                {title}
              </span>
              <p className="w-full text-sm tablet:text-base line-clamp-3">
                {text}
              </p>
            </div>
            <div className="border border-textDefault w-full px-5 py-2 rounded-[30px] mt-8 bg-transparent font-medium text-center">
              Learn more
            </div>
          </div>
        </Link>
      )}
    </Box>
  );
};

export default CourseCard;
