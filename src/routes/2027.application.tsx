import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/2027/application")({
  beforeLoad: () => {
    throw redirect({ to: "/2027/registration" });
  },
});
