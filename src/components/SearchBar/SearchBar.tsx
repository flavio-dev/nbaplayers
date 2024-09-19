"use client";
import { useContext, useState } from "react";
import { throttle } from "lodash";
import styles from "./SearchBar.module.css";
import { SearchBarContext } from "@/contexts/SearchBarContext";

export const SearchBar = () => {
  const { metricSystem, setMetricSystem } = useContext(SearchBarContext);
  const [searchResults, setSearchResults] = useState([]);

  const fetchPlayers = async (text: string) => {
    try {
      const res = await fetch(
        "https://api.balldontlie.io/v1/players?search=" + text,
        {
          headers: {
            Authorization: "a42b6000-feea-4384-ac80-69d07f6dd066",
          },
        }
      );

      const { data } = await res.json();
      return data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const handleChangeInput = async (text: string) => {
    if (text) {
      console.log("hello lets fetch");
      const players = await fetchPlayers(text);
      setSearchResults(players);
    } else {
      setSearchResults([]);
    }
  };

  const throttledChangeInput = throttle(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleChangeInput(e.target.value);
    },
    500
  );

  const handleSelectPlayer = (idPlayer) => {
    console.log("the id of the player: ", idPlayer);
  };

  return (
    <div className={`default-wrapper-width ${styles.sb}`}>
      <div className={styles.sbSearchWrapper}>
        <input
          type="text"
          className={styles.sbInputText}
          onChange={throttledChangeInput}
        />
        <ul className={styles.sbSearchResults}>
          {searchResults.map((res) => {
            return (
              <li key={res.id} onClick={() => handleSelectPlayer(res.id)}>
                {res.first_name} {res.last_name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.sbMetricSystem}>
        <button
          className={metricSystem === "metric" ? styles.sbSelected : ""}
          onClick={() => setMetricSystem("metric")}
        >
          Metric
        </button>
        /
        <button
          className={metricSystem === "imperial" ? styles.sbSelected : ""}
          onClick={() => setMetricSystem("imperial")}
        >
          Imperial
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
