import type { AppProps } from "next/app";
import { useEffect } from "react";
import { setCookie } from "nookies";
import "./globals.css";

import io from "socket.io-client";
import { AuthProvider } from "../context/Auth";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const socket = io("localhost:3333");

    socket.on("connect", () => {
      console.log("Conectado ao servidor Socket.IO");
    });

    setCookie(undefined, "@chatio.theme", "light", {
      path: "/",
    });

    return () => {
      socket.disconnect();
      console.log("Desconectado do servidor Socket.IO");
    };
  }, []);
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
