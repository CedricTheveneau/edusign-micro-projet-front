import Link from "next/link";
import { Form } from "./form";

export const metadata = {
  title: "Créer un Compte | Edusign",
  description: "Rejoignez les autres étudiants de votre campus et accédez à des fonctionnalités exclusives comme consulter et candidater à des offres d'emploi personnalisées et bénéificier de votre propre profil personnalisable ! Créez un compte et bénéficiez de tout ce que EduSign a à vous offrir !",
  openGraph: {
    title: "Créer un Compte | Edusign",
    description: "Rejoignez les autres étudiants de votre campus et accédez à des fonctionnalités exclusives comme consulter et candidater à des offres d'emploi personnalisées et bénéificier de votre propre profil personnalisable ! Créez un compte et bénéficiez de tout ce que EduSign a à vous offrir !",
    type: "website",
    url: "http://localhost:3000/signup",
    site_name: "Edusign Micro-Project",
  },
};

export default function SignUp() {
  return (
    <main className="home">
      <div className="heading">
      <h1>Créer un compte</h1>
      </div>
      <Form />
      <div className="filtersWrapper">
      <h2 style={{ margin: "auto"}}>Vous avez déjà un compte ?</h2>
      <Link className="link" href="/login">Connectez-vous !</Link>
      </div>
    </main>
  );
}