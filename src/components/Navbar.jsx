import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#111318] border-b border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <div className="text-white font-bold text-xl">
          ⚒ FITLOG
        </div>

        <div className="flex gap-8 text-gray-400">
          <Link href="/">
            Workouts
          </Link>

          <Link href="/my-plan">
            My Plan
          </Link>
        </div>

        <div className="flex gap-3">
          <div className="bg-[#ccff00] text-black px-4 py-1 rounded-full text-sm font-bold">
            Plan 0
          </div>

          <div className="border border-gray-600 text-white px-4 py-1 rounded-full text-sm">
            Saved 0
          </div>
        </div>

      </div>
    </nav>
  );
}