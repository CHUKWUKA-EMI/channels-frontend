import { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect, useState } from "react";
import { navLinks } from "../routes/routes";
import SideDrawer from "./SideDrawer";
import UserDropDown from "./UserDropDown";
import Logo from "../public/channels_logo.png";

// interface NavbarProps {
//   isMenuOpen: boolean;
//   setIsMenuOpen: (isMenuOpen: React.SetStateAction<boolean>) => void;
// }

const Navbar: FunctionComponent = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div
      className={`flex w-full fixed top-0 right-0 left-0 z-40 items-center ${
        router.pathname === "/post/write" ? "shadow-md bg-white" : ""
      }`}
    >
      <div className="flex w-full items-center justify-between py-4 px-8">
        <div className="flex items-center justify-start lg:ml-28">
          <Link href="/">
            <a
              className={`font-semibold text-4xl flex text-white italic p-2 ${
                router.pathname === "/post/write" ? "text-cyan-900" : ""
              }`}
            >
              <div className="w-[8rem] h-[4rem] relative">
                <Image
                  src="/channels_logo.png"
                  alt="logo"
                  loading="lazy"
                  layout="fill"
                />
              </div>
              {/* <span className="text-xs">CHANNELS</span> */}
            </a>
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="flex flex-auto items-center space-x-8 justify-end lg:mr-28">
            {navLinks.map((link, i) => (
              <Link key={i} href={link.href} passHref>
                <a
                  className={`text-white ${
                    link.title === "Join us"
                      ? router.pathname === "/post/write"
                        ? "text-white"
                        : "text-white bg-cyan-900 rounded-full flex py-2 px-4"
                      : ""
                  } ${
                    link.href !== "/signup" ? "hover:text-sky-400" : ""
                  } text-lg font-medium ${
                    router.pathname === link.href ? "text-sky-400" : ""
                  } ${
                    router.pathname === "/post/write" &&
                    router.pathname !== link.href
                      ? "text-cyan-900"
                      : ""
                  }`}
                >
                  {link.title}
                </a>
              </Link>
            ))}
            <div
              onClick={() => setOpenDropdown(!openDropdown)}
              className={`rounded-full border-[1px] h-10 w-10 bg-white cursor-pointer ${
                router.pathname === "/post/write" ? "border-cyan-900" : ""
              }`}
            ></div>
            <UserDropDown isOpen={openDropdown} />
          </div>
        </div>
        <div className="flex items-center justify-center md:hidden">
          <button
            onClick={() => {
              setIsMenuOpen(true);
            }}
            className="inline-flex items-center justify-center outline-none bg-slate-900 text-white text-base rounded-md"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            {!isMenuOpen ? (
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="block h-10 w-10"
                viewBox="0 -4 38 48"
              >
                <path strokeLinecap="round" d="M5 10 l25 0" />
                <path strokeLinecap="round" d="M5 20 l25 0" />
                <path strokeLinecap="round" d="M5 30 l25 0" />
              </svg>
            ) : (
              ""
            )}
          </button>
        </div>
      </div>
      {/* <aside className=""> */}
      {/* {isMenuOpen && ( */}
      <SideDrawer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* )} */}
      {/* </aside> */}
    </div>
  );
};

export default Navbar;
