import Image from "next/image";
import eye from "~/assets/eye.svg";

export type LandingModalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const eyeSize = 170;

export default function LandingModal(props: LandingModalProps) {
  const { showModal, setShowModal } = props;

  const closeModal = () => setShowModal(false);

  return (
    <>
      {showModal && (
        <div className="z-1 h-screen w-screen bg-white/30 backdrop-blur-sm transition-all">
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden p-4 outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-full">
              <div className="relative flex w-full flex-col rounded-[60px] border-0 bg-[#EFF5FF] shadow-lg outline-none focus:outline-none">
                <div className="mt-10 flex w-full items-center justify-end text-right text-base font-medium">
                  <button
                    className="mr-12 cursor-pointer text-3xl font-light"
                    onClick={closeModal}
                  >
                    X
                  </button>
                </div>
                <div className="my-0 flex items-center justify-center py-0 text-center text-base font-medium">
                  <Image
                    src={eye as string}
                    alt="eye"
                    width={eyeSize}
                    height={eyeSize}
                  />
                </div>
                <div className="mt-6 flex items-center justify-center text-center text-3xl font-light">
                  welcome viewer
                </div>
                <div className="mt-6 flex items-center justify-center text-center text-3xl font-light">
                  You are about to enter as a viewer
                </div>
                <div className="relative flex-auto gap-4 p-6">
                  <button
                    onClick={() => null}
                    className="rounded-full bg-white px-4 py-2 text-[#2375EF] hover:bg-[#F9FBFF]"
                  >
                    Enter
                  </button>
                  <button
                    onClick={closeModal}
                    className="ml-4 rounded-full bg-white px-4 py-2 text-[#EF7523] hover:bg-[#F9FBFF]"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
