import * as React from "react";
import { createFileRoute, useLocation } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  // console.log(useLocation());

  return <main className="w-screen h-screen "></main>;
}
