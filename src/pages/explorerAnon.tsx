/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Link from "next/link";
import React from "react";
import { varela } from "~/utils/fonts";
import lupa from "~/assets/lupa.svg";
import Image from "next/image";
import NavBar from "~/components/NavBar";

function explorerAnon() {
  return (
    <div
      className={`flex h-screen flex-col items-center justify-center text-gray-200 ${varela.className}`}
    >
      <NavBar button="login" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("/background.svg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: "-1",
        }}
      />
      <div className="flex w-screen flex-col items-center gap-14 space-y-8">
        <p className="text-5xl">explore services</p>
        <div className="flex h-16  w-[70%] flex-row items-center justify-center rounded-full border-transparent bg-white text-black focus:border-transparent focus:ring-0">
          <input
            className="h-full w-full rounded-full px-11 outline-none"
            placeholder="#psicologos #consultorias #diseño #tecnologia #wellness u otros servicios."
          />
          <span className="hover:cursor-pointer">
            <Image src={lupa} alt="lupa" width={70} height={70} />
          </span>
        </div>

        {/* <button */}
        <Link
          href="login"
          className="shadow- rounded-full bg-gradient-to-tr from-[#b578b0] to-[#c18c92] px-24 py-3 text-2xl font-bold text-white"
          style={{ boxShadow: "0 8px #3a3a39" }}
        >
          explore freely
        </Link>
      </div>
    </div>
  );
}

export default explorerAnon;
