"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { motion as m } from "framer-motion";
import { d } from "@/lib";
import { IoCloseCircle } from "react-icons/io5";
import { Button } from ".";
import {
  BookOpenIcon,
  CalendarDaysIcon,
  ClipboardIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

type CardProps = {
  type?: string;
  isResearchPage?: boolean;
  title: string;
  unit: string;
  author: string;
  published_at: string;
  desc: string;
  href?: string;
};

export default function Card({
  type,
  isResearchPage = true,
  title,
  unit,
  author,
  published_at,
  desc,
  href,
}: CardProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [copied, setCopied] = React.useState("copy");

  const currentPage = searchParams.get("currentPage") ?? 1;

  const q_author = searchParams.get("author");
  const q_desc = searchParams.get("desc");
  const q_published = searchParams.get("published");
  const q_title = searchParams.get("title");
  const filterValue = searchParams.get("filterby");
  const isOpen = searchParams.get("isOpen");

  const copyText = `${q_author}. (${q_published}). ${q_title}. ${q_desc}.`;

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(copyText);
      setCopied("copied!");
    } catch (error) {
      console.error(error);
      setCopied("not copied");
    }

    setTimeout(() => setCopied("copy"), 5000);
  };

  const handleButtonClick = (a: string, d: string, p: string, t: string) => {
    searchParams.has("filterby")
      ? router.push(
          `?filterby=${filterValue}&isOpen=true&author=${a.split(" ")[1]} ${a
            .split(" ")[2]
            .slice(-a.length, 1)}&desc=${d.substring(0, 50).trim()}&published=${
            p.split("-")[2]
          }&title=${t}&currentPage=${currentPage}`
        )
      : router.push(
          `?isOpen=true&author=${a.split(" ")[1]} ${a
            .split(" ")[2]
            .slice(-a.length, 1)}&desc=${d.substring(0, 50).trim()}&published=${
            p.split("-")[2]
          }&title=${t}&currentPage=${currentPage}`
        );
  };

  return (
    <div className="overflow-hidden w-full">
      <m.div
        initial={d.initial}
        animate={!isResearchPage ? d.whileInView : undefined}
        whileInView={isResearchPage ? d.whileInView : undefined}
        transition={d.transition}
        viewport={{ once: false }}
        className={clsx("border border-gray-100 rounded hover:shadow from-2%")}
      >
        <aside className="flex flex-col min-h-[400px] justify-around gap-3 p-2 xs:p-4 py-4 xs:py-6">
          <div className="flex gap-3 justify-between">
            <h1
              className={clsx("text-lg capitalize", {
                "text-primary": unit === "environmental",
                "text-red-600": unit === "physical",
                "text-green-600": unit === "organic",
                "text-secondary": unit === "inorganic",
                "text-gray-800": unit === "analytical",
              })}
            >
              {title}
            </h1>

            {unit && (
              <span
                className={clsx(
                  "text-[.625rem] border rounded-2xl px-[12px] p-[6px] capitalize h-fit",
                  {
                    "border-blue-200 text-primary": unit === "environmental",
                    "border-red-300 text-red-600": unit === "physical",
                    "border-green-300 text-green-600": unit === "organic",
                    "border-orange-300 text-secondary": unit === "inorganic",
                    "border-gray-300 text-gray-800": unit === "analytical",
                  }
                )}
              >
                {unit}
              </span>
            )}
          </div>

          <div className="flex gap-4 my-2">
            <PubInfo text={author} Icon={UserCircleIcon} />
            <PubInfo text={published_at} Icon={CalendarDaysIcon} />
          </div>

          <p className="text-base line-clamp-5">{desc}</p>

          <div className="flex flex-wrap items-center gap-3 gap-x-4 mt-3">
            {isResearchPage && (
              <Button
                onClick={() =>
                  handleButtonClick(author, desc, published_at, title)
                }
                className="border-primary text-primary hover:bg-blue-50 p-2 px-4"
              >
                Citation
              </Button>
            )}

            <a
              href={href ?? ""}
              target="__blank"
              download
              className="bg-secondary hover:bg-orange-500 border-transparent  text-white p-2 px-6 text-sm active:scale-105 transition-all duration-300"
            >
              Download this
            </a>
          </div>
        </aside>
      </m.div>

      {title === q_title && (
        <div
          className={`${
            isOpen ? "opacity-100 scale-100 " : "opacity-0 scale-0"
          } fixed top-0 left-0 w-screen h-screen z-[9999] bg-gray-100 bg-opacity-70 flex items-center justify-center`}
        >
          <div
            className={`${
              isOpen ? "scale-100" : "scale-0"
            } relative w-[96%] max-w-[600px] min-h-[200px] p-3 py-8 bg-white border border-blue-300 rounded-md flex flex-col items-center justify-center gap-6 transition-all duration-300`}
          >
            <button
              onClick={() => router.push(`?`, { scroll: false })}
              title="close"
              className="absolute top-3 right-3 text-2xl text-red-800"
            >
              <IoCloseCircle />
            </button>

            <h1 className="uppercase font-bold text-xl sm:text-2xl md:text-3xl text-center">
              {type} apa citation
            </h1>
            <p>
              <span className="capitalize">{q_author}</span>. ({q_published}).{" "}
              <span>{q_title}.</span>&nbsp;
              <span className="italic capitalize">{q_desc}.</span>&nbsp;
              <span className="text-xs">
                (check page No. when you open this {type})
              </span>
            </p>
            <Button
              onClick={() => handleCopy()}
              className="self-end border-primary hover:bg-blue-100 bg-opacity-20 gap-2 pl-3 pr-3"
            >
              <span className="text-xs">{copied}</span>
              <ClipboardIcon className="h-4 text-primary" />
            </Button>
          </div>

          <BookOpenIcon className="h-16 animate-[bounceRotate_15s_alternate_infinite] opacity-60 absolute bottom-16 left-1/3" />
        </div>
      )}
    </div>
  );
}

const PubInfo = ({ text, Icon }: { text: string; Icon: React.ElementType }) => (
  <div className="text-xs flex items-center gap-1">
    <Icon className="h-4 text-slate-400" />
    <span className="capitalize text-black">{text}</span>
  </div>
);
