import { useState } from "react";
import { GiMeal } from "react-icons/gi";
import { MdHome, MdMenuBook, MdPayments, MdRestaurant } from "react-icons/md";
import { RiMenu5Fill } from "react-icons/ri";
import { useRecoilState, useRecoilValue } from "recoil";
import { restoState } from "../recoil/atoms";

export default function DashboardLayout({ children }: any) {
  const resto = useRecoilValue(restoState);

  const [minimizedSB, setMinimizedSB] = useState(false);

  return (
    <main className="flex flex-row justify-start items-start h-screen overflow-auto ">
      <div
        className={`h-screen border-0  ${
          minimizedSB ? "w-fit" : "w-[270px]"
        }  flex flex-col items-center bg-orange-700 transition-all `}
      >
        <div className="p-3  m-3 bg-white rounded-md ">
          <img
            src={"/appicon.svg"}
            alt="hermes-logo"
            height={"auto"}
            width={100}
            className={`${minimizedSB ? "hidden" : ""}`}
          />
          <img
            src={"/favicon.ico"}
            alt="hermes-logo"
            width={25}
            height={"auto"}
            className={`${minimizedSB ? "" : "hidden"}`}
          />
        </div>
        <div className="h-[1px] bg-white my-10 opacity-60 w-[70%] invisible "></div>
        <div className="flex flex-col flex-auto border-0 w-full ">
          <div className="opacity-80 hover:opacity-100 cursor-pointer border-transparent border-4 hover:border-l-white mb-5 ">
            <div className="w-[80%] flex-auto overflow-hidden m-auto flex-col text-white py-2 ">
              <div
                className={`flex items-center ${
                  minimizedSB ? "justify-center" : "justify-start"
                } `}
              >
                <MdHome size={35} />
                <span
                  className={`ml-2 capitalize font-semibold  ${
                    minimizedSB ? "hidden" : ""
                  } `}
                >
                  Accueil
                </span>
              </div>
            </div>
          </div>

          <div className="opacity-80 hover:opacity-100 cursor-pointer border-transparent border-4 hover:border-l-white mb-5 ">
            <div className="w-[80%] flex-auto overflow-hidden m-auto flex-col text-white py-2 ">
              <div
                className={`flex items-center ${
                  minimizedSB ? "justify-center" : "justify-start"
                } `}
              >
                <MdMenuBook size={35} />
                <span
                  className={`ml-2 capitalize font-semibold  ${
                    minimizedSB ? "hidden" : ""
                  } `}
                >
                  Menus
                </span>
              </div>
            </div>
          </div>

          <div className="opacity-80 hover:opacity-100 cursor-pointer border-transparent border-4 hover:border-l-white mb-5 ">
            <div className="w-[80%] flex-auto overflow-hidden m-auto flex-col text-white py-2 ">
              <div
                className={`flex items-center ${
                  minimizedSB ? "justify-center" : "justify-start"
                } `}
              >
                <GiMeal size={35} />
                <span
                  className={`ml-2 capitalize font-semibold  ${
                    minimizedSB ? "hidden" : ""
                  } `}
                >
                  Plats
                </span>
              </div>
            </div>
          </div>

          <div className="opacity-80 hover:opacity-100 cursor-pointer border-transparent border-4 hover:border-l-white mb-5 ">
            <div className="w-[80%] flex-auto overflow-hidden m-auto flex-col text-white py-2 ">
              <div
                className={`flex items-center ${
                  minimizedSB ? "justify-center" : "justify-start"
                } `}
              >
                <MdPayments size={35} />
                <span
                  className={`ml-2 capitalize font-semibold  ${
                    minimizedSB ? "hidden" : ""
                  } `}
                >
                  Payements
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col border-0 flex-auto h-screen overflow-auto ">
        <div className="p-2 bg-white h-[70px] shadow-md flex justify-between items-center ">
          <div className="flex items-center w-fit ">
            <RiMenu5Fill
              onClick={() => {
                setMinimizedSB(!minimizedSB);
              }}
              className="mr-2 cursor-pointer "
              size={30}
            />
            <span className="font-semibold text-xl ">Dashboard</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold mr-1"> {resto?.name} </span>
            <div className="rounded-full overflow-hidden h-[60px] w-[60px]  ">
              <img
                src="https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png"
                alt="resto"
                className="object-contain h-full w-full rounded-full "
              />
            </div>
          </div>
        </div>
        <div className="p-4 bg-[#faf3f3] flex-auto ">{children}</div>
      </div>
    </main>
  );
}
