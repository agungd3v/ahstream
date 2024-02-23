import { useState } from "react";
import { Staatliches } from "next/font/google";
import Image from "next/image";
import ModalTrailer from "./ModalTrailer";

const font = Staatliches({
  subsets: ["latin"],
  weight: ["400"]
});

export default function HomeDefaultStream() {
  const [trailer, setTrailer] = useState<boolean>(false);

  const openTrailer = () => {
    setTrailer(true);
  }

  return (
    <>
      <div className="select-none px-5 lg:px-[84px]">
        <div className={`uppercase text-white text-5xl lg:text-8xl w-full lg:w-[60%] ${font.className}`} style={{fontWeight: 700}}>the star is born</div>
        <div className="text-white flex flex-col gap-3 lg:gap-5 mt-3 lg:mt-8 w-full lg:w-[40%]">
          <div className="text-sm">
            <span>2018</span>
          </div>
          A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.
          <div className="flex gap-2 justify-start lg:justify-between items-center mt-3 lg:mt-8">
            <button
              type="button"
              className="flex items-center bg-primary rounded-[4px] text-black text-sm font-bold h-[36px] px-[12px] gap-[4px] border border-primary"
            >
              <Image src={"/icons/ic_play.png"} width={24} height={24} alt="play button" />
              Play
            </button>
            <button
              type="button"
              className="flex items-center bg-secondary rounded-[4px] text-white text-sm font-bold h-[36px] px-[12px] gap-[4px] border border-secondary"
              onClick={openTrailer}
            >
              <Image src={"/icons/ic_play_white.png"} width={24} height={24} alt="play button" />
              Trailer
            </button>
          </div>
        </div>
      </div>
      <ModalTrailer isOpen={trailer} callback={(bool: boolean) => setTrailer(bool)} />
    </>
  )
}