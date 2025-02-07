"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalContext } from '../layout/GlobalContext';

export function Form() {

 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [errorMessage, setErrorMessage] = useState("");
 const router = useRouter();
 const { setIsAuthenticated, setUserId, setUserRole, setUserUsername, currentPath, setUserSkills, apiGateway } = useGlobalContext();

 const handleSubmit = async (e) => {
  e.preventDefault();
  setErrorMessage("");

  try {
    const response = await fetch(
      `${apiGateway}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erreur lors de la connexion');
    }

    const data = await response.json();
    const user = {
      user: data.updatedUser,
      token: data.token,
    };

    localStorage.setItem("user", JSON.stringify(user));
    setIsAuthenticated(true);
    setUserId(data.updatedUser._id);
    setUserUsername(data.updatedUser.username);
    setUserRole(data.updatedUser.role);
    setUserSkills(data.updatedUser.skills);
    if (currentPath) {
      router.push(currentPath);
    } else {
      router.push("/");
    }
    
    return;
  } catch (error) {
    console.error("Erreur lors de la requête de connexion :", error);
    setErrorMessage(error.message);
  }
};

const handleChangeEmail = (e) => {
setEmail(e.target.value);
setErrorMessage("");
};

const handleChangePassword = (e) => {
setPassword(e.target.value);
setErrorMessage("");
};

 return (
  <form onSubmit={handleSubmit}>
        {errorMessage && <p>{errorMessage}</p>}
  <div className="formLine">
  <label htmlFor="email" >Votre adresse email</label>
  <input
  id="email"
    type="email"
    placeholder="Email"
    value={email}
    onChange={handleChangeEmail}
  />
  </div>
  <div className="formLine">
  <label htmlFor="password" >Votre mot de passe</label>
  <input
  id="password"
    type="password"
    placeholder="Mot de passe"
    value={password}
    onChange={handleChangePassword}
  />
  </div>
  <button type="submit">Se connecter</button>
</form>
 )
}