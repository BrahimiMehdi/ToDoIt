import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import bg from "../public/sprinkle.svg";
import Navbar from "../components/navbar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Navbar />

      <Head>
        <title>ToDo it</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-5xl ml-[100px] mt-[200px]">ToDo It</h1>
      <p className="ml-[100px] text-3xl">Simply and smartly manage your projectsat one place.</p>
      <br />
      <br />
      <div className="flex txt">
        <a href="" className="px-5  bg-main p-3 rounded-xl ml-[100px] text-white">
          Start your todo-it journey now !
        </a>
        <h3 className="text-2xl mt-[10px] ml-[20px]">Or</h3>
        <a href="" className="border-main border-2 rounded-xl p-3 ml-[100px]">
          See more
        </a>
      </div>
    </div>
  );
}
