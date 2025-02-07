export const metadata = {
  title: "Messagerie | Edusign",
  description: "Recevez des informations utiles liées à votre vie étudiante et celle du campus !",
  openGraph: {
    title: "Messagerie | Edusign",
    description: "Recevez des informations utiles liées à votre vie étudiante et celle du campus !",
    type: "website",
    url: "http://localhost:3000/inbox",
    site_name: "Edusign Micro-Project",
  },
};

export default function Inbox() {
  return (
    <main className="home">
      <div className="heading">
        <h1>Messagerie</h1>
        <p>Bienvenue sur la page "Messagerie" !</p>
      </div>
    </main>
  );
}