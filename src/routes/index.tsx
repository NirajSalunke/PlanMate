import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import Calendar from "react-calendar";
import CalendarComponent from "../components/CalendarComponent";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="p-2" >
      <h3>Welcome Home!</h3>
      <CalendarComponent />
    </div>
  );
}
