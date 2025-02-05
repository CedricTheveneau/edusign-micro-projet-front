"use client";

import { useState, useEffect } from "react";
import { useGlobalContext } from "./layout/GlobalContext";

export default function Home() {
  const { filters, query, setQuery, userId } = useGlobalContext();
  const [offers, setOffers] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]);

  useEffect(() => {
    if (!offers || offers.length === 0) {
      setFilteredOffers([]);
      return;
    }

    let updatedOffers = offers;
    if (selectedFilters.length > 0) {
      updatedOffers = updatedOffers.filter((post) =>
        selectedFilters.some(
          (filter) =>
            post.title === filter ||
            post.location === filter ||
            post.type === filter ||
            post.contract === filter ||
            post.company === filter
        )
      );
    }

    if (query) {
      updatedOffers = updatedOffers.filter(
        (offer) =>
          offer.title?.toLowerCase().includes(query.toLowerCase()) ||
          offer.location?.toLowerCase().includes(query.toLowerCase()) ||
          offer.type?.toLowerCase().includes(query.toLowerCase()) ||
          offer.contract?.toLowerCase().includes(query.toLowerCase()) ||
          offer.company?.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredOffers(updatedOffers);
  }, [query, selectedFilters, offers]);

  return (
    <main className="home">
      <div className="heading">
        <h1>Offres d'emploi</h1>
        <p>Basées sur les compétences de votre profil</p>
      </div>
      <div className="filtersWrapper">
        <h2>Affiner la recherche</h2>
        <div className="filters">
          {filters && filters.length > 0 ? (
            filters.map((filter, index) => (
              <label key={index}>
                <input type="checkbox" value={filter} />
                {filter}
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7966 2.95727L8.25388 6.5L11.7966 10.0427C12.062 10.3082 12.062 10.7409 11.7966 11.0121L10.5099 12.2988C10.2445 12.5642 9.81176 12.5642 9.54057 12.2988L5.99784 8.75604L2.4551 12.2988C2.18969 12.5642 1.75694 12.5642 1.48576 12.2988L0.199062 11.0121C-0.0663541 10.7467 -0.0663541 10.3139 0.199062 10.0427L3.7418 6.5L0.199062 2.95727C-0.0663541 2.69185 -0.0663541 2.25911 0.199062 1.98792L1.48576 0.701229C1.75117 0.435813 2.18392 0.435813 2.4551 0.701229L5.99784 4.24396L9.54057 0.701229C9.80599 0.435813 10.2387 0.435813 10.5099 0.701229L11.7966 1.98792C12.0678 2.25334 12.0678 2.68608 11.7966 2.95727Z"
                    fill="#F7F6F2"
                  />
                </svg>
              </label>
            ))
          ) : (
            <p>Aucun filtre disponible.</p>
          )}
        </div>
        <form className="searchbar">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Paris Hybrid Remote Alternance ..."
          />
          <button type="submit">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.6316 20.0951L18.5752 16.0387C18.3921 15.8556 18.1439 15.7539 17.8835 15.7539H17.2203C18.3433 14.3177 19.0105 12.5112 19.0105 10.5461C19.0105 5.87122 15.2226 2.08334 10.5478 2.08334C5.87296 2.08334 2.08508 5.87122 2.08508 10.5461C2.08508 15.2209 5.87296 19.0088 10.5478 19.0088C12.5129 19.0088 14.3194 18.3415 15.7556 17.2186V17.8818C15.7556 18.1422 15.8573 18.3903 16.0404 18.5734L20.0968 22.6298C20.4793 23.0123 21.0977 23.0123 21.4761 22.6298L22.6275 21.4784C23.01 21.096 23.01 20.4775 22.6316 20.0951ZM10.5478 15.7539C7.67129 15.7539 5.33997 13.4266 5.33997 10.5461C5.33997 7.66955 7.66722 5.33823 10.5478 5.33823C13.4243 5.33823 15.7556 7.66548 15.7556 10.5461C15.7556 13.4226 13.4284 15.7539 10.5478 15.7539Z"
                fill="#FFD68B"
              />
            </svg>
          </button>
        </form>
      </div>
      <div className="offers">
        {filteredOffers && filteredOffers.length > 0 ? (
          filteredOffers.map((offer, index) => (
            <div className="offer">
              <form className="save">
                <button
                  className={offer.saves.includes(userId) ? "active" : ""}
                  type="submit"
                >
                  {article.savedNumber.includes(userId) ? (
                    <svg
                      alt="Icône d'ajout aux articles enregistrés"
                      width="28"
                      height="38"
                      viewBox="0 0 28 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.25 37.3334V4.10419C0.25 2.20568 1.789 0.666687 3.6875 0.666687H24.3125C26.211 0.666687 27.75 2.20568 27.75 4.10419V37.3334L14 29.3125L0.25 37.3334Z"
                        fill="#141414"
                      />
                    </svg>
                  ) : (
                    <svg
                      alt="Icône d'ajout aux articles enregistrés"
                      width="30"
                      height="40"
                      viewBox="0 0 30 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 5C0 2.23858 2.23858 0 5 0H25C27.7614 0 30 2.23858 30 5V38.75C30 39.211 29.7463 39.6346 29.3398 39.8521C28.9334 40.0696 28.4402 40.0458 28.0566 39.7901L15 32.7523L1.94338 39.7901C1.5598 40.0458 1.06662 40.0696 0.660178 39.8521C0.253731 39.6346 0 39.211 0 38.75V5ZM5 2.5C3.61929 2.5 2.5 3.61929 2.5 5V36.4144L14.3066 30.2099C14.7265 29.93 15.2735 29.93 15.6934 30.2099L27.5 36.4144V5C27.5 3.61929 26.3807 2.5 25 2.5H5Z"
                        fill="#141414"
                      />
                    </svg>
                  )}
                </button>
              </form>
              <div className="mainInfo">
                <p>{offer.title}</p>
                <p>{offer.company}</p>
              </div>
              <div className="bottom">
                <div className="secondaryInfo">
                  <p>{offer.location}</p>
                  <p>
                    {offer.type} | {offer.contract}
                  </p>
                </div>
                <form className="apply">
                  <button
                    disabled={offer.applications.includes(userId)}
                    type="submit"
                  >
                    {offer.applications.includes(userId)
                      ? "Candidature envoyée"
                      : "Candidature rapide"}
                  </button>
                </form>
              </div>
            </div>
          ))
        ) : (
          <p>Aucune offre ne correspond à votre recherche.</p>
        )}
      </div>
    </main>
  );
}
