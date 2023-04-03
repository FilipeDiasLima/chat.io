// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { users } from "@/src/utils/users";
import type { NextApiRequest, NextApiResponse } from "next";

export type UserProps = {
  id: string;
  name: string;
  room: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  console.log("🚀 ~ file: users.ts:17 ~ handler ~ users:", users);
  const usersTyped = users as UsersProps[];

  return res.status(200).json({ users: usersTyped });
}
