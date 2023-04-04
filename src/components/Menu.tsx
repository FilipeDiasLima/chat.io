import { useState } from "react";
import { useAuth } from "../useHook/useAuth";
import { IoAdd, IoChatboxEllipses } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineWifi } from "react-icons/md";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { Collapse } from "react-collapse";

export function Menu() {
  const [isOpenFinderUser, setIsOpenFinderUser] = useState(false);

  const [userRoom, setUserRoom] = useState("");

  const { setRoom, toggleMenu } = useAuth();

  return (
    <div className="absolute z-10 w-full bg-gray-600/40 h-full flex flex-row">
      <div className="bg-white h-full w-4/5 p-4">
        <div
          className={`
          rounded-3xl
          ${isOpenFinderUser && "rounded-b-none"}
          w-full
          p-3 
          flex 
          flex-row 
          justify-between 
          items-center 
          bg-blue-secondary 
          shadow-lg 
         
          transition-all 
          ${isOpenFinderUser ? "duration-50" : "duration-[2s]"}
        `}
        >
          <div className="flex flex-row space-x-3 items-center">
            <button
              onClick={() => setIsOpenFinderUser(!isOpenFinderUser)}
              type="button"
              className="flex rounded-2xl w-14 h-14 max-[1440px]:w-12 max-[1440px]:h-12 bg-blue-main items-center justify-center"
            >
              {isOpenFinderUser ? (
                <IoChatboxEllipses color="#FFF" size={23} />
              ) : (
                <IoAdd color="#FFF" size={26} />
              )}
            </button>
            <div className="flex flex-col">
              <div className="flex flex-row items-center ">
                <p className="text-sm antialiased text-white mr-1">
                  Salas de bate-papo
                </p>
                <FiChevronDown color="#FFF" />
              </div>
              <p className="text-xs antialiased  text-white">0 abertas</p>
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

        <Collapse isOpened={isOpenFinderUser}>
          <div
            className={`
          flex 
          flex-col 
          bg-blue-secondary 
          shadow-lg 
          p-4
          space-y-2
          rounded-b-3xl
          
        `}
          >
            <p className="text-sm text-white">Conversar com:</p>
            <div className="flex flex-row space-x-4">
              <input
                value={userRoom}
                onChange={(e) => setUserRoom(e.target.value)}
                placeholder="Nome do usuario..."
                className="flex-1 p-2 text-sm rounded-lg"
                type="text"
              />
              <button
                onClick={() => {
                  setUserRoom("");
                  setIsOpenFinderUser(false);
                  setRoom(userRoom);
                }}
                className="p-3 bg-blue-main rounded-lg"
              >
                <IoAdd color="#FFF" size={18} />
              </button>
            </div>
          </div>
        </Collapse>
        <button
          className="bg-blue-main p-3 rounded-xl text-white mt-10"
          onClick={toggleMenu}
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
