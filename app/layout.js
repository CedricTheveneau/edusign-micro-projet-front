import Navbar from "./layout/Navbar";
import { GlobalProvider } from "./layout/GlobalContext";
import "./globals.css";

export const metadata = {
  title: "Edusign",
  description: "Retrouvez toutes les informations relative à votre campus, des ressources pour vous faciliter la vie ainis que des offres d'emploi !",
  openGraph: {
    title: "Edusign",
    description: "Retrouvez toutes les informations relative à votre campus, des ressources pour vous faciliter la vie ainis que des offres d'emploi !",
    type: "website",
    url: "http://localhost:3000/",
    site_name: "Edusign Micro-Project",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <GlobalProvider>
        <body>
          {children}
          <Navbar />
        </body>
      </GlobalProvider>
    </html>
  );
}
