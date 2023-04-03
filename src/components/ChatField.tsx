import { useEffect, useState } from "react";
import { useAuth } from "../useHook/useAuth";
import { MessageBox } from "./MessageBox";
import { Scrollbar } from "./Scrollbar";
import { WriteMessage } from "./WriteMessage";
import io, { Socket } from "socket.io-client";

// type MessageProps = {
//   text: string;
//   user: string;
// };

const ENDPOINT = "localhost:3333";
const socket = io(ENDPOINT);

export function ChatField() {
  const { username, room } = useAuth();

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  console.log("🚀 ~ file: ChatField.tsx:21 ~ ChatField ~ messages:", messages);

  function sendMessage() {
    if (message !== "") {
      const messageData = {
        room,
        username,
        message,
      };
      console.log(
        "🚀 ~ file: ChatField.tsx:26 ~ sendMessage ~ messageData:",
        messageData
      );

      socket.emit("sendMessage", messageData);
      setMessages([...messages, messageData]);
      setMessage("");
    }
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages([...messages, data]);
    });
  }, [socket]);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  useEffect(() => {
    socket.emit("join", room);
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
