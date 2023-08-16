/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image";
import React from "react";
import logo from "~/assets/logo.svg";
import { varela } from "~/utils/fonts";

const logoSize = 150;

const MainPage: React.FC = () => {
  return (
    <div
      className={`flex h-screen flex-col items-center justify-center text-gray-200 ${varela.className}`}
    >
      <div className="absolute left-0 top-0 ml-8 mt-8 flex space-x-8 text-lg">
        <a href="#" className="hover:underline">
          Solutions
        </a>
        <a href="#" className="hover:underline">
          Why MeetSafe
        </a>
      </div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("/background.svg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: "-1",
        }}
      />
      <div className="flex flex-col items-center space-y-4">
        <Image src={logo} alt="Logo" width={logoSize} height={logoSize} />
        <h1 className={`text-6xl font-extralight`}>MeetSafe</h1>
        <p className="text-2xl">
          Connecting Needs, Ensure Safety, Choose your Privacy
        </p>
        <p className="w-[580px] text-center text-xl">
          A decentralized platform where you can satisfy your needs and
          professionals can provide their services safely and 100% anunymously,
          if you want.
        </p>
        <button className="shadow- rounded-full bg-gradient-to-tr from-[#b578b0] to-[#c18c92] px-24 py-3 text-2xl font-bold text-white hover:bg-blue-600">
          Join MeetSafe
        </button>
        <button className="rounded-full bg-gray-300 px-4 py-2 font-bold text-gray-700 hover:bg-gray-400">
          enter as spectator
        </button>
      </div>
    </div>
  );
};

export default MainPage;
