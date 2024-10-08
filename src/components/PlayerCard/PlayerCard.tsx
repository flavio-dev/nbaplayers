import styles from "./Results.module.css";

export const PlayerCard = ({ player }) => {
  return (
    <div>
      <div>
        {player.first_name} {player.last_name}
      </div>
      <div>
        {player.height}, {player.weight}
      </div>
    </div>
  );
};

export default PlayerCard;
