"use client";
import { createContext, useState } from "react";

export const SearchBarContext = createContext({
  metricSystem: "",
  setMetricSystem: (str: string) => {},
  players: [],
  setPlayers: (arr) => [],
});

const SearchBarProvider = ({ children }) => {
  const [metricSystem, setMetricSystem] = useState("imperial");
  const [players, setPlayers] = useState([]);

  return (
    <SearchBarContext.Provider
      value={{ metricSystem, setMetricSystem, players, setPlayers }}
    >
      {children}
    </SearchBarContext.Provider>
  );
};

export default SearchBarProvider;
