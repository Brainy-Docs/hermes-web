import type { NextApiRequest, NextApiResponse } from "next";

import { axios } from "../../../helpers/axios-instance";

type Data = {
  success: boolean;
  message?: string;
  data?: Object;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == "GET") {
    axios
      .get("/restaurant/logout", {
        headers: req.headers,
      })
      .then((response) => {
        if (response?.status < 400 || !response?.data?.error) {
          res.status(200).json({
            message: response?.data?.message ?? "Deconnexion reussie",
            success: true,
          });
        }
      })
      .catch((err) => {
        console.log(err.response?.data?.message);
        res.status(200).json({
          message: err.response?.data?.message ?? "Deconnexion non aboutie",
          success: false,
        });
      });
  } else {
    res.status(401).json({
      message: `Cannot ${req.method?.toUpperCase()} ${req.url}`,
      success: false,
    });
  }
}
