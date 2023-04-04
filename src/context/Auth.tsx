import Router from "next/router";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import io, { Socket } from "socket.io-client";
import Login from "../components/Login";
import { Menu } from "../components/Menu";

const ENDPOINT = "localhost:3333";

const socket = io(ENDPOINT);

type AuthContextData = {
  username: string;
  room: string;
  toggleMenu: () => void;
  socket: Socket;
  signIn: (username: string) => void;
  setRoom: Dispatch<SetStateAction<string>>;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function toggleMenu() {
    console.log("entrou");
    setIsOpenMenu(!isOpenMenu);
  }

  function signIn(usernameParam: string) {
    setUsername(usernameParam);
    setRoom(usernameParam);
  }

  useEffect(() => {
    socket.emit("join", room);
  }, [room]);

  return (
    <AuthContext.Provider
      value={{ signIn, toggleMenu, setRoom, username, room, socket }}
    >
      {isOpenMenu && <Menu />}
      {username ? children : <Login />}
    </AuthContext.Provider>
  );
}
