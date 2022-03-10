import Link from "next/link";
import React, { useState } from "react";
import { login } from "../services/network";
import Toast, { Status } from "./Toast";
import { useRouter } from "next/router";
import { AUTH_KEY, USER_KEY } from "../constants/localStorage-constants";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openToast, setOpenToast] = useState(false);
  const [requestStatus, setRequestStatus] = useState<Status>(Status.SUCCESS);
  const [message, setMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handeLogin = async () => {
    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }
    setIsProcessing(true);
    try {
      const response = await login(email, password);
      console.log("response in login", response);
      if (response.status === 200 || response.status === 201) {
        setIsProcessing(false);
        //save auth data in local storage
        localStorage.setItem(USER_KEY, JSON.stringify(response.data.user));
        localStorage.setItem(AUTH_KEY, response.data.access_token);
        const previousRoute = router.query.ret as string;
        if (previousRoute) {
          router.push(previousRoute);
        } else {
          router.push("/");
        }
      } else {
        setRequestStatus(Status.ERROR);
        setMessage(response.error);
        setOpenToast(true);
        setIsProcessing(false);
      }
    } catch (error: any) {
      setIsProcessing(false);
      setRequestStatus(Status.ERROR);
      setMessage(error.message);
      setOpenToast(true);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handeLogin();
        }}
        className="w-[90%] lg:w-[50%] md:w-[60%] mx-auto h-fit py-[3%] -z-20 shadow-lg shadow-slate-900 flex flex-col items-center justify-center px-[10%] bg-white mb-[5rem]"
      >
        <p className="text-center text-slate-700 font-semibold text-4xl mb-10">
          Login
        </p>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="w-full flex flex-col">
          <button
            disabled={email === "" || password === "" || isProcessing}
            type="submit"
            className={`w-full flex items-center justify-center h-10 ${
              email === "" || password === ""
                ? "bg-gray-300"
                : "bg-sky-600 hover:bg-sky-700"
            } text-white capitalize font-bold rounded-xl hover:-translate-y-1 hover:scale-100 transition ease-in-out duration-200 delay-200`}
          >
            {isProcessing ? "Processing..." : "LOGIN"}
          </button>
          <label className="font-medium text-slate-500 mt-1">
            Don&apos;t have an account yet?{" "}
            <Link href="/signup">
              <a className="text-sky-500 hover:underline hover:font-medium">
                Sign up
              </a>
            </Link>
          </label>
        </div>
      </form>
      <Toast
        open={openToast}
        setOpen={setOpenToast}
        status={requestStatus}
        message={message}
        setMessage={setMessage}
        offsetLeft={20}
        offsetTop={550}
      />
    </>
  );
};

export default Login;
