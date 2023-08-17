import React from "react";
import { varela } from "~/utils/fonts";
import check from "~/assets/check.svg";
import cross from "~/assets/cross.svg";
import Image from "next/image";

type Props = {
  title: string;
  price: number;
  check3: boolean;
  check4: boolean;
};

function Plans({ title, price, check3, check4 }: Props) {
  return (
    <div
      className={`flex h-full w-2/5 flex-col rounded-[45px]  ${varela.className}`}
      style={{ boxShadow: "-12px 12px #3a3a39" }}
    >
      <div className="flex w-full justify-center rounded-tl-[45px] rounded-tr-[45px] bg-gradient-to-tr from-[#b578b0] to-[#c18c92] px-3 py-8 text-5xl font-medium">
        {title}
      </div>
      <div className="flex flex-col items-center gap-8 py-12 text-[#2d2d2c]">
        <p className="text-lg font-semibold">Includes : </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-2">
            <Image src={check as string} alt="check" width={25} height={20} />
            <p>Unlimited exclusive content</p>
          </div>
          <div className="flex flex-row gap-2">
            <Image src={check as string} alt="check" width={25} height={20} />
            <p>Diffusion channel access</p>
          </div>
          <div className="flex flex-row gap-2">
            {check3 ? (
              <Image src={check as string} alt="check" width={25} height={20} />
            ) : (
              <Image src={cross as string} alt="cross" width={25} height={20} />
            )}
            <p>Peer to peer chat</p>
          </div>
          <div className="flex flex-row gap-2">
            {check4 ? (
              <Image src={check as string} alt="check" width={25} height={20} />
            ) : (
              <Image src={cross as string} alt="cross" width={25} height={20} />
            )}
            <p>Diffusion channel access</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-12">
          <p className="text-3xl font-semibold">{price} US$/month</p>
          <button
            style={{ boxShadow: "0 8px #3a3a39" }}
            className="rounded-full bg-gradient-to-tr from-[#b578b0] to-[#c18c92] px-20 py-3 text-gray-200"
          >
            Select this plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default Plans;
