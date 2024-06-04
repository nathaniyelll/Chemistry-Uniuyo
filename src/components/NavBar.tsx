"use client";

// import React from 'react';
import { VscMenu, VscClose } from "react-icons/vsc";
import { IoLibrary } from "react-icons/io5";
import { GiArchiveResearch } from "react-icons/gi";
import { MdOutlineGroups3 } from "react-icons/md";
import { PiGraduationCapFill, PiInfoFill } from "react-icons/pi";

import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/logo.jpg";

import { useGlobalContext } from "@/context";
import HoverButton from "./NavBar/HoverButton";
import { programmesArray, staffArray } from "@/lib";
import NavLink from "./NavBar/NavLink";
import { BsHouseFill } from "react-icons/bs";

export default function NavBar() {
  const { isMenuClicked, isScrolled, setIsMenuClicked } = useGlobalContext();

  const toggleMenu = () => {
    setIsMenuClicked((prev) => !prev);
  };

  // const scrolling = () => window.scrollY > 70 ? setIsScrolled(true) : setIsScrolled(false);

  // React.useEffect(() => {
  // 	window.onscroll = scrolling;

  // 	return () => {
  // 		window.removeEventListener('scroll', scrolling);
  // 	};
  // }, [])

  return (
    <nav
      className={`${
        true ? "fixed bg-white shadow" : "bg-white md:bg-transparent"
      } sticky top-0 left-0 text-blue-900 h-[70px] md:h-[75px] lg:h-[90px] w-full flex items-center justify-center z-50 transition-all duration-200`}
    >
      <header className="container p-4 md:px-2 lg:p-4 flex flex-col md:flex-row md:items-center md:justify-between w-full gap-4 md:gap-2 lg:gap-4">
        <div className="h-full w-full md:w-fit flex items-center justify-between md:justify-center">
          <div className="flex flex-shrink-0 gap-2 sm:gap-3 items-center md:gap-1 lg:gap-4">
            <Link onClick={() => setIsMenuClicked(false)} href="/" title="home">
              <Image
                src={logo}
                alt="logo"
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-full"
                priority
              />
            </Link>
            <span className="font-semibold lg:text-lg xl:text-xl">
              <h1>Chemistry</h1>
              <h1>University of Uyo</h1>
            </span>
          </div>

          <button
            className="opacity-70 hover:opacity-100 text-2xl md:hidden"
            onClick={toggleMenu}
          >
            {isMenuClicked ? <VscClose /> : <VscMenu />}
          </button>
        </div>

        <aside
          className={`${
            !isMenuClicked
              ? "left-full md:left-0 -z-10 opacity-10 md:opacity-100 md:z-50"
              : "left-0 md:top-0 opacity-100"
          } bg-white md:bg-transparent fixed md:relative top-[70px] md:top-0 flex flex-col md:items-center md:flex-row p-4 sm:p-6 gap-2 md:gap-6 lg:gap-8 w-full md:w-fit md:h-full md:text-[.9rem] lg:text-[.96rem] capitalize transition-all duration-500 md:transition-none`}
        >
          <NavLink href="/about">
            <PiInfoFill /> <span>about</span>
          </NavLink>

          <HoverButton
            heading="programmes"
            icon1={<PiGraduationCapFill />}
            linksArray={programmesArray}
          />

          <HoverButton
            heading="staff"
            icon1={<MdOutlineGroups3 />}
            linksArray={staffArray}
          />

          <NavLink href="/research">
            <GiArchiveResearch />
            <span>research</span>
          </NavLink>

          <NavLink href="/resources">
            <IoLibrary />
            <span>resources</span>
          </NavLink>
        </aside>
      </header>
    </nav>
  );
}
