"use client";
import { Grand_Hotel } from "next/font/google";
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/outline";
import NavItem from "@/components/Navigation/NavItem";
import { useState } from "react";
import clsx from "clsx";
import "./PageHeader.scss";

const grandHotel = Grand_Hotel({ weight: "400", subsets: ["latin"] });
const links = [
  {
    name: "Home",
    url: "#home",
  },
  {
    name: "About",
    url: "#about",
  },
  {
    name: "Work History",
    url: "#work-history",
  },
  {
    name: "Qualification",
    url: "#qualification",
  },
  {
    name: "Testimonials",
    url: "#testimonials",
  },
];

export default function PageHeader() {
  const [isClick, setIsClick] = useState(false);
  const toogleNavBar = () => {
    setIsClick(!isClick);
  };
  const navMenuLinks = () =>
    links.map((link, index) => {
      return (
        <NavItem key={index} url={link.url}>
          {link.name}
        </NavItem>
      );
    });
  return (
    <header>
      <div className="flex justify-between mx-5 items-center border-b-2 border-b-gray-300">
        <div className={`${grandHotel.className} antialiased pt-1`}>
          <span className="text-2xl md:text-5xl">
            Noor <span className="">Mahdi</span>
          </span>
        </div>
        <nav className="hidden lg:inline-block">
          <ul className="min-w-[600px] flex justify-between">
            {navMenuLinks()}
          </ul>
        </nav>
        <div className="lg:hidden flex items-center relative w-9 ml-2">
          <button
            id="btnBurger"
            className={clsx("inline-flex items-center justify-cente", {
              "nav-open": isClick,
            })}
            onClick={toogleNavBar}
          ></button>
        </div>
      </div>
      {isClick && (
        <div className="lg:hidden flex flex-col justify-center border-b-2 mb-5">
          {navMenuLinks()}
        </div>
      )}
    </header>
  );
}
