import Router from "next/router";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import io from "socket.io-client";
import Login from "../components/Login";

const ENDPOINT = "localhost:3333";

const socket = io(ENDPOINT);

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
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  function signIn(usernameParam: string) {
    setUsername(usernameParam);
    setRoom(usernameParam);
    socket.emit("join", usernameParam);
  }

  useEffect(() => {
    socket.emit("join", room);
  }, [room]);

  return (
    <AuthContext.Provider value={{ signIn, setRoom, username, room }}>
      {username ? children : <Login />}
    </AuthContext.Provider>
  );
}
