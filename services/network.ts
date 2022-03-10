import axios, { AxiosError } from "axios";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const errorObj = error.response;
    return Promise.reject(errorObj);
  }
);

const API_BASE_URL = process.env.API_BASE_URL;

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      email,
      password,
    });

    return {
      status: response.status,
      data: response.data,
      error: undefined,
    };
  } catch (error: any) {
    return {
      status: error?.status,
      data: undefined,
      error: error?.data?.error,
    };
  }
};

export const uploadImage = async (file: File, authToken: string) => {
  const data = new FormData();
  data.append("file", file, file.name);
  try {
    const response = await axios.post(`${API_BASE_URL}/upload_file`, data, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return {
      status: response.status,
      data: response.data,
      error: undefined,
    };
  } catch (error: any) {
    return {
      status: error?.status,
      data: undefined,
      error: error?.data?.error,
    };
  }
};
