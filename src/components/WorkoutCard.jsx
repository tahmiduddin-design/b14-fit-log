import Image from "next/image";
import Link from "next/link";


export default function WorkoutCard({ workout }) {


  return (

    <Link href={`/workout/${workout.id}`}>

      <div className="bg-[#15181e] rounded-xl overflow-hidden border border-[#20242c] cursor-pointer hover:border-[#ccff00] transition">

        <div className="relative">

          <Image

            src={workout.image}

            width={400}

            height={240}

            alt={workout.name}

            className="w-full h-[220px] object-cover"

          />


        </div>

        <div className="p-5">

          <div className="flex gap-2 mb-4">

            {
              workout.muscleGroups.map((item,index)=>(

                <span

                  key={index}

                  className="bg-[#ccff00] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase"

                >

                  {item}

                </span>


              ))
            }


          </div>

          <h3 className="text-white text-base font-black uppercase">

            {workout.name}

          </h3>

          <p className="text-gray-400 text-xs mt-2">

            {workout.equipment}

          </p>

          <div className="flex justify-between items-center mt-5 text-xs text-gray-400">


            <div>

              ⏱ {workout.duration} min

            </div>

            <div>

              🔥 {workout.caloriesBurned} kcal

            </div>

            <div>

              ⭐ {workout.rating}

            </div>

          </div>

        </div>

      </div>

    </Link>

  );

}