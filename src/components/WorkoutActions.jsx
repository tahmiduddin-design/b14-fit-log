"use client";

import { useFitlog } from "@/context/FitlogContext";
import toast from "react-hot-toast";

export default function WorkoutActions({ workout }) {


  const {
    addToPlan,
    saveWorkout
  } = useFitlog();

  return (

    <div className="flex gap-3 mt-8">


  <button

    onClick={() => {

      addToPlan(workout);

      toast.success(
        `${workout.name} added to today's plan`
      );

    }}

    className="bg-[#ccff00] text-black px-5 py-3 rounded font-bold text-sm"

  >

    🗓 Add to today's plan

  </button>

  <button

    onClick={() => {

      saveWorkout(workout);

      toast.success(
        `${workout.name} saved`
      );

    }}

    className="border border-gray-700 px-5 py-3 rounded text-sm text-white"

  >

    ♧ Save for later

  </button>


</div>

  );

}