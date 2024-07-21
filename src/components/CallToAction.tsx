import helixImage from "../assets/images/helix2.png";
import emojiStarImage from "../assets/images/emojistar.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center">
      <div className="container max-w-xl relative overflow-hidden">
        <Image
          src={helixImage}
          alt="Helix"
          className="absolute top-6 left-[calc(100%+12px)]"
        />
        <Image
          src={helixImage}
          alt="Helix"
          className="absolute top-6 right-[calc(100%+12px)]"
        />
        {/* <Image
          src={emojiStarImage}
          alt="EmojiStar"
          className="absolute -top-[120px] right-[calc(100%+24px)]"
        /> */}

        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">
          Get instant access
        </h2>
        <p className="text-center text-xl mt-t text-white/70 ">
          Celebrate the joy of accomplishment with an app designed to track
          progress, motivate your efforts, and celebrate your successes
        </p>
        <form
          action=""
          className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row"
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="bg-white/20 h-12 font-medium px-5 placeholder:text-[#9CA3AF] rounded-lg"
          />
          <button className="bg-white text-black h-12 rounded-lg px-5">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};
