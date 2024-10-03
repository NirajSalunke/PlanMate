import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/roadmap")({
  component: () => <div>Hello /roadmap!</div>,
});
