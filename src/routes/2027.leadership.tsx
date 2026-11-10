import { createFileRoute } from "@tanstack/react-router";
import { LeadershipPage } from "@/components/pages/2027-leadership";

export const Route = createFileRoute("/2027/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership Team | BIPHMUN 2027" },
      { name: "description", content: "Meet the BIPHMUN 2027 Secretariat and advisor." },
      { property: "og:title", content: "Leadership Team | BIPHMUN 2027" },
      { property: "og:description", content: "Meet the BIPHMUN 2027 Secretariat and advisor." },
    ],
  }),
  component: LeadershipPage,
});
