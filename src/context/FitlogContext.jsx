"use client";

import { createContext, useContext, useEffect, useState } from "react";


const FitlogContext = createContext();



export function FitlogProvider({ children }) {


  const [plan, setPlan] = useState([]);

  const [saved, setSaved] = useState([]);

  const [done, setDone] = useState([]);




  useEffect(() => {

    const savedPlan = localStorage.getItem("plan");
    const savedWorkout = localStorage.getItem("saved");
    const savedDone = localStorage.getItem("done");


    if(savedPlan){
      setPlan(JSON.parse(savedPlan));
    }


    if(savedWorkout){
      setSaved(JSON.parse(savedWorkout));
    }


    if(savedDone){
      setDone(JSON.parse(savedDone));
    }


  }, []);





  useEffect(()=>{

    localStorage.setItem(
      "plan",
      JSON.stringify(plan)
    );

  },[plan]);





  useEffect(()=>{

    localStorage.setItem(
      "saved",
      JSON.stringify(saved)
    );

  },[saved]);





  useEffect(()=>{

    localStorage.setItem(
      "done",
      JSON.stringify(done)
    );

  },[done]);






  function addToPlan(workout){


    setPlan((prev)=>{


      if(prev.length >= 5){
        return prev;
      }



      const exists = prev.find(
        (item)=>item.id === workout.id
      );



      if(exists){
        return prev;
      }



      return [...prev, workout];


    });


  }






  function saveWorkout(workout){


    setSaved((prev)=>{


      const exists = prev.find(
        (item)=>item.id === workout.id
      );


      if(exists){
        return prev;
      }


      return [...prev, workout];


    });


  }
  
  function removeFromPlan(id){


    setPlan((prev)=>

      prev.filter(
        (item)=>item.id !== id
      )

    );

  }






  function removeFromSaved(id){


    setSaved((prev)=>

      prev.filter(
        (item)=>item.id !== id
      )

    );

  }






  function markDone(id){

    setDone((prev)=>[...prev,id]);

  }






  return (

    <FitlogContext.Provider

      value={{

        plan,

        saved,

        done,

        addToPlan,

        saveWorkout,

        removeFromPlan,

        removeFromSaved,

        markDone

      }}

    >

      {children}

    </FitlogContext.Provider>

  );


}




export function useFitlog(){

  return useContext(FitlogContext);

}