import { GiMeal } from "react-icons/gi";
import { MdHome, MdMenuBook, MdPayments, MdRestaurant } from "react-icons/md";
import { RiMenu5Fill } from "react-icons/ri";
import { useRecoilState, useRecoilValue } from "recoil";
import { restoState } from "../recoil/atoms";

export default function DashboardLayout({ children }: any) {
  const resto = useRecoilValue(restoState);

  return (
    <main className="flex flex-row justify-start items-start h-screen overflow-auto ">
      <div className="h-screen border-0 w-[200px]  flex flex-col items-center bg-orange-700 ">
        <div className="p-3 mt-3 bg-white rounded-md ">
          <img
            src={"/appicon.svg"}
            alt="hermes-logo"
            height={"auto"}
            width={100}
          />
        </div>
        <div className="h-[1px] bg-white my-10 opacity-60 w-[70%] invisible "></div>
        <div className="flex flex-col flex-auto border-0 w-full ">
          <div className="flex justify-start mb-3 items-center text-white opacity-80 font-semibold hover:opacity-100 cursor-pointer border-l-4 hover:border-white border-transparent w-full p-3 transition-all">
            <MdHome className="mr-3" size={20} />
            <span className="text-base">Acceuil</span>
          </div>
          <div className="flex justify-start mb-3 items-center text-white opacity-80 font-semibold hover:opacity-100 cursor-pointer border-l-4 hover:border-white border-transparent w-full p-3 transition-all ">
            <GiMeal className="mr-3" size={20} />
            <span className="text-base">Plats & Desserts</span>
          </div>
          <div className="flex justify-start mb-3 items-center text-white opacity-80 font-semibold hover:opacity-100 cursor-pointer border-l-4 hover:border-white border-transparent w-full p-3 transition-all ">
            <MdMenuBook className="mr-3" size={20} />
            <span className="text-base">Menus</span>
          </div>
          <div className="flex justify-start mb-3 items-center text-white opacity-80 font-semibold hover:opacity-100 cursor-pointer border-l-4 hover:border-white border-transparent w-full p-3 transition-all ">
            <MdPayments className="mr-3" size={20} />
            <span className="text-base">Paiements</span>
          </div>
          <div className="flex justify-start mb-3 items-center text-white opacity-80 font-semibold hover:opacity-100 cursor-pointer border-l-4 hover:border-white border-transparent w-full p-3 transition-all ">
            <MdRestaurant className="mr-3" size={20} />
            <span className="text-base">Mon Resto</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col border-0 flex-auto h-screen overflow-auto ">
        <div className="p-2 bg-white h-[70px] shadow-md flex justify-between items-center ">
          <div className="flex items-center w-fit ">
            <RiMenu5Fill className="mr-2" size={30} />
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
