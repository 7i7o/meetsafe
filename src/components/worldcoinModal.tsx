import Image from "next/image";
import worldcoin from "~/assets/Worldcoin-Logo-Dark.png";
import { hind, varela } from "~/utils/fonts";

export type LandingModalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const iconSize = 200;

export default function WorldCoinModal(props: LandingModalProps) {
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
                {/* <div className="my-0 flex items-center justify-center py-0 text-center text-base font-medium">
                  <Image
                    className="m-0 p-0"
                    src={eye as string}
                    alt="eye"
                    width={eyeSize}
                    height={eyeSize}
                  />
                </div> */}
                <div
                  className={`mt-4 flex items-center justify-center text-center text-4xl text-[#009f77] ${hind.className}`}
                >
                  VERIFY YOUR IDENTITY
                </div>
                <div
                  className={`mt-1 flex items-center justify-center text-center text-lg font-normal ${hind.className}`}
                >
                  access all functionalities without loosing anonimity
                </div>
                <div
                  className={`mt-4 flex w-[500px] items-start justify-start text-left text-base font-light ${hind.className}`}
                >
                  Hello! At MeetSelf, we value your security and privacy.
                  Verifying your identity allows you to access a more reliable
                  experience and benefit from exclusive content and advanced
                  features. Take the opportunity to connect in an authentic and
                  trustworthy way.
                </div>
                <div
                  className={`mt-4 flex w-[500px] items-start justify-start text-left text-base font-light ${hind.className}`}
                >
                  <div>
                    Verify your identity quickly and securely{" "}
                    <span className="font-semibold">using the World ID</span>{" "}
                    Your well-being is our priority!
                  </div>
                </div>
                <div className="mt-4 flex w-[530px] items-center justify-center text-left text-lg font-light">
                  <div className="rounded-2xl border">
                    <Image
                      className="m-0 mt-[2px] p-0"
                      src={worldcoin}
                      alt="worldcoin"
                      width={iconSize}
                      height={iconSize}
                    />
                  </div>
                </div>
                <div className="my-6 flex items-center justify-center text-center text-6xl">
                  {/* <Link
                    href="/explorer"
                    className={`w-fit rounded-full bg-[#fce93a] px-14 py-3 text-3xl font-semibold text-[#2d2d2c] ${hind.className}`}
                    style={{ boxShadow: "0 8px #3a3a39" }}
                  >
                    Continue
                  </Link> */}
                  <button
                    className="items-center rounded-full bg-[#009f77] px-12 py-3 text-lg font-medium text-white"
                    style={{ boxShadow: "0 8px #b3b3b2" }}
                  >
                    VERIFY&nbsp;IDENTITY
                  </button>
                </div>
                {/* <div className="my-6 flex items-center justify-center text-center text-6xl">
                  <Link
                    href="/login"
                    className={`w-fit rounded-full bg-none px-14 py-3 text-xl font-semibold text-blue-500 ${hind.className}`}
                  >
                    or you can login
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
