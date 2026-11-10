import { createFileRoute } from "@tanstack/react-router";
import { RegistrationPage } from "@/components/pages/2027-registration";

export const Route = createFileRoute("/2027/registration")({
  head: () => ({
    meta: [
      { title: "Registration | BIPHMUN 2027" },
      { name: "description", content: "Register for BIPHMUN 2027 as an individual delegate, school, chair, or volunteer." },
      { property: "og:title", content: "Registration | BIPHMUN 2027" },
      { property: "og:description", content: "Register for BIPHMUN 2027 as an individual delegate, school, chair, or volunteer." },
    ],
  }),
  component: RegistrationPage,
});
