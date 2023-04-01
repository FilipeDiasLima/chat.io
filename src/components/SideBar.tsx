import { IoChatboxEllipses } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineWifi } from "react-icons/md";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { ChatCard } from "./ChatCard";

export function SideBar() {
  return (
    <aside
      className="
      flex
      flex-col
      rounded-r-[45px]
      w-[400px]
      max-[1440px]:w-[370px]
      max-[1140px]:w-[320px]
      max-[800px]:hidden
      fixed 
      left-0 
      top-0 
      bottom-0 
      p-5
      pr-8
      bg-white 
      dark:bg-gray-600
      shadow-md 
      transition-all duration-300 ease-out
      "
    >
      <div className="rounded-3xl w-full p-3 flex flex-row justify-between items-center bg-blue-secondary shadow-lg shadow-blue-secondary/60">
        <div className="flex flex-row space-x-3 items-center">
          <div className="rounded-2xl w-14 h-14 max-[1440px]:w-12 max-[1440px]:h-12 bg-blue-main flex items-center justify-center">
            <IoChatboxEllipses color="#FFF" size={23} />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center ">
              <p className="text-sm antialiased text-white mr-1">
                Salas de bate-papo
              </p>
              <FiChevronDown color="#FFF" />
            </div>
            <p className="text-xs antialiased  text-white">10 abertas</p>
          </div>
        </div>
        <div className="flex flex-row px-2 max-[1140px]:hidden">
          <MdOutlineWifi
            color="#ADD0FD"
            size={20}
            style={{ marginRight: 10 }}
          />
          <CgArrowsExchangeAltV color="#ADD0FD" size={22} />
        </div>
      </div>

      <div className="mt-8 flex flex-col space-y-1">
        <ChatCard />
        <ChatCard />
        <ChatCard isSelected />
        <ChatCard />
      </div>
    </aside>
  );
}
