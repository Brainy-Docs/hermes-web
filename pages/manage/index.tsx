import { useRecoilValue, useResetRecoilState } from "recoil";
import { restoState, restoTokenState } from "../../recoil/atoms";
import Head from "next/head";
import Title from "../../components/general/Title";

export default function Index() {
  const resto = useRecoilValue(restoState);
  const restoToken = useRecoilValue(restoTokenState);

  const resetResto = useResetRecoilState(restoState);
  const resetRestoToken = useResetRecoilState(restoTokenState);

  let logout = async () => {
    const res = await fetch("/api/manage/logout", {
      method: "GET",
      headers: {
        Authorization: restoToken.jwToken ?? "",
      },
    });
    const data = await res.json();
    if (data.success) {
      resetResto();
      resetRestoToken();
      window.location.href = "/auth/login";
    } else {
      alert(data.message);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen overflow-hidden ">
      <Title title="Dashboard" />
      <img src="/appicon.svg" alt="logo" />
      <p className="mt-10 font-semibold ">Dashboard en developpement</p>

      <p className="mt-10 font-normal">
        Connecté en tant que <span className="italic">{resto.username}</span>.{" "}
        <span
          onClick={logout}
          className="font-bold cursor-pointer hover:underline hover:text-blue-500 "
        >
          Deconnexion
        </span>
      </p>
    </section>
  );
}
