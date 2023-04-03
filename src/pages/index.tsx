import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { withSSRAuth } from "../HOC/withSSRAuth";
import { ChatField } from "../components/ChatField";
import { SideBar } from "../components/SideBar";
import { TopBar } from "../components/TopBar";
import { UserProps } from "./api/users";

export default function Home() {
  const [users, setUsers] = useState<UserProps[]>([]);

  async function fetchUsers() {
    const response = await axios.get("/api/users");
    console.log("🚀 ~ file: index.tsx:30 ~ fetchUsers ~ response:", response);

    setUsers(response.data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

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

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
