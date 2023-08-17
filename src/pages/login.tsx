/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React from "react";
import Image from "next/image";
import logo from "~/assets/logo.svg";
import { varela } from "~/utils/fonts";
import Siwe from "~/components/Siwe";
import NavBar from "~/components/NavBar";

//type Props = {}

function login() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className={`${varela.className}`}>
        <NavBar button="" />
      </div>
      <div
        className={`${varela.className} flex h-screen w-full flex-row justify-center ${varela.className}`}
      >
        <div
          className="flex h-full w-1/2 flex-col items-center justify-center"
          style={{
            backgroundImage: `url("/background-login.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: "-1",
          }}
        >
          <div className="flex h-full w-full flex-col items-center justify-center gap-8 text-white">
            <Image src={logo} alt="Logo" width={150} height={150} />
            <p className="w-[580px] text-center text-xl">Nice to see you</p>
            <div className="flex flex-col items-center gap-2 text-center text-5xl">
              <p>WELCOME TO</p>
              <p>-</p>
              <p>MeetSafe</p>
            </div>
            <p className="w-[580px] text-center text-xl">
              Decentralized platform where you can satisfy your needs and
              professionals can provide their services safely and 100%
              anonysmously, if you want.
            </p>
          </div>
        </div>
        <div className="flex h-screen w-1/2">
          <div className="flex w-full flex-col items-center justify-center gap-10">
            <span className="text-center text-5xl font-bold">Log in</span>
            <Siwe />
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
