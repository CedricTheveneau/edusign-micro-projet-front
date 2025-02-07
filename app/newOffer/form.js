"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../layout/GlobalContext";

export function Form() {
  const { userToken, apiGateway } = useGlobalContext();

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [contractTypes, setContractTypes] = useState([
    "full remote",
    "hybrid remote",
    "présentiel",
  ]);
  const [type, setType] = useState(contractTypes[0]);
  const [contractOptions, setContractOptions] = useState([
    "CDD",
    "CDI",
    "alternance",
    "freelance",
  ]);
  const [contract, setContract] = useState(contractOptions[0]);
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState([]);
  const [responseMessage, setResponseMessage] = useState("");

  const router = useRouter();

  const registerOffer = async () => {
    if (!title || !company || !type || !contract || !location || !skills)
      return;

    try {
      const response = await fetch(
        `${apiGateway}/offers/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
          body: JSON.stringify({
            title,
            company,
            type,
            contract,
            location,
            skills: skills.split(",").map((skill) => skill.trim()),
          }),
        }
      );

      if (response.ok) {
        router.push("/");
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
    } catch (error) {
      setResponseMessage("Erreur lors de la publication de l'offre");
      console.error("Erreur lors de lla publication de l'offre :", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerOffer();
  };

  return (
    <form onSubmit={handleSubmit}>
      {responseMessage && <p>{responseMessage}</p>}
      <div className="formLine">
        <label htmlFor="title">Intitulé de poste</label>
        <input
          id="title"
          type="text"
          placeholder="Développeur Full-Stack"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="formLine">
        <label htmlFor="company">Votre entreprise</label>
        <input
          id="company"
          type="text"
          placeholder="Edusign"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
      </div>
      <div className="formLine">
        <label htmlFor="location">Votre adresse</label>
        <input
          id="location"
          type="text"
          placeholder="Paris - 17ème Arr."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <div className="formLine">
        <label htmlFor="contract">Le type de contrat</label>
        <select
          id="contract"
          value={contract}
          onChange={(e) => {
            setContract(e.target.value);
          }}
          required
        >
          {contractOptions.map((contractOption, index) => (
            <option key={index} value={contractOption}>
              {contractOption.charAt(0).toUpperCase() + contractOption.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="formLine">
        <label htmlFor="type">Les modalité de contrat</label>
        <select
          id="type"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
          required
        >
          {contractTypes.map((contractOption, index) => (
            <option key={index} value={contractOption}>
              {contractOption.charAt(0).toUpperCase() + contractOption.slice(1)}
            </option>
          ))}
        </select>
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
      <button type="submit">Publier</button>
    </form>
  );
}
