import { createFileRoute } from "@tanstack/react-router";
import { TravelPage } from "@/components/pages/2027-travel";

const title = "Transportation | BIPHMUN 2027";
const description =
  "Complimentary shuttle bus service between the BIPH campus and designated hotel pick-up and drop-off locations for BIPHMUN 2027.";

export const Route = createFileRoute("/2027/travel")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: TravelPage,
});
