import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0d10]">

      <div className="max-w-[1040px] mx-auto">

        <Navbar />

        <Hero />

      </div>

    </main>
  );
}