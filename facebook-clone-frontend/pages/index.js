import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Head from "next/head";
import { getSession } from "next-auth/react";
import Login from "../components/login";
import Feed from "../components/Feed";
import RightSidebar from "../components/RightSidebar";

export default function Home({session}) {
  if(!session) return <Login />;
  return (
    <div>
      <Head>
        <title>facebook clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex bg-gray-100">
         {/* Left Sidebar */}
         <Sidebar />

         {/* Feed */}
        <Feed />
        {/* Right Sidebar */}
        <RightSidebar />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return{
    props: {session},
  };
  
}

