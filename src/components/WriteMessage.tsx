import { FormEvent, useEffect, useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";

export function WriteMessage() {
  const [text, setText] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value);

    if (event.target.scrollHeight >= 260) {
      event.target.style.height = "260px";
      event.target.style.overflowY = "scroll";
    } else {
      event.target.style.height = "auto";
      event.target.style.height = `${event.target.scrollHeight}px`;
    }

    if (event.target.value === "") {
      event.target.style.height = "auto";
      event.target.style.overflowY = "hidden";
    }
  }

  return (
    <div
      className="
      flex 
      flex-row
      justify-between
      items-center
      fixed 
      bottom-10 
      max-[800px]:bottom-0
      right-1/4 
      max-[1600px]:right-60
      max-[1440px]:right-40
      max-[1280px]:right-20
      max-[800px]:right-0
      max-w-3xl
      max-[800px]:max-w-none
      w-full
      max-[1280px]:w-2/4
      max-[800px]:w-full
      py-8
      px-6
      bg-white
      dark:bg-gray-600
      shadow-md 
      rounded-xl
      max-[800px]:rounded-none
      transition-all duration-300 ease-out
    "
    >
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Escreva uma mensagem..."
        className="bg-transparent placeholder:text-blue-secondary/80 focus:outline-none w-5/6 resize-none overflow-y-hidden dark:text-blue-secondary"
      />
      <button type="button" className="p-4 bg-blue-secondary rounded-2xl">
        <RiSendPlaneFill color="#FFF" size={22} />
      </button>
    </div>
  );
}
