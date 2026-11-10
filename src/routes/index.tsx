import { createFileRoute } from "@tanstack/react-router";
import { GroupPhoto } from "@/components/home/group-photo";
import { Hero } from "@/components/home/hero";
import { Introduction } from "@/components/home/introduction";
import { Timeline } from "@/components/home/timeline";

const title = "BIPHMUN 2027 | BASIS International School Park Lane Harbour Model United Nations";
const description =
  "Official website for BIPHMUN, the Model United Nations conference at BASIS International School Park Lane Harbour in Huizhou, China. BIPHMUN 2027: February 26–28, 2027.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Timeline />
      <GroupPhoto />
    </main>
  );
}
