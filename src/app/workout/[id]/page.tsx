import Image from "next/image";
import Link from "next/link";
import WorkoutActions from "@/components/WorkoutActions";


async function getWorkout(id:string){

  const res = await fetch(
    "https://api.abcz.workers.dev/api/fitlog",
    {
      cache:"no-store"
    }
  );


  const data = await res.json();


  return data.find(
    (item:any)=>item.id.toString() === id
  );

}





export default async function Page({

  params,

}:{

  params:Promise<{id:string}>

}){


  const {id}= await params;


  const workout = await getWorkout(id);



  if(!workout){

    return (

      <div className="min-h-screen bg-[#090b0f] text-white flex items-center justify-center">

        Workout Not Found

      </div>

    )

  }



  return (

    <main className="min-h-screen bg-[#090b0f] text-white">

      <div className="max-w-[1120px] mx-auto px-6">

        <div className="h-16 flex items-center justify-between border-b border-gray-800">


          <div className="font-black text-xl">

            ⚒ FITLOG

          </div>

          <div className="flex gap-10 text-sm text-gray-300">

            <Link href="/">
              Workouts
            </Link>

            <Link href="/my-plan">
              My Plan
            </Link>

          </div>

          <div className="text-xs">

            Plan 🟢 &nbsp; Saved 0

          </div>

        </div>

        <section className="grid grid-cols-2 gap-8 mt-8">

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

            <h1 className="text-4xl font-black uppercase">

              {workout.name}

            </h1>

            <p className="text-gray-400 text-sm mt-3">

              {workout.description}

            </p>





            <div className="flex gap-2 mt-4">


              {
                workout.muscleGroups.map(
                  (item:string,index:number)=>(

                  <span

                  key={index}

                  className="bg-[#ccff00] text-black px-3 py-1 rounded-full text-xs font-bold"

                  >

                    {item}

                  </span>

                ))
              }


            </div>

            <div className="bg-[#15181e] rounded-xl mt-6 border border-gray-800">

              <div className="flex justify-between px-5 py-4 border-b border-gray-800 text-sm">

                <span className="text-gray-400">EQUIPMENT</span>

                <span>{workout.equipment}</span>

              </div>

              <div className="flex justify-between px-5 py-4 border-b border-gray-800 text-sm">

                <span className="text-gray-400">DIFFICULTY</span>

                <span>{workout.difficulty}</span>

              </div>

              <div className="flex justify-between px-5 py-4 border-b border-gray-800 text-sm">

                <span className="text-gray-400">SETS</span>

                <span>{workout.sets}</span>

              </div>

              <div className="flex justify-between px-5 py-4 border-b border-gray-800 text-sm">

                <span className="text-gray-400">REPS</span>

                <span>{workout.reps}</span>

              </div>

              <div className="flex justify-between px-5 py-4 border-b border-gray-800 text-sm">

                <span className="text-gray-400">DURATION</span>

                <span>{workout.duration} min</span>

              </div>

              <div className="flex justify-between px-5 py-4 border-b border-gray-800 text-sm">

                <span className="text-gray-400">CALORIES</span>

                <span>{workout.caloriesBurned} kcal</span>

              </div>

              <div className="flex justify-between px-5 py-4 text-sm">

                <span className="text-gray-400">RATING</span>

                <span>{workout.rating}</span>

              </div>


            </div>

            <h2 className="font-bold mt-8 mb-4">INSTRUCTIONS</h2>

            <ol className="text-gray-400 text-sm space-y-3 list-decimal pl-5">

              {
                workout.instructions.map(

                  (item:string,index:number)=>(

                    <li key={index}>

                      {item}

                    </li>

                  )

                )
              }


            </ol>

            <WorkoutActions workout={workout}/>

          </div>

        </section>

      </div>

    </main>

  );


}