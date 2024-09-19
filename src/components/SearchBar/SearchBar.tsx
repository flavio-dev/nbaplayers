"use client";
import { useContext, useState, useRef } from "react";
import { throttle } from "lodash";
import styles from "./SearchBar.module.css";
import { SearchBarContext } from "@/contexts/SearchBarContext";

export const SearchBar = () => {
  const { metricSystem, setMetricSystem, players, setPlayers } =
    useContext(SearchBarContext);
  const [searchResults, setSearchResults] = useState([]);
  const [inputText, setInputText] = useState("");

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

  const handleFetchPlayers = async (text: string) => {
    if (text) {
      const players = await fetchPlayers(text);
      setSearchResults(players);
    } else {
      setSearchResults([]);
    }
  };

  const makeApiRequestThrottled = useRef(throttle(handleFetchPlayers, 500));

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
    makeApiRequestThrottled.current(text);
  };

  // const throttledChangeInput = throttle((e) => {
  //   handleChangeInput(e.target.value);
  // }, 2000);

  const handleSelectPlayer = (player) => {
    setInputText("");
    setSearchResults([]);
    const listOfPlayers = [...players, player];
    setPlayers(listOfPlayers);
  };

  return (
    <div className={`default-wrapper-width ${styles.sb}`}>
      <div className={styles.sbSearchWrapper}>
        <input
          type="text"
          className={styles.sbInputText}
          onChange={handleChangeInput}
          value={inputText}
        />
        <ul className={styles.sbSearchResults}>
          {searchResults.map((player) => {
            return (
              <li key={player.id} onClick={() => handleSelectPlayer(player)}>
                {player.first_name} {player.last_name}
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
