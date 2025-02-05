import Link from "next/link";
import { Form } from "./form";

export function generateMetadata() {
  const pageTitle = "Publiez une offre d'emploi | Edusign";
  const pageDescription = "Proposez des missions à des étudiants en recherche d'une première expérience enrichissante !";

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: "website",
      url: "http://localhost:3000/newOffer",
      site_name: "Edusign Micro-Project",
    },
  };
}

export default function SignUp() {
  return (
    <main className="home">
      <div className="heading">
      <h1>Publiez une offre</h1>
      </div>
      <Form />
    </main>
  );
}