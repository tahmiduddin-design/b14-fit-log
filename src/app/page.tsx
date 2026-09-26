"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkoutGrid from "@/components/WorkoutGrid";
import Loading from "@/components/Loading";

export default function Home() {

  const [workouts, setWorkouts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    async function getWorkouts() {

      const response = await fetch(
        "https://api.abcz.workers.dev/api/fitlog"
      );

      const data = await response.json();

      setWorkouts(data || []);
      setLoading(false);

    }

    getWorkouts();

  }, []);


  return (
 <main className="min-h-screen bg-[#090b0f] flex justify-center">

  <div className="w-full max-w-[1200px] px-6">
      <Navbar />

      <Hero />

      {
        loading ? (
          <Loading />
        ) : (
          <WorkoutGrid workouts={workouts} />
        )
      }

    </div>

  </main>
);

}