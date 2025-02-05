import Link from "next/link";
import { Form } from "./form";

export function generateMetadata() {
  const pageTitle = "Se Connecter | Edusign";
  const pageDescription = "Accédez à des offres d'emploi personnalisées, renseignez-vous sur les évènements à venir sur votre campus et accédez à plein de ressources utiles !";

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: "website",
      url: "http://localhost:3000/login", 
      site_name: "Edusign Micro-Project",
    },
  };
}

export default function Login() {
  return (
    <main className="signup">
      <h2>Se connecter<span style={{ color: "var(--themeAccent)" }}>.</span></h2>
      <Form/>
      <div className="signupPrompt">
      <h3>Vous n&apos;avez pas de compte ?</h3>
      <Link className="link" href="/signup">Créez en un !</Link>
      </div>
      
    </main>
  );
}