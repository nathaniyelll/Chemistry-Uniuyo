"use client";

import clsx from "clsx";
import React from "react";

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { motion as m } from "framer-motion";
import Link from "next/link";

export const Main = ({ children }: { children?: React.ReactNode }) => (
  <main className="flex min-h-[80vh] flex-col items-center gap-5 w-full mt-20 lg:mt-24">
    {children}
  </main>
);

export const Section = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <section
    className={clsx(
      "container w-full flex flex-col items-center gap-5 p-4 overflow-hidden",
      className
    )}
  >
    {children}
  </section>
);

export const Div = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <section className={clsx("w-full flex gap-3 p-2 py-3 rounded-md", className)}>
    {children}
  </section>
);

interface ButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "transparent";
  className?: string;
  arrow?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Button = ({
  children,
  variant,
  className,
  arrow,
  onClick,
}: ButtonProps) => {
  return (
    <m.button
      whileTap={{ scale: 0.8 }}
      onClick={onClick}
      className={`px-6 py-2 flex group justify-center items-center min-w-10 min-h-8 transition-all ease-in-out duration-200 text-center text-base xs:text-sm ${className} bg-${variant} border hover:shadow`}
    >
      {children}{" "}
      {arrow && (
        <MdOutlineKeyboardDoubleArrowRight className="text-2xl xs:text-xl opacity-0 translate-x-[500%] transition-all ease-linear duration-200 group-hover:translate-x-[20%] group-hover:opacity-100 lg:mt-1 text-secondary" />
      )}
    </m.button>
  );
};

interface RouteLinkBtnProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "transparent";
  className?: string;
  arrow?: boolean;
  href: string;
}
export const RouteLinkBtn = ({
  children,
  variant,
  className,
  arrow,
  href,
}: RouteLinkBtnProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        `px-6 py-2 flex group justify-center items-center min-w-10 min-h-8 transition-all ease-in-out duration-200 text-center text-lg md:text-base bg-${variant} border hover:shadow`,
        className
      )}
    >
      {children}{" "}
      {arrow && (
        <MdOutlineKeyboardDoubleArrowRight className="text-2xl xs:text-xl opacity-0 translate-x-[500%] transition-all ease-linear duration-200 group-hover:translate-x-[20%] group-hover:opacity-100 text-secondary" />
      )}
    </Link>
  );
};
