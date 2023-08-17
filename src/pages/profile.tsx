import Image from "next/image";
import React from "react";
import NavBar from "~/components/NavBar";
import banner from "~/assets/banner.svg";
import profileimage from "~/assets/profile.svg";
import worldcoin from "~/assets/worldcoin.svg";
import starts from "~/assets/stars.svg";

type Props = {};

function profile({}: Props) {
  return (
    <section className="flex h-full w-full flex-col gap-2 bg-gradient-to-r from-black to-[#545452] text-gray-200">
      <NavBar />
      <div className="mb-32 mt-32 flex h-screen w-[85%] flex-col self-center rounded-[75px] bg-white">
        <div className="flex h-full w-full flex-col items-start">
          {
            // image
          }
          <div className="relative flex h-96 w-full">
            <Image
              src={banner}
              fill={true}
              alt="banner"
              className="rounded-tl-[75px] rounded-tr-[75px]"
              style={{ objectFit: "cover" }}
            />
          </div>
          {
            // profile
          }
          <div className="flex w-full flex-row">
            <div className="relative -mt-32 ml-16 flex h-64 w-64 rounded-full bg-white">
              <Image
                src={profileimage}
                fill={true}
                alt="banner"
                className="rounded-full"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex w-[70%] flex-row justify-between px-10 pt-6 text-[#545452]">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center justify-center gap-2">
                  <h3 className="text-4xl font-semibold ">Alexis Bennett</h3>
                  <Image
                    src={worldcoin}
                    alt="wordlcoin"
                    width={45}
                    height={45}
                    className="mt-[5px]"
                  />
                </div>
                <span className="text-2xl font-thin">Consultant</span>
              </div>
              <button className="h-11 w-48 rounded-full bg-[#545452] text-2xl text-gray-200 transition-all hover:cursor-pointer hover:bg-gray-700">
                Contact
              </button>
            </div>
          </div>
          <div className="mt-3 flex flex-col">
            <Image
              src={starts}
              alt="stars"
              width={340}
              height={400}
              className="ml-8"
            />
            <p className="w-[88%] self-center pr-24 text-[#545452]">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los mezcló de tal manera que logró hacer
              un libro de textos especimen. No sólo sobrevivió 500 años
            </p>
          </div>
        </div>
        <div>another container</div>
      </div>
    </section>
  );
}

export default profile;
