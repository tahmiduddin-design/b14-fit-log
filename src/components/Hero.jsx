import Image from "next/image";

export default function Hero() {

  return (

    <section className="mt-10 w-full h-[300px] bg-[#15181e] rounded-xl border border-gray-800 px-10 flex items-center justify-between overflow-hidden">

      <div className="w-[55%]">

        <p className="text-[#ccff00] text-xs font-bold tracking-wider mb-4">
          WORKOUT LIBRARY
        </p>

        <h1 className="text-white text-[42px] font-black leading-[1.05]">
          TRAIN WITH INTENT. LOG
          <br />
          EVERY SET.
        </h1>

        <p className="text-gray-400 text-sm mt-4 max-w-[420px] leading-5">
          FitLog is a dark, no-nonsense gym companion: pick a lift,
          lock it into today's plan, and watch the week's work add up.
        </p>

        <button className="mt-5 bg-[#ccff00] text-black px-5 py-3 rounded text-xs font-bold">
          BROWSE WORKOUTS
        </button>
      </div>
      <div className="w-[45%] flex justify-end">
        <Image
          src="/banner.png"
          width={240}
          height={240}
          alt="banner"
          className="object-contain"
        />
      </div>

    </section>

  );

}