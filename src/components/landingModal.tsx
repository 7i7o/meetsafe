import Image from "next/image";
import eye from "~/assets/eye.svg";
import lock from "~/assets/lock.svg";
import file from "~/assets/file.svg";
import forbidden from "~/assets/forbidden.svg";
import { hind, varela } from "~/utils/fonts";
import Link from "next/link";

export type LandingModalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const eyeSize = 170;
const iconSize = 20;

export default function LandingModal(props: LandingModalProps) {
  const { showModal, setShowModal } = props;

  const closeModal = () => setShowModal(false);

  return (
    <>
      {showModal && (
        <div className="z-1 h-screen w-screen bg-white/30 backdrop-blur-sm transition-all">
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden p-4 outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-full">
              <div
                className={`relative flex w-full flex-col rounded-[60px] border-0 bg-[#EFF5FF] px-12 text-[#606060] shadow-lg outline-none focus:outline-none  ${varela.className}`}
              >
                <div
                  className={`mt-10 flex w-full items-center justify-end text-right text-base font-medium`}
                >
                  <button
                    className="mr-1 cursor-pointer font-sans text-3xl font-light text-[#606060]"
                    onClick={closeModal}
                  >
                    X
                  </button>
                </div>
                <div className="my-0 flex items-center justify-center py-0 text-center text-base font-medium">
                  <Image
                    className="m-0 p-0"
                    src={eye as string}
                    alt="eye"
                    width={eyeSize}
                    height={eyeSize}
                  />
                </div>
                <div className="mt-4 flex items-center justify-center text-center text-6xl">
                  welcome viewer
                </div>
                <div className="mt-1 flex items-center justify-center text-center text-lg font-normal">
                  You are about to enter as a viewer
                </div>
                <div className="mt-4 flex w-[530px] items-start justify-start text-left text-lg font-light">
                  <Image
                    className="m-0 mt-[2px] p-0"
                    src={lock as string}
                    alt="lock"
                    width={iconSize}
                    height={iconSize}
                  />
                  <div className="ml-2">
                    Your actions will be limited: As a viewer, you will not be
                    able to perform interactive actions or participate in
                    discussions or services offered by other users.
                  </div>
                </div>
                <div className="mt-4 flex w-[530px] items-start justify-start text-left text-lg font-light">
                  <Image
                    className="m-0 mt-1 p-0"
                    src={forbidden as string}
                    alt="forbidden"
                    width={iconSize}
                    height={iconSize}
                  />
                  <div className="ml-2">
                    Limited Interaction: You will not be able to interact
                    directly with other users or access all the features
                    available to active users.
                  </div>
                </div>
                <div className="mt-4 flex w-[530px] items-start justify-start text-left text-lg font-light">
                  <Image
                    className="m-0 mt-[2px] p-0"
                    src={file as string}
                    alt="file"
                    width={iconSize}
                    height={iconSize}
                  />
                  <div className="ml-2">
                    Limited Content: Some content and functions will only be
                    available to users who choose another type of registration.
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-center text-center text-6xl">
                  <Link
                    href="/explorer"
                    className={`w-fit rounded-full bg-[#fce93a] px-14 py-3 text-3xl font-semibold text-[#2d2d2c] ${hind.className}`}
                    style={{ boxShadow: "0 8px #3a3a39" }}
                  >
                    Continue
                  </Link>
                </div>
                <div className="my-6 flex items-center justify-center text-center text-6xl">
                  <Link
                    href="/login"
                    className={`w-fit rounded-full bg-none px-14 py-3 text-xl font-semibold text-blue-500 ${hind.className}`}
                  >
                    or you can login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
