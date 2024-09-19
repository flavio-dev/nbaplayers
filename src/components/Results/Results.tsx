"use client";
import { useContext } from "react";
import { SearchBarContext } from "@/contexts/SearchBarContext";
import PlayerCard from "@/components/PlayerCard";
import styles from "./Results.module.css";

export const Results = () => {
  const { players, metricSystem } = useContext(SearchBarContext);

  console.log("players = ", players);
  console.log("metricSystem = ", metricSystem);

  return (
    <>
      {!players.length && (
        <>
          <div>🏀</div>
          <div>You have no cards to show</div>
        </>
      )}
      {players.map((player) => {
        return <PlayerCard key={player.key} player={player} />;
      })}
    </>
  );
};

export default Results;
