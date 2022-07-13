import GamesList from "../../components/games/gamesList";

export const Home = ({games, setGames}) => { 

  return (
    <>
      <section className="content">
        <h1 className="titleGames"> Lista de Jogos </h1>
        <GamesList games={games}/>
      </section>
    </>
  );
};
