import { createFileRoute } from "@tanstack/react-router";
import { ThemePage } from "@/components/pages/2027-theme";

export const Route = createFileRoute("/2027/theme")({
  head: () => ({
    meta: [
      { title: "Conference Theme | BIPHMUN 2027" },
      { name: "description", content: "BIPHMUN 2027 theme: The Hidden Ledger: Power, Risk, and the Unequal Burden of Global Crises." },
      { property: "og:title", content: "Conference Theme | BIPHMUN 2027" },
      { property: "og:description", content: "BIPHMUN 2027 theme: The Hidden Ledger: Power, Risk, and the Unequal Burden of Global Crises." },
    ],
  }),
  component: ThemePage,
});
