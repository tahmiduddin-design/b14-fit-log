import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-[60px] flex items-center justify-between border-b border-[#20242c] px-5">

      <div className="text-white font-bold text-lg">
        ⚒ FITLOG
      </div>

      <div className="flex gap-6 text-xs text-gray-400">

        <Link
          href="/"
          className="bg-[#243000] text-[#ccff00] px-4 py-2 rounded-full"
        >
          Workouts
        </Link>

        <Link href="/my-plan">
          My Plan
        </Link>

      </div>


      <div className="flex gap-4 text-xs">

        <div className="text-white">
          Plan
          <span className="ml-2 bg-[#ccff00] text-black rounded-full px-2 py-1">
            0
          </span>
        </div>

        <div className="text-white">
          Saved
          <span className="ml-2 border border-gray-600 rounded-full px-2 py-1">
            0
          </span>
        </div>

      </div>

    </nav>
  );
}