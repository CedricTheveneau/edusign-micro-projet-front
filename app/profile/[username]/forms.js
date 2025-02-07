"use client";
import Link from "next/link.js";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../../layout/GlobalContext.js";

export function Forms() {
  const router = useRouter();

  const { setIsAuthenticated, setUserRole, userRole } = useGlobalContext();

  const handleLogoutSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUserRole(null);
    router.push("/login");
    return;
  };

  return (
    <>
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
    </>
  );
}
