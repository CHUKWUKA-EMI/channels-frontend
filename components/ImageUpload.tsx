import React, {
  ChangeEvent,
  ChangeEventHandler,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";
import Editor, { PluginEditorProps } from "@draft-js-plugins/editor";
import Image from "next/image";
import { useRouter } from "next/router";
import { AUTH_KEY, USER_KEY } from "../constants/localStorage-constants";
import { uploadImage } from "../services/network";
import Toast from "./Toast";
import { imagePlugin } from "../utils/plugins";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}
const ImageUpload: FunctionComponent<PluginEditorProps & Props> = ({
  editorState,
  onChange,
  open = false,
  setOpen,
}) => {
  const router = useRouter();
  const imgRef = useRef();
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isBrowser, setIsBrowser] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [spinIndex, setSpinIndex] = useState(0);

  useEffect(() => {
    const user = localStorage.getItem(USER_KEY);
    const authToken = localStorage.getItem(AUTH_KEY);
    if (user && authToken) {
      setAuthToken(authToken);
    } else {
      router.push("/login", { query: { ret: router.pathname } });
    }
  }, [router]);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleTabs = (index: number) => {
    setActiveTab(index);
  };

  const handleSpin = () => {
    let index = 0;
    setInterval(() => {
      index++;
      setSpinIndex(index);
      if (index === 3) {
        index = 0;
      }
      if (!isUploading) {
        return;
      }
    }, 1000);
  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setImage(file);
    const encodedImageStr = URL.createObjectURL(file);
    setImagePreview(encodedImageStr);
  };

  const handleUpload = async () => {
    if (image === null) {
      console.log("not uploading");
      return;
    }
    handleSpin();
    setIsUploading(true);
    try {
      const response = await uploadImage(image, authToken);
      if (response.status === 200 || response.status === 201) {
        const newEditorState = imagePlugin.addImage(
          editorState,
          response.data.imageUrl,
          {}
        );
        onChange(newEditorState);

        setIsUploading(false);
        setOpen(false);
      } else {
        setIsUploading(false);
      }
    } catch (error) {
      setIsUploading(false);
    }
  };

  const addImageByUrl = async () => {
    if (imageUrl === "") return;

    const newEditorState = imagePlugin.addImage(editorState, imageUrl, {});
    onChange(newEditorState);
    setIsUploading(false);
    setOpen(false);
  };

  return (
    <>
      {isBrowser &&
        ReactDOM.createPortal(
          <aside
            className={`${
              open
                ? "w-full h-full absolute inset-0 bg-slate-700 z-50 bg-opacity-80"
                : "hidden"
            }`}
          >
            <div className="flex w-full md:w-[85%] lg:w-[80%] justify-end mt-32 px-14">
              <button
                className="text-white"
                onClick={() => {
                  setImagePreview("");
                  setImage(null);
                  setOpen(false);
                }}
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
            <div
              //   style={{ top: offsetTop, left: offsetLeft }}
              className={`flex flex-col items-center w-[80%] md:w-[60%] lg:w-[60%] h-[60%] mt-8 bg-white mx-auto rounded-lg`}
            >
              <div className="flex items-center w-full justify-between">
                <button
                  className={`w-full h-12 border-r-[1px] border-r-gray-400 ${
                    activeTab === 0
                      ? "border-b-4 border-b-sky-900 bg-sky-300 text-white"
                      : "bg-gray-200"
                  } font-bold text-lg outline-none rounded-tl-lg transition ease-in-out duration-1000`}
                  onClick={() => handleTabs(0)}
                >
                  File
                </button>{" "}
                <button
                  className={`w-full h-12 font-bold ${
                    activeTab === 1
                      ? "border-b-4 border-b-sky-900 bg-sky-300 text-white"
                      : "bg-gray-200"
                  } font-bold text-lg outline-none rounded-tr-lg transition ease-in-out duration-1000`}
                  onClick={() => handleTabs(1)}
                >
                  URL
                </button>
              </div>
              <div className="w-full h-full flex items-center justify-center">
                {activeTab === 0 && (
                  <div className="flex flex-col space-y-8 items-center justify-center w-full">
                    {imagePreview !== "" && image !== null && (
                      <div className="w-full md:w-[60%] h-52 lg:h-60 relative">
                        <Image
                          onLoad={() => URL.revokeObjectURL(imagePreview)}
                          src={imagePreview}
                          alt=""
                          quality={100}
                          layout="fill"
                        />
                      </div>
                    )}
                    <input
                      className="hidden"
                      accept="image/*"
                      multiple
                      type="file"
                      id="file-input"
                      onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        handleImage(event);
                      }}
                    />
                    {imagePreview === "" && image === null && (
                      <label htmlFor="file-input">
                        <span
                          className="bg-gray-400 hover:bg-gray-600 p-2 rounded-md text-white cursor-pointer"
                          aria-label="upload file"
                        >
                          Select a file
                        </span>
                      </label>
                    )}

                    {imagePreview !== "" && image !== null && (
                      <div className="flex items-center justify-center space-x-3 w-full">
                        {isUploading ? (
                          <div
                            className={`flex items-center h-fit justify-center space-y-0 mt-0 space-x-3 w-full`}
                          >
                            <span className="flex h-3 w-3">
                              <span
                                className={`${
                                  spinIndex === 1
                                    ? "animate-ping"
                                    : "animate-none"
                                } h-full w-full rounded-full bg-sky-500 opacity-75`}
                              ></span>
                            </span>
                            <span className="flex h-3 w-3">
                              <span
                                className={`${
                                  spinIndex === 2
                                    ? "animate-ping"
                                    : "animate-none"
                                } h-full w-full rounded-full bg-sky-500 opacity-75`}
                              ></span>
                            </span>
                            <span className="flex h-3 w-3">
                              <span
                                className={`${
                                  spinIndex === 3
                                    ? "animate-ping"
                                    : "animate-none"
                                } h-full w-full rounded-full bg-sky-500 opacity-75`}
                              ></span>
                            </span>
                          </div>
                        ) : (
                          <>
                            <button
                              onClick={() => {
                                setImagePreview("");
                                setImage(null);
                              }}
                              disabled={isUploading}
                              className="h-9 w-20 md:h-9 md:w-20 rounded-full  bg-gray-300 hover:bg-gray-500 font-medium outline-none"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={handleUpload}
                              disabled={image === null || isUploading}
                              className="h-9 w-20 md:h-9 md:w-20 rounded-full  bg-sky-400 hover:bg-sky-600 text-white font-medium outline-none"
                            >
                              Upload
                            </button>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                )}
                {activeTab === 1 && (
                  <div className="w-full flex items-center justify-center space-x-2">
                    <input
                      placeholder="Enter image url"
                      className="h-9 md:h-12 w-[60%] bg-white p-2 placeholder:text-lg rounded-lg outline-none border-2 border-slate-200 focus:border-[3px] focus:border-slate-400"
                      type="text"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      // onPaste={(e) =>
                      //   setImageUrl(e.clipboardData.getData("Text"))
                      // }
                      required
                    />
                    <button
                      onClick={addImageByUrl}
                      className="h-9 w-12 md:h-12 md:w-20 rounded-lg  bg-sky-400 hover:bg-sky-500 text-white font-medium outline-none"
                    >
                      {isUploading ? "Processing..." : "Add"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </aside>,
          document.getElementById("modal") as HTMLElement
        )}
    </>
  );
};

export default ImageUpload;
