import { axios } from "./axios-instance"

export const getLocalData = (key) => {
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
}

export const refreshToken = async (authorization) => {
  if (authorization) {
    console.log(axios.defaults.baseURL)
    axios
      .get("/auth/refreshToken", {
        headers: {
          Authorization: authorization
        },
      })
      .then((response) => {
        print(response)
        if (response?.status < 400 || !response?.data?.error) {
          return {
            message: response?.data?.message ?? "Erreur lors du refresh du jwt",
            success: true,
            data: response.data ?? ""
          }
        }
      })
      .catch((err) => {
        console.log(err?.response)
        // console.log(err.response?.data?.message);
        return {
          message:
            err.response?.data?.message ?? "Erreur lors du refresh du jwt - 2",
          success: false,
          data: null ?? ""
        }
      });
  } else {
    return {
      message: "le jwt n'est pas fourni",
      success: false,
      data: null ?? ""
    }
  }
}

export const ISSERVER = typeof window == "undefined";