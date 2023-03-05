import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { restoState, restoTokenState } from "../../recoil/atoms";
import Head from "next/head";
import Title from "../../components/general/Title";
import DashboardLayout from "../../components/DashboardLayout";
import { refreshToken } from "../../helpers/functions";

export default function Index() {
  const resto = useRecoilValue(restoState);
  const [restoToken, setRestoToken] = useRecoilState(restoTokenState);

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
      if (data?.message?.includes("jwt expired")) {
        let _res = await refreshToken(restoToken?.refreshToken);
        console.log({ _res });
        if (_res?.data) {
          setRestoToken({ ...restoToken, jwToken: _res?.data });
        }
        // await logout();
      }
    }
  };

  return (
    <section className="">
      <Title title="Dashboard" />
      <DashboardLayout>
        <button className="hover:underline" onClick={logout}>
          Deconnexion
        </button>
      </DashboardLayout>
    </section>
  );
}
