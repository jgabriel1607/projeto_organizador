import { GamesCard } from "./gamesCard";

export const GamesList = ({ games, noResult }) => {

  /* const showCard = (game) => {
    let Card 
    return Card

  } */


  return noResult ? (
    <ul className="gamesList">
      <h1 className="noResult"> Sem Resultados </h1>    
    </ul>
  ):(
    <ul className="gamesList">
      {
      games.map((game) => (
        <GamesCard key={game.id} game={game}/>
      ))
      }      
    </ul>
  )
};


