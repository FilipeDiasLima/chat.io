import { FiSearch } from "react-icons/fi";
import { ToggleThemeButton } from "./ToggleThemeButton";

export function TopBar() {
  return (
    <div
      className="
      flex 
      flex-row 
      px-10 
      py-6 
      fixed
      top-0
      right-0
      rounded-bl-[45px]
      max-[800px]:rounded-b-3xl
      w-3/4
      max-[1440px]:w-2/3
      max-[800px]:w-full
      bg-white 
      dark:bg-gray-600
      shadow-md 
      shadow-left
      shadow-bottom
      items-center
      justify-between
      transition-all duration-300 ease-out
      "
    >
      <div className="flex flex-row bg-ice-light dark:bg-gray-700 rounded-xl w-3/6 p-4 items-center ">
        <FiSearch size={18} color="#7C92F5" />
        <input
          placeholder="Search"
          type="text"
          className="bg-transparent placeholder:text-blue-secondary/80 dark:text-blue-secondary focus:outline-none ml-4 w-full"
        />
      </div>
      <div className="flex flex-row items-center space-x-10">
        <ToggleThemeButton />
        <img
          className="w-12 h-12"
          src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
          alt=""
        />
      </div>
    </div>
  );
}
