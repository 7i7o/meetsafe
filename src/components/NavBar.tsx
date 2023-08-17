/* eslint-disable @typescript-eslint/no-misused-promises */

import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import router from "next/router";
import { useAuth0 } from "@auth0/auth0-react";

function NavBar(props: { button: string }) {
  const { button } = props;
  const { status } = useSession();

  const { loginWithRedirect } = useAuth0();
  const disconnect = async () => {
    await router.push("/");
    await signOut();
  };

  const verify = () => {
    loginWithRedirect();
  };

  return (
    <div className="absolute left-0 top-0 mt-8 flex w-full flex-row space-x-8 px-8 text-lg">
      <div className="flex w-full flex-row space-x-8 align-top text-lg">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="#" className="hover:underline">
          Solutions
        </Link>
        <Link href="#" className="hover:underline">
          Why MeetSafe
        </Link>
        <Link href="/explorer" className="hover:underline">
          Explore
        </Link>
        {status == "authenticated" && (
          <button className="m-0 -mt-3 h-full p-0" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>
      {button == "login" && (
        <button
          className="group relative inline-flex items-center overflow-hidden rounded-full border-2 border-[#B578B0] px-12 py-3 text-lg font-medium text-[#B578B0] hover:bg-gray-50 hover:text-white"
          style={{ boxShadow: "0 8px #b3b3b2" }}
        >
          <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-gradient-to-r from-[#B578B0] to-[#C18C92] opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
          <span className="ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-300 group-hover:translate-x-0">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative">{"Connect"}</span>
        </button>
      )}
      {button == "verify" && (
        <button
          className="items-center rounded-full bg-[#009f77] px-12 py-3 text-lg font-medium text-white"
          style={{ boxShadow: "0 8px #b3b3b2" }}
          onClick={verify}
        >
          VERIFY&nbsp;IDENTITY
        </button>
      )}
    </div>
  );
}

export default NavBar;
