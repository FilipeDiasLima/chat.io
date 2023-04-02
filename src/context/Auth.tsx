import Router from "next/router";
import { setCookie } from "nookies";
import { ReactNode, createContext, useEffect, useState } from "react";

type AuthContextData = {
  username: string;
  signIn: (username: string) => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [username, setUsername] = useState("");

  function signIn(usernameParam: string) {
    setUsername(usernameParam);
    setCookie(undefined, "@chatio.username", usernameParam, { path: "/" });
    Router.push("/");
  }

  return (
    <AuthContext.Provider value={{ signIn, username }}>
      {children}
    </AuthContext.Provider>
  );
}
