import { useEffect, useState } from "react";
import { Submenu } from "../../components/submenu/submenu";
import { GamesList } from "../../components/games/gamesList"
import { TopButton } from "../../components/topButton/topButton";

export const Home = ({games, setGames, unchangedGamesList}) => {
  const [noResult, setNoResult] = useState(false)

  return (
    <>
      <main className="main">
        <h1 className="titlePage"> Biblioteca de Jogos </h1>
        <Submenu games={games} setGames={setGames} unchangedGamesList={unchangedGamesList} setNoResult={setNoResult} />   
        <GamesList games={games} noResult={noResult}/>         
        <TopButton/>
      </main>
    </>
  );
};
