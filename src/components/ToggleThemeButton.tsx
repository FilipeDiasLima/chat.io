import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export function ToggleThemeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  function handleThemeToggle() {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <button
      className={`relative inline-block w-12 h-6 rounded-full overflow-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-yellow-400" : "bg-gray-400"
      }`}
      onClick={handleThemeToggle}
    >
      <span
        className={`flex items-center w-6 h-6 absolute top-0 left-1 transition-transform duration-300 ease-in-out transform ${
          isDarkMode ? "translate-x-full" : ""
        }`}
      >
        {isDarkMode ? <FiSun /> : <FiMoon />}
      </span>
    </button>
  );
}
