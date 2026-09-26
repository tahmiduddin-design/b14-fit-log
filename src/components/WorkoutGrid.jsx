import WorkoutCard from "./WorkoutCard";

export default function WorkoutGrid({ workouts }) {

  if (!workouts || workouts.length === 0) {
    return (
      <section className="w-full mt-10">

        <h2 className="text-white text-3xl font-black">
          THE LIBRARY
        </h2>

        <p className="text-gray-400 mt-2">
          Twelve lifts covering every major muscle group.
        </p>

        <div className="text-gray-400 mt-10">
          No workouts found
        </div>

      </section>
    );
  }


  return (

    <section className="w-full mt-10">

      <h2 className="text-white text-3xl font-black">
        THE LIBRARY
      </h2>

      <p className="text-gray-400 mt-2 mb-6">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6w-full">

        {
          workouts.map((workout)=>(
            
            <WorkoutCard

              key={workout.id}

              workout={workout}

            />

          ))
        }


      </div>


    </section>

  );
}