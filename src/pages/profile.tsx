import Image from "next/image";
import React from "react";
import NavBar from "~/components/NavBar";
import banner from "~/assets/banner.svg";
import profileimage from "~/assets/profile.svg";
import worldcoin from "~/assets/worldcoin.svg";
import starts from "~/assets/stars.svg";
import placeholderimage from "~/assets/placeholder.svg";
import star from "~/assets/star.svg";

function profile() {
  return (
    <section className="flex h-full w-full flex-col gap-2 bg-gradient-to-r from-black to-[#545452] text-gray-200">
      <NavBar />
      <div className="mb-32 mt-32 flex h-full w-[85%] flex-col self-center rounded-[75px] bg-white pb-24">
        <div className="flex h-full w-full flex-col items-start gap-6 ">
          {
            // image
          }
          <div className="relative flex h-96 min-h-[340px] w-full">
            <Image
              src={banner as string}
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
                src={profileimage as string}
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
                    src={worldcoin as string}
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
              src={starts as string}
              alt="stars"
              width={340}
              height={400}
              className="ml-8"
            />
            <p className="w-[88%] self-center pr-24 text-[#545452]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also,Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also
            </p>
          </div>
          {
            // user profile
          }
          <div className="ml-20 flex w-[85%] flex-col items-center justify-center">
            <div className="flex h-full w-full flex-col gap-7 rounded-3xl bg-gray-200 px-10 py-8 text-[#545452]">
              <h5 className="text-3xl font-semibold">Languages</h5>
              <div className="flex flex-col gap-2">
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <div className="ml-20 flex w-[85%] flex-col items-center justify-center">
            <div className="flex h-full w-full flex-col gap-7 rounded-3xl bg-gray-200 px-10 py-8 text-[#545452]">
              <h5 className="text-3xl font-semibold">
                Certification and education
              </h5>
              <div className="flex flex-col gap-2">
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <div className="ml-20 flex w-[85%] flex-col items-center justify-center">
            <div className="flex h-full w-full flex-col gap-7 rounded-3xl bg-gray-200 px-10 py-8 text-[#545452]">
              <h5 className="text-3xl font-semibold">Experience</h5>
              <div className="flex flex-col gap-2">
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <div className="ml-20 flex w-[85%] flex-col items-center justify-center">
            <div className="flex h-full w-full flex-row justify-start gap-20 rounded-3xl bg-gray-200 px-10 py-8 text-[#545452]">
              <div className=" w-2/3 rounded-2xl bg-white px-6 py-5">
                <Image
                  src={placeholderimage as string}
                  alt="placeholder"
                  height={250}
                  width={250}
                />
              </div>
              <div className="flex flex-col gap-7 pt-5">
                <h5 className="text-3xl font-semibold">Portfolio</h5>
                <div className="flex flex-col gap-2">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-20 flex w-[85%] flex-col items-center justify-center">
            <div className="flex h-full w-full flex-col justify-start gap-5 rounded-3xl bg-gray-200 px-10 py-8 text-[#545452]">
              <h5 className="text-3xl font-semibold">Raitings</h5>
              <div className="flex flex-row items-center">
                <Image
                  alt="star"
                  src={star as string}
                  width={100}
                  height={100}
                />
                <p className="flex flex-row items-center gap-2 text-4xl font-bold">
                  4.0<span className="text-2xl font-thin">{"(3)"}</span>
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex w-full flex-row items-center justify-center gap-2">
                  <span className="text-lg font-semibold">5</span>
                  <div className="h-2.5 w-full rounded-full bg-white">
                    <div
                      className="h-2.5 rounded-full bg-yellow-400"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex w-full flex-row items-center justify-center gap-2">
                  <span className="text-lg font-semibold">4</span>
                  <div className="h-2.5 w-full rounded-full bg-white">
                    <div
                      className="h-2.5 rounded-full bg-yellow-400"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex w-full flex-row items-center justify-center gap-2">
                  <span className="text-lg font-semibold">3</span>
                  <div className="h-2.5 w-full rounded-full bg-white">
                    <div
                      className="h-2.5 rounded-full bg-yellow-400"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex w-full flex-row items-center justify-center gap-2">
                  <span className="text-lg font-semibold">2</span>
                  <div className="h-2.5 w-full rounded-full bg-white">
                    <div
                      className="h-2.5 rounded-full bg-yellow-400"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex w-full flex-row items-center justify-center gap-2">
                  <span className="text-lg font-semibold">1</span>
                  <div className="h-2.5 w-full rounded-full bg-white">
                    <div
                      className="h-2.5 rounded-full bg-yellow-400"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default profile;
