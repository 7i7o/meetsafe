/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-floating-promises */

import { getCsrfToken, signIn, useSession } from "next-auth/react";
import { SiweMessage } from "siwe";
import { useAccount, useConnect, useNetwork, useSignMessage } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useEffect, useState } from "react";
import router from "next/router";

function Siwe() {
  const { signMessageAsync } = useSignMessage();
  const { chain } = useNetwork();
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const [buttonText, setButtonText] = useState("Connect");

  const { data: session } = useSession();

  const handleLogin = async () => {
    try {
      const callbackUrl = "/explore";
      const message = new SiweMessage({
        domain: window.location.host,
        address: address,
        statement: "Sign in with Ethereum to the app.",
        uri: window.location.origin,
        version: "1",
        chainId: chain?.id,
        nonce: await getCsrfToken(),
      });
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });
      signIn("credentials", {
        message: JSON.stringify(message),
        redirect: false,
        signature,
        callbackUrl,
      });
    } catch (error) {
      window.alert(error);

    }
  };

  useEffect(() => {
    if (!isConnected) {
      setButtonText("Connect");
    } else {
      setButtonText("Sign in");
    }
  }, [isConnected]);


  useEffect(() => {
    console.log(session);
    if (session) {
      router.push("/explorer")
    }
  }, [session]);

  return (
    <button
      className="group relative inline-flex items-center overflow-hidden rounded-full border-2 border-[#B578B0] px-12 py-3 text-lg font-medium text-[#B578B0] hover:bg-gray-50 hover:text-white"
      style={{ boxShadow: "0 8px #b3b3b2" }}
      onClick={(e) => {
        e.preventDefault();
        if (!isConnected) {
          connect();
        } else {
          handleLogin();
        }
      }}
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
      <span className="relative">{buttonText}</span>
    </button>

  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
export default Siwe;
