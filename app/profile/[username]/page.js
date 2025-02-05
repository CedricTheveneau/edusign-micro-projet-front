"use client";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../../layout/GlobalContext.js";
import Link from "next/link.js";

export default function Profile({ params }) {
  const { id } = params;
  const router = useRouter();

  const { userUsername, setIsAuthenticated, setUserRole, userRole } =
    useGlobalContext();

  const handleLogoutSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUserRole(null);
    router.push("/login");
    return;
  };

  return (
    <main className="home">
      <div className="heading">
        <h1>{userUsername}</h1>
      </div>
      <div className="filtersWrapper">
        {userRole === "admin" && (
          <Link className="link" href="/newOffer">
            Poster une offre d'emploi
          </Link>
        )}
      </div>
      <form onSubmit={handleLogoutSubmit}>
        <button type="submit" className="link" title="Log out from Edusign">
          Déconnexion
        </button>
      </form>
    </main>
  );
}
