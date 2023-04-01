import Head from "next/head";
import { SideBar } from "../components/SideBar";
import { TopBar } from "../components/TopBar";
import { ChatField } from "../components/ChatField";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chat.io | Rooms</title>
      </Head>
      <div className="bg-ice-light dark:bg-gray-700 overflow-hidden">
        <TopBar />
        <SideBar />
        <ChatField />
      </div>
    </>
  );
}
