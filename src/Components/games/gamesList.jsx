import {useContext } from "react"
import { GamesCard } from "./gamesCard"
import { GamesContext } from "../../providers/games/games"

export const GamesList = () => {
  const { games, noResult } = useContext(GamesContext) 

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
}


