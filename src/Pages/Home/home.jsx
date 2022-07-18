import GamesList from "../../components/games/gamesList";

export const Home = ({ games, setGames }) => {

  return (
    <>
      <main className="main">
        <h1 className="titleGames"> Meus Jogos </h1>
        <GamesList games={games} />
      </main>
    </>
  );
};
