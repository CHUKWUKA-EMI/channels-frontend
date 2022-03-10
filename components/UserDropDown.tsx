import Link from "next/link";
import React, { FunctionComponent } from "react";

interface IProps {
  isOpen: boolean;
}

const UserDropDown: FunctionComponent<IProps> = ({ isOpen }: IProps) => {
  return (
    <div
      className={`${
        isOpen ? "md:flex" : "hidden"
      } flex-col bg-white shadow-lg shadow-slate-900 z-50 absolute top-[4.5rem] rounded-lg py-3`}
    >
      <Link href="/profile" passHref>
        <button className="flex flex-auto outline-none items-center mr-2 ml-2 w-[8rem] p-2 font-semibold bg-white hover:text-sky-500 text-slate-600">
          Profile
        </button>
      </Link>
      <Link href="/myPosts" passHref>
        <button className="flex flex-auto outline-none items-center mr-2 ml-2 w-[8rem] p-2 font-semibold bg-white hover:text-sky-500 text-slate-600">
          My posts
        </button>
      </Link>
      <Link href="/posts" passHref>
        <button className="flex flex-auto outline-none items-center mr-2 ml-2 w-[8rem] p-2 font-semibold bg-white hover:text-sky-500 text-slate-600">
          Posts
        </button>
      </Link>
      <div className="w-full bg-slate-600 h-[1.5px]"></div>
      <Link href="/settings" passHref>
        <button className="flex flex-auto outline-none items-center mr-2 ml-2 w-[8rem] p-2 font-semibold bg-white hover:text-sky-500 text-slate-600">
          Settings
        </button>
      </Link>
      <button className="flex flex-auto outline-none items-center mr-2 ml-2 w-[8rem] p-2 font-semibold bg-white hover:text-sky-500 text-slate-600">
        Logout
      </button>
    </div>
  );
};

export default UserDropDown;
