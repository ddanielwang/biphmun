import { createFileRoute } from "@tanstack/react-router";
import { SchedulePage } from "@/components/pages/2027-schedule";

export const Route = createFileRoute("/2027/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule | BIPHMUN 2027" },
      { name: "description", content: "Day-by-day schedule for BIPHMUN 2027, February 26–28, 2027." },
      { property: "og:title", content: "Schedule | BIPHMUN 2027" },
      { property: "og:description", content: "Day-by-day schedule for BIPHMUN 2027, February 26–28, 2027." },
    ],
  }),
  component: SchedulePage,
});
