import React, { FunctionComponent } from "react";

export enum Status {
  ERROR = "error",
  SUCCESS = "success",
}

export interface ToastProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  offsetTop: number;
  offsetLeft: number;
  status: Status;
  message: string;
  setMessage: (message: string) => void;
}
const Toast: FunctionComponent<ToastProps> = ({
  open,
  setOpen,
  offsetLeft,
  offsetTop,
  status,
  message,
  setMessage,
}) => {
  return (
    <div
      style={{ top: offsetTop, left: offsetLeft }}
      className={`${
        open
          ? "flex items-center justify-between absolute space-x-1 transition ease-in-out duration-500 delay-300 rounded-2xl shadow-md shadow-slate-800 p-2"
          : "hidden"
      } ${
        status === Status.SUCCESS
          ? "text-white bg-green-700"
          : "text-white bg-red-700"
      }`}
    >
      <div className={`w-[10%] h-full font-bold text-white`}>
        {status === Status.SUCCESS && (
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
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
        {status === Status.ERROR && (
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
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
      </div>
      <div className={`h-full text-left bg-inherit font-bold text-white`}>
        {message}
      </div>
      <div className={`h-full font-bold text-slate-900`}>
        <button
          onClick={() => {
            setOpen(false);
            setMessage("");
          }}
          className="h-9 w-9 flex items-center justify-center outline-none"
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;
