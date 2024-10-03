"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
    (<div
      className="h-screen w-screen relative flex flex-col items-center justify-center antialiased bg-gradient-to-t">
        <div className="max-w-3xl mx-auto p-4">
        <h1
            className="relative h-[6rem] z-10 text-xl md:text-7xl bg-clip-text text-transparent bg-black  text-center font-sans font-bold">
            We'll be right back!
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm  relative z-10">
            This page is currently under maintenance, and will soon be available to help you manage your income, expenses, and budgets with personalized financial advice. <br/>
        </p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm  relative z-10">
            In the meantime, check out project's <a href="https://github.com/ThatSunny/ExpenseIQ" target="_blank"><b>Github</b></a> repository to track real-time progress.
        </p>
        </div>
      <BackgroundBeams />
    </div>)
  );
}
