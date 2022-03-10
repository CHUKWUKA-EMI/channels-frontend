import Link from "next/link";
import React, { FunctionComponent } from "react";
import { navLinks } from "../routes/routes";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: React.SetStateAction<boolean>) => void;
}

const SideDrawer: FunctionComponent<NavbarProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}: NavbarProps) => {
  return (
    <aside
      className={`flex flex-col md:hidden bg-gray-900 items-center space-y-6 py-3 px-3 z-50 h-screen absolute inset-y-0 w-3/5 sm:w-2/4 transform ${
        isMenuOpen ? "-translate-x-0" : "-translate-x-full"
      } transition duration-200 ease-in-out`}
    >
      <div className="flex w-full items-center justify-end mb-3">
        <button
          onClick={() => setIsMenuOpen(false)}
          className="inline-flex self-end items-center justify-center bg-slate-900 text-white text-base rounded-md"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="block h-10 w-10"
            viewBox="0 -4 38 48"
          >
            <line x1="10" y1="10" x2="30" y2="30" />
            <line x1="10" y1="30" x2="30" y2="10" />
          </svg>
        </button>
      </div>
      <div className="rounded-full h-40 w-40 flex items-center justify-center bg-slate-700 border-solid">
        Me
      </div>
      <div className="border-b-2 border-slate-400 w-full"></div>
      <div className="flex flex-col space-y-8 mx-auto py-2 mt-16 h-48 w-[70%]">
        {navLinks.map((link, i) => (
          <Link key={i} href={link.href} passHref>
            <button className="text-white font-semibold bg-sky-700 w-full h-9 rounded-md">
              {link.title}
            </button>
          </Link>
        ))}
      </div>
      <div className="border-b-2 border-slate-400 w-full"></div>
      <div className="w-[70%]">
        <div className="flex bg-white h-14 w-full mx-auto rounded-full items-center justify-between p-2">
          <div className="h-12 w-12 rounded-full border-2 p-1 flex items-center justify-center border-slate-800 bg-white">
            avatar
          </div>
          <strong className="text-slate-700 w-full text-center font-semibold">
            user
          </strong>
          <button className="text-sky-700 font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SideDrawer;
