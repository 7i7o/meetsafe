import React from "react";
import Image from "next/image";
import logo from "~/assets/logo.svg";
import logoWorldCoin from "~/assets/Worldcoin-Logo-Dark.png";

//type Props = {}

function login() {
  return (
    <div className="flex h-screen w-full flex-row justify-center">
      <div
        className="flex h-full w-1/2 flex-col items-center justify-center"
        style={{
          backgroundImage: `url("/background-login.svg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: "-1",
        }}
      >
        <div className="flex h-full w-full flex-col items-center justify-center">
          <Image src={logo} alt="Logo" width={200} height={200} />
          <p>Nice to see you</p>
          <p>Welcome to</p>
          <p>-</p>
          <p>MeetSafe</p>
          <p>
            Decentralized platform where you can satisfy your needs and
            professionals can provide their services safely and 100%
            anonysmously, if you want.
          </p>
        </div>
      </div>
      <div className="flex h-screen w-1/2">
        <div className="flex w-full flex-col items-center justify-center">
          <span className="">Log in</span>
          <button>
            <Image src={logoWorldCoin} alt="Logo" width={200} height={300} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default login;
