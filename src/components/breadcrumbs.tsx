import React from "react";
import NavLink from "./NavBar/NavLink";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/16/solid";

type Crumbs = { title: string; href: string };

type BreadcrumbsProps = { root?: Crumbs; array: Crumbs[] };

export default function Breadcrumbs({ root, array }: BreadcrumbsProps) {
  return (
    <div className="w-full flex items-center gap-x-[1px] px-4 my-2 overflow-x-hidden container mx-auto">
      <Link
        className="text-primary hover:text-secondary transition-colors duration-300 px-[1px] cursor-pointer"
        href={root ? root.href : "/"}
      >
        {root ? root.title : <HomeIcon className="size-5" />}
      </Link>
      <span className="text-gray-400 mx-1">{"/"}</span>
      {array.map((a, i) => (
        <NavLink
          key={i}
          className="text-primary px-0 flex gap-1 cursor-pointer text-ellipsis"
          href={a.href}
        >
          {a.title}
        </NavLink>
      ))}
    </div>
  );
}
