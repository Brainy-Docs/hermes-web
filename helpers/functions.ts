import { axios } from "./axios-instance";

export const getLocalData = (key: string) => {
  if (!ISSERVER) {
    let data = localStorage.getItem(key);
    try {
      if (data) {
        return JSON.parse(data);
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  } else {
    return null;
  }
};

interface Result {
  message: string;
  success: boolean;
  data?: Object;
}

export const refreshToken = async (authorization: string): Promise<Result> => {
  console.log({ authorization });
  try {
    let res = await axios.get("/auth/refreshToken", {
      headers: {
        Authorization: authorization,
      },
    });

    console.log({ res });

    if (res.status < 400 || !res.data?.message) {
      return {
        message: res?.data?.message ?? "OK refresh",
        success: true,
        data: res.data ?? {},
      };
    } else {
      console.log(res);
      return {
        message: res?.data?.message ?? "Erreur lors du refresh du jwt - 2",
        success: false,
        data: null ?? {},
      };
    }
  } catch (err: any) {
    console.log(err?.message);
    return {
      message: "Refresh Token must be provided",
      success: false,
      data: null ?? {},
    };
  }
};

export const ISSERVER = typeof window == "undefined";
