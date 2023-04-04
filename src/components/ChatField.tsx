import { useEffect, useState } from "react";
import { useAuth } from "../useHook/useAuth";
import { MessageBox } from "./MessageBox";
import { Scrollbar } from "./Scrollbar";
import { WriteMessage } from "./WriteMessage";
import io, { Socket } from "socket.io-client";

type MessageProps = {
  room: string;
  username: string;
  message: string;
};

export function ChatField() {
  const { username, room, socket } = useAuth();

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<MessageProps[]>([]);

  function sendMessage() {
    if (message !== "") {
      const messageData = {
        room,
        username,
        message,
      };
      socket.emit("sendMessage", messageData);
      setMessages((list) => [...list, messageData]);
      setMessage("");
    }
  }

  useEffect(() => {
    const handleReceiveMessage = (data: any) => {
      setMessages((list) => [...list, data]);
    };
    socket.on("receive_message", handleReceiveMessage);

    return () => {
      socket.off("receive_message", handleReceiveMessage);
    };
  }, [socket]);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [messages]);

  useEffect(() => {
    socket.emit("join", room);
  }, [room]);

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
