import GamesList from "../../components/games/gamesList";
import { Submenu } from "../../components/submenu/submenu";

export const Home = ({ games, setGames }) => {

  return (
    <>
      <main className="main">
        <h1 className="titleGames"> Meus Jogos </h1>
        <Submenu games={games} setGames={setGames}/>
        <GamesList games={games} />
      </main>
    </>
  );
};
