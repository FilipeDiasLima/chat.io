import { useEffect, useState } from "react";
import { useAuth } from "../useHook/useAuth";
import { MessageBox } from "./MessageBox";
import { Scrollbar } from "./Scrollbar";
import { WriteMessage } from "./WriteMessage";
import io, { Socket } from "socket.io-client";

type MessageProps = {
  text: string;
  user: string;
};

const ENDPOINT = "localhost:3333";
const socket = io(ENDPOINT);

export function ChatField() {
  const { username, room } = useAuth();

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<MessageProps[]>([]);
  console.log("🚀 ~ file: ChatField.tsx:21 ~ ChatField ~ messages:", messages);

  function sendMessage() {
    socket.emit("sendMessage", message.trim(), () => setMessage(""));
  }

  socket.emit("joinRoom", { name: username, room });

  socket.on("message", (message) => {
    setMessages([...messages, message]);
  });

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  useEffect(() => {
    socket.emit("join", { name: username, room }, () => {});
  }, [room, ENDPOINT]);

  return (
    <div
      className={`
      flex 
      w-3/6
      ml-[540px]
      max-[1124px]:ml-[420px]
      max-[800px]:ml-0
      max-[800px]:w-full
      max-[800px]:px-2
      py-44
      `}
    >
      <Scrollbar />
      <ul
        className="
        flex 
        flex-col
        items-center 
        w-full 
        "
      >
        {messages.map((message, index) => (
          <MessageBox key={index} message={message} name={username} />
        ))}
      </ul>

      <WriteMessage
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
}
