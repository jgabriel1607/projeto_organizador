import { GamesCard } from "./gamesCard";

export const GamesList = ({ games }) => {

  return (
    <ul className="gamesList">
      {
      games.map((game) => ( 
        <GamesCard key={game.id} game={game}/>
      ))}      
    </ul>
  );
};


