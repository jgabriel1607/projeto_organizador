/* backgroundImage, developers, genres, id, platformList, publishers, releaseDate, squareIcon, status, summary, title, verticalCover */
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Game = ({ games, setGames }) => {
  const param = useParams();
  const [gameId, setGameId] = useState(param.gameId - 1);
  const [gameTitle, setGameTitle] = useState();
  const [gameSummary, setGameSummary] = useState("");
  const [gameStatus, setGameStatus] = useState("");
  const [gameGenre, setGameGenre] = useState("");
  const [gameReleaseDate, setGameReleaseDate] = useState("");
  const [gamePlatformList, setGamePlatformList] = useState("");
  const [gameDevelopers, setGameDevelopers] = useState("");
  const [gamePublishers, setGamePublishers] = useState("");
  const [gameBackgroundImage, setGameBackgroundImage] = useState();
  const [gameSquareIcon, setGameSquareIcon] = useState("");
  const [gameVerticalCover, setGameVerticalCover] = useState("");

  useEffect(() => {
    setGameTitle(games[gameId].title);
    setGameSummary(games[gameId].summary);
    setGameStatus(games[gameId].status);
    setGameGenre(games[gameId].genres);
    setGameReleaseDate(games[gameId].releaseDate);
    setGamePlatformList(games[gameId].platformList);
    setGameDevelopers(games[gameId].developers);
    setGamePublishers(games[gameId].publishers);
    setGameBackgroundImage(games[gameId].backgroundImage);
    setGameSquareIcon(games[gameId].squareIcon);
    setGameVerticalCover(games[gameId].verticalCover);
  }, []);

  return (
    <>
      <section className="content">
        <section className="game">
          <section className="aboutGame">
            <h1 className="gameTitle"> {gameTitle} </h1>
            <img
              src={gameBackgroundImage}
              alt="gameBackgroundImge"
              className="gameBackgroundImage"
            />
            <div className="gameSummary">
              <p> {gameSummary} </p>
            </div>
          </section>
          <section className="infoGame">
            <div className="infomItems">
              <div className="infoItem">
                <h2 className="infoItemTitle"> Status: </h2>
                <p className="infoItemP"> {gameStatus} </p>
              </div>
              <div className="infoItem">
                <h2 className="infoItemTitle"> Genre: </h2>
                <p className="infoItemP"> {gameGenre} </p>
              </div>
              <div className="infoItem">
                <h2 className="infoItemTitle"> Developers: </h2>
                <p className="infoItemP"> {gameDevelopers} </p>
              </div>
              <div className="infoItem">
                <h2 className="infoItemTitle"> Publishers: </h2>
                <p className="infoItemP"> {gamePublishers} </p>
              </div>
              <div className="infoItem">
                <h2 className="infoItemTitle"> Release Date: </h2>
                <p className="infoItemP"> {gameReleaseDate} </p>
              </div>
              <div className="infoItem">
                <h2 className="infoItemTitle"> Platform List: </h2>
                <p className="infoItemP"> {gamePlatformList} </p>
              </div>
            </div>
          </section>
        </section>
        <section className="previousPage">
          <Link to={"/"}> Voltar </Link>
        </section>
      </section>
    </>
  );
};
