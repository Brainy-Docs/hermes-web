import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { restoState, restoTokenState } from "../../recoil/atoms";
import Head from "next/head";
import Title from "../../components/general/Title";
import DashboardLayout from "../../components/DashboardLayout";
import { refreshToken } from "../../helpers/functions";
import { FiMenu, FiRefreshCcw, FiRefreshCw } from "react-icons/fi";
import { GiHotMeal } from "react-icons/gi";
import {} from "react-icons/fa";
import {} from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";
import { BiMinusCircle, BiMoneyWithdraw } from "react-icons/bi";

export default function Index() {
  const resto = useRecoilValue(restoState);
  const [restoToken, setRestoToken] = useRecoilState(restoTokenState);

  const resetResto = useResetRecoilState(restoState);
  const resetRestoToken = useResetRecoilState(restoTokenState);

  let logout = async () => {
    let retries = 0;

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
        if (retries < 5) {
          alert("1");

          let _res = await refreshToken(restoToken?.refreshToken);
          alert("2");
          console.log({ _res });
          if (_res?.data) {
            setRestoToken({ ...restoToken, ..._res?.data });
          }
          retries += 1;
          console.log(`Retrying ${retries}times...`);

          // await logout();
        } else {
          alert("Retries exceed 5 times !! Retry later! ");
        }
      }
    }
  };

  return (
    <section className="">
      <Title title="Dashboard" />
      <DashboardLayout>
        <div className="flex-auto h-full ">
          <div className="grid grid-cols-4 gap-10 px-0  ">
            <div className="border-2 border-white p-5 text-white bg-orange-500 rounded-lg cursor-pointer shadow-lg ">
              <div className="flex justify-between">
                <div className="flex flex-col mb-5 ">
                  <span className="text-[36px] font-bold ">120</span>
                  <span className="font-semibold opacity-90  text-sm ">
                    Commandes au total
                  </span>
                </div>
                <span className="p-2 bg-orange-600 rounded-lg h-fit hover:border-white border-transparent border-2 box-content ">
                  <GiHotMeal size={25} color={"white"} />
                </span>
              </div>
              <span className="font-bold">20 Février 2022</span>
            </div>

            <div className="border-2 border-white p-5 text-white bg-orange-500 rounded-lg cursor-pointer shadow-lg ">
              <div className="flex justify-between">
                <div className="flex flex-col mb-5 ">
                  <span className="text-[36px] font-bold ">1240</span>
                  <span className="font-semibold opacity-90  text-sm ">
                    Recette des commandes
                  </span>
                </div>
                <span className="p-2 bg-orange-600 rounded-lg h-fit hover:border-white border-transparent border-2 box-content ">
                  <BiMoneyWithdraw size={25} color={"white"} />
                </span>
              </div>
              <span className="font-bold">20 Février 2022</span>
            </div>

            <div className="border-2 border-white p-5 text-white bg-orange-500 rounded-lg cursor-pointer shadow-lg ">
              <div className="flex justify-between">
                <div className="flex flex-col mb-5 ">
                  <span className="text-[36px] font-bold ">12</span>
                  <span className="font-semibold opacity-90  text-sm ">
                    Commandes en cours
                  </span>
                </div>
                <span className="p-2 bg-orange-600 rounded-lg h-fit hover:border-white border-transparent border-2 box-content ">
                  <FiRefreshCcw size={25} color={"white"} />
                </span>
              </div>
              <span className="font-bold">20 Février 2022</span>
            </div>

            <div className="border-2 border-white p-5 text-white bg-orange-500 rounded-lg cursor-pointer shadow-lg ">
              <div className="flex justify-between">
                <div className="flex flex-col mb-5 ">
                  <span className="text-[36px] font-bold ">120</span>
                  <span className="font-semibold opacity-90  text-sm ">
                    Commandes en attente
                  </span>
                </div>
                <span className="p-2 bg-orange-600 rounded-lg h-fit hover:border-white border-transparent border-2 box-content ">
                  <BiMinusCircle size={25} color={"white"} />
                </span>
              </div>
              <span className="font-bold">20 Février 2022</span>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </section>
  );
}
