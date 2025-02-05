"use client"

import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Créer le contexte
const GlobalContext = createContext();

// Hook personnalisé pour utiliser le contexte
export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  // Gérer l'état d'authentification avec un state
  const [userToken, setUserToken] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(false);
  const [userUsername, setUserUsername] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userSkills, setUserSkills] = useState([])
  const [currentPath, setCurrentPath] = useState(null);
  const [filters, setFilters] = useState(['Full Remote', "Hybrid Remote", "CDI", "Alternance", "Présentiel", "CDD"])
  const [query, setQuery] = useState("");
  const pathname = usePathname();
  const apiGateway = process.env.NEXT_PUBLIC_API_GATEWAY_URI;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    const tokenData = JSON.parse(localStorage.getItem("user"));
    if (tokenData) {
      const { token, user } = tokenData;
  
      const payloadBase64 = token.split('.')[1];
      const decodedPayload = JSON.parse(atob(payloadBase64));
      const isTokenExpired = decodedPayload.exp * 1000 < Date.now();
  
      if (!isTokenExpired) {
        setIsAuthenticated(true);
        setUserToken(token);
        setUserId(user._id);
        setUserRole(user.role);
        setUserUsername(user.username);
        setUserSkills(user.skills)
       } else {
        localStorage.removeItem("user");
        setIsAuthenticated(false);
      }
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (!pathname.includes('/login') && !pathname.includes('/signup') && !pathname.includes('/emailConfirmation')) {
      setCurrentPath(pathname);
    }
  }, [pathname]);

  return (
    <GlobalContext.Provider value={{formatDate, userToken, isAuthenticated, userId, userUsername, userRole, query, currentPath, apiGateway, setIsAuthenticated, setUserId, setUserUsername, setUserRole, setQuery, setCurrentPath, filters, setFilters, userSkills, setUserSkills }}>
      {children}
    </GlobalContext.Provider>
  );
};