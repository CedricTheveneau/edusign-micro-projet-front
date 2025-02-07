export const metadata = {
  title: "Calendrier | Edusign",
  description: "Restez informé de votre emploi du temps et des évènement sur le campus !",
  openGraph: {
    title: "Calendrier | Edusign",
    description: "Restez informé de votre emploi du temps et des évènement sur le campus !",
    type: "website",
    url: "http://localhost:3000/calendar",
    site_name: "Edusign Micro-Project",
  },
};

export default function Calendar() {
  return (
    <main className="home">
      <div className="heading">
        <h1>Calendrier</h1>
        <p>Bienvenue sur la page "Calendrier" !</p>
      </div>
    </main>
  );
}