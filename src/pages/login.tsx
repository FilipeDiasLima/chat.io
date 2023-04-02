import Head from "next/head";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { noSSRAuth } from "../HOC/noSSRAuth";
import ChatioSVG from "../assets/chatio.svg";
import { useAuth } from "../useHook/useAuth";
import { GetServerSideProps } from "next";

export default function Login() {
  const [theme, setTheme] = useState("light");
  const [errorLogin, setErrorLogin] = useState(false);
  const [username, setUsername] = useState("");
  const cookies = parseCookies();
  const { signIn } = useAuth();

  function handleSignIn() {
    if (!username) setErrorLogin(true);
    else signIn(username);
  }

  useEffect(() => {
    const themeCookie = cookies["@chatio.theme"];
    if (themeCookie === "dark") {
      setTheme("dark");
      document.documentElement.classList.toggle("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.toggle("light");
    }
  }, [, theme]);

  return (
    <>
      <Head>
        <title>Chat.io | Login</title>
      </Head>
      <div className="flex items-center justify-center bg-ice-light dark:bg-gray-700 overflow-hidden h-screen">
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            w-1/5
            max-[1440px]:w-1/4
            max-[1024px]:w-1/3
            max-[800px]:w-3/4
          bg-white 
          dark:bg-gray-600
            shadow-md 
            transition-all duration-300 ease-out
            px-6
            py-10
            rounded-2xl
            space-y-8
          "
        >
          <ChatioSVG />
          <input
            className="w-full bg-transparent rounded-lg border border-gray-300 px-4 py-3 dark:text-blue-secondary"
            type="text"
            placeholder="Seu username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errorLogin && (
            <p className="text-red-500 text-sm">Você precisa de um username.</p>
          )}
          <button
            type="button"
            onClick={handleSignIn}
            className="w-1/2 rounded-xl bg-blue-secondary p-3 text-white transition-all duration-200 hover:shadow-lg hover:shadow-blue-secondary/60"
          >
            Entrar
          </button>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = noSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
