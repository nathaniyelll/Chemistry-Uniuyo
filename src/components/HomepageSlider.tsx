"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { RiArrowRightSLine } from "react-icons/ri";

type sliderProps = {
  bgImage?: any;
  title: string;
  description?: string;
  greeting?: string;
  btnLink?: string;
};

const HomepageSlider = ({
  bgImage,
  title,
  description,
  greeting,
  btnLink,
}: sliderProps) => {
  return (
    <div className={`relative aspect-h-5 aspect-w-3 md:aspect-h-2`}>
      <Image
        src={bgImage}
        alt={title}
        className="object-cover"
        style={{ height: "85%" }}
      />

      {title && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 h-fit bg-black opacity-65 mx-auto w-[95%] md:w-3/4 flex flex-col justify-center gap-4">
          <motion.h1
            animate={{ x: 0, opacity: 1 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              duration: 0.7,
            }}
            className="uppercase font-bold text-2xl md:text-4xl"
          >
            <span className="uppercase font-normal text-lg md:text-lg">
              {greeting} <br />
            </span>
            {title}
          </motion.h1>
          <motion.p
            animate={{ x: 0, opacity: 1 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              duration: 0.7,
            }}
          >
            {description}
          </motion.p>
          {btnLink && (
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 1.5,
                duration: 0.8,
              }}
            >
              <Link
                href={btnLink}
                className="flex justify-center items-center text-black bg-white hover:underline transition ease-in-out duration-150 text-lg text-center gap-1 py-2 w-1/2 md:w-1/4 rounded-lg shadow-md hover:scale-90"
              >
                Read more
                <RiArrowRightSLine className="text-2xl text-primary text-center mt-1" />
              </Link>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

export default HomepageSlider;
