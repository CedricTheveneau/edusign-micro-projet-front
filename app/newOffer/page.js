import { Form } from "./form";

export const metadata = {
  title: "Publiez une offre d'emploi | Edusign",
  description: "Proposez des missions à des étudiants en recherche d'une première expérience enrichissante !",
  openGraph: {
    title: "Publiez une offre d'emploi | Edusign",
    description: "Proposez des missions à des étudiants en recherche d'une première expérience enrichissante !",
    type: "website",
    url: "http://localhost:3000/newOffer",
    site_name: "Edusign Micro-Project",
  },
};

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