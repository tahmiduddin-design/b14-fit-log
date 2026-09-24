import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mt-8 h-[290px] bg-[#15181e] rounded-xl border border-[#20242c] px-12 flex items-center justify-between">

      <div className="w-[520px]">

        <p className="text-[#ccff00] text-[10px] font-bold mb-4">
          WORKOUT LIBRARY
        </p>

        <h1 className="text-white text-[42px] font-black leading-[1]">
          TRAIN WITH INTENT. LOG
          <br />
          EVERY SET.
        </h1>

        <p className="text-gray-400 text-xs mt-5 w-[400px]">
          FitLog is a dark, no-nonsense gym companion: pick a lift,
          lock it into today's plan, and watch the week's work add up.
        </p>


        <Link href="#library">
          <button className="mt-5 bg-[#ccff00] text-black text-xs font-bold px-5 py-2">
            BROWSE WORKOUTS
          </button>
        </Link>

      </div>


      <Image
        src="/banner.png"
        width={240}
        height={240}
        alt="banner"
      />


    </section>
  );
}