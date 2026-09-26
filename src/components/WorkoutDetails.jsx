"use client";

import Image from "next/image";
import Link from "next/link";
import { useFitlog } from "@/context/FitlogContext";


export default function WorkoutDetails({ workout }) {


    const {
        addToPlan,
        saveWorkout
    } = useFitlog();

    return (

        <main className="min-h-screen bg-[#090b0f] text-white">


            <div className="max-w-[1120px] mx-auto px-6">

                <div className="h-16 flex items-center justify-between border-b border-[#20242c]">

                    <Link
                        href="/"
                        className="font-black text-xl"
                    >
                        ⚒ FITLOG
                    </Link>

                    <div className="flex gap-8 text-sm text-gray-400">

                        <Link href="/">
                            Workouts
                        </Link>

                        <Link href="/my-plan">
                            My Plan
                        </Link>

                    </div>

                    <div className="text-sm">

                        Plan
                        <span className="text-[#ccff00] ml-1">
                            0
                        </span>

                        <span className="ml-5">
                            Saved 0
                        </span>

                    </div>

                </div>

                <section className="grid grid-cols-2 gap-8 mt-10">

                    <div>

                        <Image

                            src={workout.image}

                            width={500}

                            height={500}

                            alt={workout.name}

                            className="rounded-xl w-full h-[500px] object-cover"

                        />

                    </div>

                    <div>


                        <h1 className="text-4xl font-black">
                            {workout.name}
                        </h1>



                        <p className="text-gray-400 mt-3">
                            {workout.description}
                        </p>

                        <div className="flex gap-2 mt-4">


                            {
                                workout.muscleGroups.map((item, index) => (

                                    <span

                                        key={index}

                                        className="bg-[#ccff00] text-black px-2 py-1 text-xs font-bold rounded"

                                    >

                                        {item}

                                    </span>


                                ))
                            }


                        </div>

                        <div className="mt-6 bg-[#15181e] rounded-xl border border-[#20242c]">


                            <div className="flex justify-between p-4 border-b border-[#20242c]">

                                <span className="text-gray-500 text-sm">
                                    EQUIPMENT
                                </span>


                                <span>
                                    {workout.equipment}
                                </span>


                            </div>

                            <div className="flex justify-between p-4 border-b border-[#20242c]">

                                <span className="text-gray-500 text-sm">
                                    DIFFICULTY
                                </span>


                                <span>
                                    {workout.difficulty}
                                </span>


                            </div>

                            <div className="flex justify-between p-4 border-b border-[#20242c]">

                                <span className="text-gray-500 text-sm">
                                    SETS
                                </span>


                                <span>
                                    {workout.sets}
                                </span>


                            </div>

                            <div className="flex justify-between p-4 border-b border-[#20242c]">

                                <span className="text-gray-500 text-sm">
                                    REPS
                                </span>


                                <span>
                                    {workout.reps}
                                </span>


                            </div>

                            <div className="flex justify-between p-4 border-b border-[#20242c]">

                                <span className="text-gray-500 text-sm">
                                    DURATION
                                </span>


                                <span>
                                    {workout.duration} min
                                </span>


                            </div>

                            <div className="flex justify-between p-4">

                                <span className="text-gray-500 text-sm">
                                    CALORIES
                                </span>


                                <span>
                                    {workout.caloriesBurned} kcal
                                </span>


                            </div>


                        </div>

                        <h2 className="font-bold mt-8 mb-4">
                            INSTRUCTIONS
                        </h2>

                        <ol className="space-y-3 text-sm text-gray-400 list-decimal pl-5">

                            {
                                workout.instructions.map((item, index) => (

                                    <li key={index}>
                                        {item}
                                    </li>

                                ))
                            }


                        </ol>

                        <div className="flex gap-3 mt-8">

                            <button

                                onClick={() => addToPlan(workout)}

                                className="bg-[#ccff00] text-black px-5 py-3 rounded font-bold text-sm"

                            >

                                🗒 Add to today's plan

                            </button>

                            <button

                                onClick={() => saveWorkout(workout)}

                                className="border border-[#303640] px-5 py-3 rounded font-bold text-sm"

                            >

                                ♧ Save for later

                            </button>

                        </div>

                    </div>

                </section>
            </div>

        </main>

    );

}