import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import { useRouter } from "next/router";
import Loading from "../components/general/Loading";

import { getLocalData } from "../helpers/functions";
import { poppins } from "../helpers/constants/fonts";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const path = router.pathname;

  const [resto, setResto] = useState("");

  useEffect(() => {
    setResto(getLocalData("restoState"));
  }, []);

  useEffect(() => {
    if (resto != "") {
      if (path.startsWith("/manage") && !!!resto) {
        router.push("/auth/login");
      }
      if (path.startsWith("/auth") && !!resto) {
        router.push("/manage");
      }
    }
  }, [resto]);

  if (
    (path.startsWith("/manage") && !!!resto) ||
    (path.startsWith("/auth") && !!resto)
  ) {
    return <Loading />;
  }

  return (
    <main className={poppins.className}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </main>
  );
}
