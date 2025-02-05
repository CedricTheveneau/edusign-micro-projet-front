"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Form() {
 const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [skills, setSkills] = useState([]);
  const [responseMessage, setResponseMessage] = useState("");

  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);

  const router = useRouter();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    setIsLengthValid(newPassword.length >= 8);
    setHasUpperCase(/[A-Z]/.test(newPassword));
    setHasLowerCase(/[a-z]/.test(newPassword));
    setHasNumber(/\d/.test(newPassword));
    setHasSpecialChar(/[!@#$%^&*()_+{}\[\]:;<>,.?/\\~\-]/.test(newPassword));
  };

  const registerUser = async () => {
   if (!username || !email || !password || !skills) return;

   try {
     const response = await fetch(
       `${process.env.NEXT_PUBLIC_API_GATEWAY_URI}/auth/register`,
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ username, email, password, skills: skills.split(",").map((skill) => skill.trim()),}),
       }
     );

     if (!response.ok) {
       throw new Error(`HTTP error! status: ${response.status}`);
     }

     const data = await response.json();
     router.push("/login");
   } catch (error) {
     setResponseMessage("Erreur lors de l'inscription");
     console.error("Erreur lors de la requête de création de compte :", error);
   }
 };

  const handleSubmit = (e) => {
   e.preventDefault();
   registerUser();
 };

 return (
  <form onSubmit={handleSubmit}>
   {responseMessage && <p>{responseMessage}</p>}
        <div className="formLine">
      <label htmlFor="username" >Votre pseudo</label>
      <input
        id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </div>
        <div className="formLine">
        <label htmlFor="email" >Votre adresse email</label>
        <input
        id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div className="formLine">
        <label htmlFor="password" >Votre mot de passe</label>
        <input
        id="password"
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={handlePasswordChange}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
        />
       {isPasswordFocused &&  <ul>
          <li style={{ color: isLengthValid ? "#51C47D" : "#FC5D6A" }}>
            Au moins 8 caractères
          </li>
          <li style={{ color: hasUpperCase ? "#51C47D" : "#FC5D6A" }}>
            Au moins une lettre majuscule
          </li>
          <li style={{ color: hasLowerCase ? "#51C47D" : "#FC5D6A" }}>
            Au moins une lettre minuscule
          </li>
          <li style={{ color: hasNumber ? "#51C47D" : "#FC5D6A" }}>
            Au moins un chiffre
          </li>
          <li style={{ color: hasSpecialChar ? "#51C47D" : "#FC5D6A" }}>
            Au moins un caractère spécial
          </li>
        </ul>} 
        </div>
        <div className="formLine">
                      <label htmlFor="skills">Compétences</label>
                      <input
                        id="skills"
                        type="text"
                        placeholder="NextJS, NodeJS, ..."
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        required
                      />
                    </div>
        <button type="submit">S&apos;inscrire</button>
      </form>
 )
}