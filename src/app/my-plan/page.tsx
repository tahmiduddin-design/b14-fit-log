"use client";

import Link from "next/link";
import { useState } from "react";
import { useFitlog } from "@/context/FitlogContext";


export default function MyPlan() {


  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved
  } = useFitlog();


  const [activeTab, setActiveTab] = useState("plan");
  const [sortType, setSortType] = useState("duration");

  let currentList = activeTab === "plan" ? [...plan] : [...saved];

  if (sortType === "duration") {

    currentList.sort(
      (a, b) => a.duration - b.duration
    );

  }

  if (sortType === "calories") {

    currentList.sort(
      (a, b) => b.caloriesBurned - a.caloriesBurned
    );

  }

  const totalMinutes = currentList.reduce(
    (sum, item) => sum + item.duration,
    0
  );

  const totalCalories = currentList.reduce(
    (sum, item) => sum + item.caloriesBurned,
    0
  );

  return (

    <main className="min-h-screen bg-[#090b0f] text-white">

      <div className="max-w-[1120px] mx-auto px-6">

        <div className="h-16 flex items-center justify-between border-b border-[#20242c]">

          <div className="font-black text-xl">
            ⚒ FITLOG
          </div>

          <div className="flex gap-8 text-sm text-gray-400">

            <Link href="/">
              Workouts
            </Link>

            <span className="bg-[#1c2b0b] text-[#ccff00] px-4 py-2 rounded-full">
              My Plan
            </span>
          </div>

          <div className="text-xs text-gray-300">

            Plan <span className="text-[#ccff00]">{plan.length}</span>

            <span className="ml-5">
              Saved {saved.length}
            </span>

          </div>

        </div>

        <section className="mt-8 p-8 bg-[#0d1015] rounded-xl">

          <div>

            <h1 className="text-2xl font-black">
              MY PLAN
            </h1>

            <p className="text-gray-500 text-sm mt-1">
              Cap of five lifts for today. Finish them, then load more.
            </p>

          </div>

          <div className="grid grid-cols-3 bg-[#15181e] border border-[#20242c] rounded-xl mt-6 py-8">


            <div className="px-8 border-r border-[#20242c]">

              <p className="text-gray-500 text-xs">
                Exercises
              </p>

              <h2 className="text-[#ccff00] text-3xl font-black mt-2">
                {currentList.length}
              </h2>

            </div>

            <div className="px-8 border-r border-[#20242c]">

              <p className="text-gray-500 text-xs">
                Minutes
              </p>

              <h2 className="text-white text-3xl font-black mt-2">
                {totalMinutes}
              </h2>

            </div>
            
            <div className="px-8">

              <p className="text-gray-500 text-xs">
                Calories
              </p>

              <h2 className="text-white text-3xl font-black mt-2">
                {totalCalories}
              </h2>

            </div>

          </div>

          <div className="bg-[#15181e] border border-[#20242c] rounded-xl mt-5 p-2 flex justify-between">

            <div className="flex gap-2">

              <button

                onClick={() => setActiveTab("plan")}

                className={
                  activeTab === "plan"
                    ? "bg-[#252b35] px-5 py-2 rounded text-white text-sm"
                    : "px-5 py-2 text-gray-500 text-sm"
                }

              >

                Today's Plan

              </button>

              <button

                onClick={() => setActiveTab("saved")}

                className={
                  activeTab === "saved"
                    ? "bg-[#252b35] px-5 py-2 rounded text-white text-sm"
                    : "px-5 py-2 text-gray-500 text-sm"
                }

              >

                Saved

              </button>

            </div>

            <select

              value={sortType}

              onChange={(e) => setSortType(e.target.value)}

              className="bg-[#15181e] border border-[#20242c] text-gray-400 text-sm px-3 py-2 rounded"

            >
              <option value="duration">
                Duration
              </option>

              <option value="calories">
                Calories
              </option>

            </select>

          </div>

          {
            currentList.length === 0 ? (

              <div className="bg-[#0d1015] border border-[#20242c] rounded-xl mt-5 h-[300px] flex flex-col items-center justify-center">

                <h2 className="text-xl font-black">
                  NOTHING HERE YET
                </h2>

                <p className="text-gray-500 text-sm mt-2">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link href="/" className="bg-[#ccff00] text-black px-6 py-3 rounded-full mt-5 text-sm font-bold">Go to workouts</Link>
               </div>
               ):(

                <div className="mt-5 space-y-3">
                  {
                    currentList.map((item) => (

                      <div

                        key={item.id}

                        className="bg-[#15181e] border border-[#20242c] rounded-xl p-5 flex justify-between"

                      >


                        <div>

                          <h3 className="font-bold">
                            {item.name}
                          </h3>


                          <p className="text-gray-500 text-sm mt-1">

                            {item.duration} min • {item.caloriesBurned} kcal

                          </p>


                        </div>




                        <button

                          onClick={() =>
                            activeTab === "plan"
                              ? removeFromPlan(item.id)
                              : removeFromSaved(item.id)
                          }

                          className="text-red-400 text-sm"

                        >

                          Remove

                        </button>



                      </div>


                    ))
                  }



                </div>


              )

          }





        </section>




      </div>


    </main>


  );


}