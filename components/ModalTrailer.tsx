import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Hls from "hls.js";

interface CProps {
  isOpen: boolean;
  callback(v: boolean): void;
}

export default function ModalTrailer({isOpen, callback}: CProps) {
  const [loadTrailer, setLoadTrailer] = useState<boolean>(false);

  const myRef = useRef<any>(null);

  useEffect(() => {
    if (isOpen) {
      setLoadTrailer(true);
      if (Hls.isSupported()) {
        setTimeout(() => {
          const hls = new Hls();
          hls.loadSource("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8");
          hls.attachMedia(myRef.current);
          setLoadTrailer(false);
        }, 1000);
      }
    }
  }, [isOpen, myRef]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => callback(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full lg:w-[80%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 flex items-center justify-between"
                >
                  <div className="ellipsis-1line uppercase font-bold">Movie title 1</div>
                  <button type="button" onClick={() => callback(false)}>
                    <Image src={"/icons/ic_close.png"} width={32} height={32} alt="close icon" />
                  </button>
                </Dialog.Title>
                <div className="mt-2">
                  {isOpen ? (
                    <>
                      <video
                        controls
                        ref={myRef}
                        style={{height: 540, width: "100%"}}
                        className={loadTrailer ? "hidden" : ""}
                      ></video>
                      <div
                        style={{height: 540}}
                        className={`font-semibold text-xl flex flex-col items-center justify-center ${!loadTrailer ? "hidden" : ""}`}
                      >
                        <span className="loader"></span>
                      </div>
                    </>
                  ) : (
                    <div style={{height: 540}}></div>
                  )}
                </div>

                {/* <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeTrailer}
                  >
                    Got it, thanks!
                  </button>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}