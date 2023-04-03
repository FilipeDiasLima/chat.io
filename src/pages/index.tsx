import Head from "next/head";
import { ChatField } from "../components/ChatField";
import { SideBar } from "../components/SideBar";
import { TopBar } from "../components/TopBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chat.io | Home</title>
      </Head>
      <div className="bg-ice-light dark:bg-gray-700 overflow-hidden">
        <TopBar />
        <SideBar />
        <ChatField />
      </div>
    </>
  );
}
