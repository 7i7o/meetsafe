import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "~/assets/logo.svg";
import LandingModal from "~/components/landingModal";
import { hind, varela } from "~/utils/fonts";

const logoSize = 150;

const MainPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <LandingModal showModal={showModal} setShowModal={setShowModal} />
      <div
        className={`flex h-screen flex-col text-gray-200 ${varela.className}`}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("/background.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: "-1",
          }}
        />
        <div className="flex flex-col items-center space-y-8">
          <div className="ml-8 mt-8 flex w-full flex-row space-x-8 text-lg">
            <a href="#" className="hover:underline">
              Solutions
            </a>
            <a href="#" className="hover:underline">
              Why MeetSafe
            </a>
          </div>
          <Image
            src={logo as string}
            alt="Logo"
            width={logoSize}
            height={logoSize}
          />
          <h1 className={`text-5xl font-extralight`}>MeetSafe</h1>
          <p className="text-2xl">
            Connecting Needs, Ensure Safety, Choose your Privacy
          </p>
          <p
            className={`w-[450px] text-center text-xl font-light ${hind.className}`}
          >
            A decentralized platform where you can satisfy your needs and
            professionals can provide their services safely and 100%
            anunymously, if you want.
          </p>
          {/* <button */}
          <Link
            href="login"
            className={`shadow- rounded-full bg-gradient-to-tr from-[#b578b0] to-[#c18c92] px-24 py-3 text-2xl font-semibold text-white ${hind.className}`}
            style={{ boxShadow: "0 8px #3a3a39" }}
          >
            Join MeetSafe
          </Link>
          {/* </button> */}
          <button
            className={`rounded-full bg-[#fce93a] px-10 py-3 text-2xl font-semibold text-[#2d2d2c] ${hind.className}`}
            style={{ boxShadow: "0 8px #3a3a39" }}
            onClick={() => setShowModal(!showModal)}
          >
            enter as spectator
          </button>
          <div className="text-white">{JSON.stringify(showModal)}</div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
