import Router from "next/router";
import { parseCookies, setCookie } from "nookies";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import io, { Socket } from "socket.io-client";

let socket: Socket;

const ENDPOINT = "localhost:3333";

type AuthContextData = {
  username: string;
  room: string;
  signIn: (username: string) => void;
  setRoom: Dispatch<SetStateAction<string>>;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const cookies = parseCookies();
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  function signIn(usernameParam: string) {
    setUsername(usernameParam);
    setCookie(undefined, "@chatio.username", usernameParam, { path: "/" });
    Router.push("/");

    socket = io(ENDPOINT);
    socket.emit("join", { name: usernameParam, room: usernameParam }, () => {});

    return () => {
      socket.emit("user-disconnected");

      socket.off();
    };
  }

  function connectSelfChat(username: string) {
    socket = io(ENDPOINT);
    socket.emit("join", { name: username, room: username }, () => {});

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }

  useEffect(() => {
    const usernameCookie = cookies["@chatio.username"];
    if (usernameCookie) {
      setUsername(usernameCookie);
      connectSelfChat(usernameCookie);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, setRoom, username, room }}>
      {children}
    </AuthContext.Provider>
  );
}
