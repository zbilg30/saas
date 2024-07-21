import Image from "next/image";
import ArrowW from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";

export const Hero = () => {
  return (
    <div className="bg-black relative overflow-clip  text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px]">
      <div className="absolute w-[750px] h-[375px] sm:w-[1536px] sm:h-[768px] sm:py-24 rounded-[100%] bg-black -translate-x-1/2  left-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative ">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="border inline-flex gap-3 py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] bg-clip-text text-transparent [-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              Read more
              <ArrowW />
            </span>
          </a>
        </div>
        <div className="flex justify-center">
          <div className="inline-flex relative">
            <h1 className="text-7xl font-bold tracking-tighter text-center mt-8">
              One Task <br /> at a time
              <Image
                width={"200"}
                height={"200"}
                className="absolute right-[256px] top-[120px] hidden sm:inline"
                src={cursorImage}
                alt="Cursor"
              />
              <Image
                src={messageImage}
                alt="Message"
                width={"200"}
                height={"200"}
                className="absolute right-[-206px] top-[18px] hidden sm:inline"
              />
              {/*
               */}
            </h1>
          </div>
        </div>
        <div className="flex justify-center max-w-xs mx-auto">
          <p className="text-center text-xl mt-8 ">
            Celebrate the joy of accomplishment with an app designed to track
            progress, motivate your efforts, and celebrate your successes
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};
