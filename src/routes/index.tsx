// import * as React from "react";
// import { createFileRoute } from "@tanstack/react-router";
import { SignupFormDemo } from "../components/SignUp";
// import EarthCanvas from "../components/Earth";
import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
// import Calendar from "react-calendar";
// import CalendarComponent from "../components/CalendarComponent";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <main className=" w-screen h-screen   bg-black overflow-visible  ">
      <div className="h-full  w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute   pointer-events-none inset-0 flex items-center justify-center dark:bg-black  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
        <p className="  font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 ">
          <div className="w-screen h-screen flex justify-center items-center md:justify-evenly   ">
            <div className=" scale-75 w-full md:w-1/2    ">
              <SignupFormDemo />
            </div>
            <div className="hidden md:w-1/2  justify-center items-center h-screen  md:flex">
              {/* <EarthCanvas /> */}
              <img
                src="./tp.jpg"
                className="invert bg-inherit h-3/4 rounded-full opacity-85  "
                alt="title"
              />
            </div>
          </div>
        </p>
      </div>
    </main>
  );
}
