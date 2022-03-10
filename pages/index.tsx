import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { SearchModal } from "../components/SearchModal";

const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="dark w-screen relative min-h-screen overflow-x-hidden">
      <Head>
        <title>Channels - A platform to write and share ideas. </title>
        <meta
          name="description"
          content="A platform to write and share ideas"
        />
      </Head>
      <div className="relative w-full">
        <Navbar />
      </div>
      <header className="flex justify-center bg-gradient-to-r pt-40 md:pt-60 from-slate-900 via-sky-900 to-slate-900 min h-screen">
        <div className="relative mx-auto w-2/3 max-w-5xl">
          <h1 className="font-extrabold text-4xl sm:text-5xl text-center lg:text-6xl tracking-normal text-white">
            Channels is a platform to write and share ideas.
          </h1>
          <p className="font-medium text-2xl mt-6 text-center text-slate-600 dark:text-slate-400">
            You can write and read for free...
          </p>
          <div className="flex items-center justify-center space-x-8 mx-auto mt-12 mb-4">
            <button className="flex items-center justify-center outline-none bg-sky-500 w-32 h-12 hover:bg-sky-700 shadow-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-125 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-slate-400 focus:ring-offset-slate-50 rounded-lg text-white font-bold p-4">
              <span>Get started</span>
            </button>

            <button
              onClick={() => setOpenModal(true)}
              className="hidden md:flex shadow-xl w-72 h-12 items-center outline-none rounded-lg p-2 bg-slate-600 hover:bg-slate-500 font-semibold text-white focus:outline-none"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span>Search</span>
            </button>
          </div>
        </div>
        <SearchModal setIsOpen={setOpenModal} isOpen={openModal} />
      </header>
    </div>
  );
};

export default Home;
