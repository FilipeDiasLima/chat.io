import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";

export function withSSRAuth(fn: GetServerSideProps) {
  return async (ctx: GetServerSidePropsContext) => {
    const cookies = parseCookies(ctx);
    const username = cookies["@chatio.username"];
    console.log("🚀 ~ file: withSSRAuth.tsx:8 ~ return ~ username:", username);

    if (!username) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    return await fn(ctx);
  };
}
