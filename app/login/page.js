import Link from "next/link";
import { Form } from "./form";

export const metadata = {
  title: "Se Connecter | Edusign",
  description: "Accédez à des offres d'emploi personnalisées, renseignez-vous sur les évènements à venir sur votre campus et accédez à plein de ressources utiles !",
  openGraph: {
    title: "Se Connecter | Edusign",
    description: "Accédez à des offres d'emploi personnalisées, renseignez-vous sur les évènements à venir sur votre campus et accédez à plein de ressources utiles !",
    type: "website",
    url: "http://localhost:3000/login",
    site_name: "Edusign Micro-Project",
  },
};

export default function Login() {
  return (
    <main className="home">
      <div className="heading">
        <h1>Se connecter</h1>
      </div>
      <Form />
      <div className="filtersWrapper">
        <h2 style={{ margin: "auto"}}>Vous n&apos;avez pas de compte ?</h2>
        <Link className="link" href="/signup">
          Créez en un !
        </Link>
      </div>
    </main>
  );
}
