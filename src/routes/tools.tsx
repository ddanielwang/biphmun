import { createFileRoute } from "@tanstack/react-router";
import { ToolsPage } from "@/components/pages/tools";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "Tools | BIPHMUN 2027" },
      { name: "description", content: "Resolution formatter and vote counter tools for BIPHMUN delegates and chairs." },
      { property: "og:title", content: "Tools | BIPHMUN 2027" },
      { property: "og:description", content: "Resolution formatter and vote counter tools for BIPHMUN delegates and chairs." },
    ],
  }),
  component: ToolsPage,
});
