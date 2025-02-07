import { Forms } from "./forms";

export function generateMetadata({ params }) {
  const { username } = params;
  const decodedUsername = decodeURIComponent(username);
  const pageTitle = `Profil de ${decodedUsername} | Edusign`;
  const pageDescription = `Bienvenue sur le profil de ${decodedUsername} ! Retrouvez ici diverses informations liées à sa vie étudiante.`;

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: "website",
      url: `http://localhost:3000/profile/${decodedUsername}`,
      site_name: "Edusign Micro-Project",
    },
  };
}

export default function Profile({ params }) {
  const { username } = params;
  const decodedUsername = decodeURIComponent(username);

  return (
    <main className="home">
      <div className="heading">
        <h1>{decodedUsername}</h1>
      </div>
      <Forms/>
    </main>
  );
}
