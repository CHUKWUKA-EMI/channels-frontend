import React, { FunctionComponent, useEffect } from "react";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

const Layout: FunctionComponent = ({ children }) => {
  const router = useRouter();

  return (
    <div
      className={`min-h-screen pt-[7rem] md:pt-[6rem] lg:pt-[6rem] overflow-x-hidden ${
        router.pathname === "/signup" || router.pathname === "/login"
          ? "bg-gradient-to-r from-slate-900 via-sky-900 to-slate-900"
          : ""
      }`}
    >
      <div className={`relative w-full z-40`}>
        <Navbar />
      </div>
      <main
        className={`w-full h-screen z-30 px-8 ${
          router.pathname === "/login" ? "pt-[5%]" : ""
        }`}
      >
        {children}
      </main>
      <footer
        className={`text-white ${
          router.pathname === "/signup" || router.pathname === "/login"
            ? "hidden"
            : "flex w-full items-center justify-center bg-slate-900 h-14"
        }`}
      >
        &copy; Channels {new Date().getFullYear()}. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
