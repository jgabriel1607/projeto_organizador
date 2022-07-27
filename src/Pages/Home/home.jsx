import { useEffect, useState } from "react";
import { Submenu } from "../../components/submenu/submenu";
import {GamesList} from "../../components/games/gamesList"

export const Home = ({games, setGames}) => {

  return (
    <>
      <main className="main">
        <h1 className="titlePage"> Meus Jogos </h1>
        <Submenu games={games} setGames={setGames}/>   
        <GamesList games={games}/> 
      </main>
    </>
  );
};
