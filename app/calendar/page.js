export function generateMetadata() {
  const pageTitle = "Calendrier | Edusign";
  const pageDescription = "Restez informé de votre emploi du temps et des évènement sur le campus !";

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: "website",
      url: "http://localhost:3000/calendar",
      site_name: "Edusign Micro-Project",
    },
  };
}

export default function Calendar() {
  return (
    <main className="calendar">
      <h2>Calendrier</h2>
      <p>Bienvenue sur la page "Calendrier" !</p>
    </main>
  );
}