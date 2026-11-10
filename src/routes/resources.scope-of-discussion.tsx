import { createFileRoute } from "@tanstack/react-router";
import { ScopeOfDiscussionPage } from "@/components/pages/resources-scope-of-discussion";

export const Route = createFileRoute("/resources/scope-of-discussion")({
  head: () => ({
    meta: [
      { title: "Scope of Discussion | BIPHMUN 2027" },
      { name: "description", content: "Guidance on the scope of discussion for BIPHMUN delegates." },
      { property: "og:title", content: "Scope of Discussion | BIPHMUN 2027" },
      { property: "og:description", content: "Guidance on the scope of discussion for BIPHMUN delegates." },
    ],
  }),
  component: ScopeOfDiscussionPage,
});
