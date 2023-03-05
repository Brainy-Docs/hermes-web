// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
  if (req.method == "POST") {
    const { email, password } = req.body;

    axios
      .post("/restaurant/login", { password, username: email })
      .then((response) => {
        if (response?.status < 400 || !response?.data?.error) {
          res.status(200).json({
            message: response?.data?.message ?? "Connexion reussie",
            success: true,
            data: response?.data,
          });
        }
        // else {
        //    console.log(response?.data?.message);
        //   res.status(200).json({
        //     message: response?.data?.message ?? "Indentifiants Invalides",
        //     success: false,
        //   });
        // }
      })
      .catch((err) => {
        console.log(err.response?.data?.message);
        res.status(200).json({
          message: err.response?.data?.message ?? "Indentifiants Invalides",
          success: false,
        });
      });
  } else {
    res.status(401).json({ message: `Cannot GET ${req.url}`, success: false });
  }
}
