import { createFileRoute } from "@tanstack/react-router";
import { CommitteesPage } from "@/components/pages/2027-committees";

export const Route = createFileRoute("/2027/committees")({
  head: () => ({
    meta: [
      { title: "Conference Committees | BIPHMUN 2027" },
      { name: "description", content: "Committees and topics for BIPHMUN 2027." },
      { property: "og:title", content: "Conference Committees | BIPHMUN 2027" },
      { property: "og:description", content: "Committees and topics for BIPHMUN 2027." },
    ],
  }),
  component: CommitteesPage,
});
