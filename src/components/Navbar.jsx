import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

  return (

    <nav className="h-16 flex items-center justify-between border-b border-[#20242c]">

      <Link href="/" className="flex items-center gap-2">

        <Image
          src="/logo.png"
          width={28}
          height={28}
          alt="Fitlog"
        />

        <span className="text-white font-black text-lg">
          FITLOG
        </span>

      </Link>

      <div className="flex gap-8 text-sm text-gray-400">

        <Link 
          href="/"
          className="text-[#ccff00]"
        >
          Workouts
        </Link>

        <Link href="/my-plan">
          My Plan
        </Link>

      </div>

      <div className="text-sm text-white">

        Plan
        <span className="text-[#ccff00] ml-1">
          0
        </span>
        
        <span className="ml-5">
          Saved 0
        </span>


      </div>
      
    </nav>

  );
}