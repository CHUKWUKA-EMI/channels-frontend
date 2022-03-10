import Link from "next/link";
import React, { FunctionComponent } from "react";

const SignUp: FunctionComponent = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="w-[90%] lg:w-[50%] md:w-[60%] mx-auto h-fit py-[3%] -z-20 shadow-lg shadow-slate-900 flex flex-col items-center justify-center px-[10%] bg-white mb-[5rem]"
    >
      <p className="text-center text-slate-700 font-semibold text-4xl mb-10">
        Sign up
      </p>
      <div className="w-full mb-4 flex flex-col">
        <label
          className='after:content-["*"] after:text-red-500 after:font-bold after:ml-[0.5] font-bold text-slate-700'
          htmlFor="firstName"
        >
          first name
        </label>
        <input
          className="w-full h-10 p-2 rounded-md bg-white outline-none border-[1px] focus:border-[3px] border-sky-600 font-semibold text-black"
          id="firstName"
          type="text"
          placeholder=""
        />
      </div>
      <div className="w-full mb-4 flex flex-col">
        <label
          className='after:content-["*"] after:text-red-500 after:font-bold after:ml-[0.5] font-bold text-slate-700'
          htmlFor="lastName"
        >
          last name
        </label>
        <input
          className="w-full h-10 p-2 rounded-md focus:border-[3px] bg-white outline-none border-[1px] border-sky-600 font-semibold text-black"
          id="lastName"
          type="text"
          placeholder=""
        />
      </div>
      <div className="w-full mb-4 flex flex-col">
        <label
          className='after:content-["*"] after:text-red-500 after:font-bold after:ml-[0.5] font-bold text-slate-700'
          htmlFor="userName"
        >
          username
        </label>
        <input
          className="w-full h-10 p-2 rounded-md focus:border-[3px] bg-white outline-none border-[1px] border-sky-600 font-semibold text-black"
          id="userName"
          type="text"
          placeholder=""
        />
      </div>
      <div className="w-full mb-4 flex flex-col">
        <label
          className='after:content-["*"] after:text-red-500 after:font-bold after:ml-[0.5] font-bold text-slate-700'
          htmlFor="email"
        >
          email
        </label>
        <input
          className="w-full h-10 p-2 rounded-md focus:border-[3px] bg-white outline-none border-[1px] border-sky-600 font-semibold text-black"
          id="email"
          type="email"
          placeholder=""
        />
      </div>
      <div className="w-full mb-4 flex flex-col">
        <label
          className='after:content-["*"] after:text-red-500 after:font-bold after:ml-[0.5] font-bold text-slate-700'
          htmlFor="password"
        >
          password
        </label>
        <input
          className="w-full h-10 p-2 rounded-md focus:border-[3px] bg-white outline-none border-[1px] border-sky-600 font-semibold text-black"
          id="password"
          type="password"
          placeholder=""
        />
      </div>
      <div className="w-full flex flex-col">
        <button
          type="submit"
          className="w-full h-10 bg-sky-600 text-white font-extrabold rounded-xl hover:bg-sky-700 hover:-translate-y-1 hover:scale-100 transition ease-in-out duration-200 delay-200"
        >
          Submit
        </button>
        <label className="font-medium text-slate-500 mt-1">
          Already have an account?{" "}
          <Link href="/login">
            <a className="text-sky-500 hover:underline hover:font-medium">
              Login
            </a>
          </Link>
        </label>
      </div>
    </form>
  );
};

export default SignUp;
