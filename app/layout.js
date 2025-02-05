import Navbar from "./layout/Navbar";
import { GlobalProvider } from "./layout/GlobalContext";
import "./globals.css";

export const metadata = {
  title: "Edusign",
  description:
    "Retrouvez toutes les informations relative à votre campus, des ressources pour vous faciliter la vie ainis que des offres d'emploi !",
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
