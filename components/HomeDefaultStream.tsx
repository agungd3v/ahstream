import { Staatliches } from "next/font/google";
import Image from "next/image";

const font = Staatliches({
  subsets: ["latin"],
  weight: ["400"]
});

export default function HomeDefaultStream() {
  return (
    <div className="select-none px-5 xl:px-[84px]">
      <div className={`text-white text-5xl xl:text-8xl w-full xl:w-[50%] ${font.className}`}>the star is born</div>
      <div className="text-white flex flex-col gap-3 xl:gap-5 mt-3 xl:mt-8 w-full xl:w-[40%]">
        <div className="text-sm">
          <span>2018</span>
        </div>
        A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.
        <div className="flex gap-2 justify-start xl:justify-between items-center mt-3 xl:mt-8">
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
          >
            <Image src={"/icons/ic_play_white.png"} width={24} height={24} alt="play button" />
            Trailer
          </button>
        </div>
      </div>
    </div>
  )
}