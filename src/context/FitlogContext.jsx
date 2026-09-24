"use client";

import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const FitlogContext = createContext();

export function FitlogProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const savedPlan = localStorage.getItem("fitlog_plan");
    const savedList = localStorage.getItem("fitlog_saved");
    if (savedPlan) setPlan(JSON.parse(savedPlan));
    if (savedList) setSaved(JSON.parse(savedList));
  }, []);

  useEffect(() => {
    localStorage.setItem("fitlog_plan", JSON.stringify(plan));
    localStorage.setItem("fitlog_saved", JSON.stringify(saved));
  }, [plan, saved]);

  const addToPlan = (workout) => {
    if (plan.length >= 5) {
      toast.error("Cap of 5 lifts reached for today!");
      return;
    }
    const exists = plan.find((item) => item.id === workout.id);
    if (exists) {
      toast("Already added to today's plan!");
      return;
    }
    setPlan([...plan, { ...workout, done: false }]);
    toast.success("Added to today's plan");
  };

  const addToSaved = (workout) => {
    const exists = saved.find((item) => item.id === workout.id);
    if (exists) {
      toast("Already saved for later!");
      return;
    }
    setSaved([...saved, workout]);
    toast.success("Saved for later");
  };

  const removeFromPlan = (id) => {
    setPlan(plan.filter((item) => item.id !== id));
    toast.success("Removed from plan");
  };

  const removeFromSaved = (id) => {
    setSaved(saved.filter((item) => item.id !== id));
    toast.success("Removed from saved");
  };

  const toggleDone = (id) => {
    setPlan(
      plan.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
    toast.success("Workout status updated!");
  };

  return (
    <FitlogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
        toggleDone,
      }}
    >
      {children}
    </FitlogContext.Provider>
  );
}

export const useFitlog = () => useContext(FitlogContext);