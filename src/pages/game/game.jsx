/* backgroundImage, developers, genres, id, platformList, publishers, releaseDate, squareIcon, status, summary, title, verticalCover */
import { useState, useContext } from "react";
import { Link, useParams, useHistory} from "react-router-dom";
import { editGame } from "../../functions/functions";
import { removeGame } from "../../functions/functions";
import { GamesContext } from "../../providers/games/games"
import "../../style/game.css"

export const Game = () => {
  const { games } = useContext(GamesContext) 
  const param = useParams().gameId  
  const history = useHistory()

  const game = games.filter((gameInfo) => {
    if(param == gameInfo.id){
      return gameInfo
    }
  })

  const handleClickRemoveGame = () =>{
    removeGame(gameId)
    history.push("/")
    history.go(0)
  }

  const dateFormat = new Intl.DateTimeFormat('pt-BR')  
  const convertingDateFormat = dateFormat.format(new Date(game[0].releaseDate))  
  
  const [gameId, setGameId] = useState(game[0].id);
  const [gameTitle, setGameTitle] = useState(game[0].title);
  const [gameSummary, setGameSummary] = useState(game[0].summary);
  const [gameStatus, setGameStatus] = useState(game[0].status);
  const [gameGenre, setGameGenre] = useState(game[0].genres.join(', '));
  const [gameReleaseDate, setGameReleaseDate] = useState(convertingDateFormat);
  const [gamePlatformList, setGamePlatformList] = useState(game[0].platformList.join(', '));
  const [gameDevelopers, setGameDevelopers] = useState(game[0].developers.join('; '));
  const [gamePublishers, setGamePublishers] = useState(game[0].publishers.join('; '));
  const [gameBackgroundImage, setGameBackgroundImage] = useState(game[0].backgroundImage);
  const [gameSquareIcon, setGameSquareIcon] = useState(game[0].squareIcon);
  const [gameVerticalCover, setGameVerticalCover] = useState(game[0].verticalCover);
  return (
    <>
      <main className="main">
        <section className="content">
          <section className="aboutGame">
            <h1 className="gamesTitle"> {gameTitle} </h1>
            <img src={gameBackgroundImage} alt="gameBackgroundImge" className="gameBackgroundImage"/>
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
                <h2 className="infoItemTitle"> Gêneros: </h2>
                <p className="infoItemP"> {gameGenre} </p>
              </div>
              <div className="infoItem">
                <h2 className="infoItemTitle"> Desenvolvedores: </h2>
                <p className="infoItemP"> {gameDevelopers} </p>
              </div>
              <div className="infoItem">
                <h2 className="infoItemTitle"> Distribuidoras: </h2>
                <p className="infoItemP"> {gamePublishers} </p>
              </div>
              <div className="infoItem">
                <h2 className="infoItemTitle"> Data de Lançamento: </h2>
                <p className="infoItemP"> {gameReleaseDate} </p>
              </div>
              <div className="infoItem">
                <h2 className="infoItemTitle"> Plataformas: </h2>
                <p className="infoItemP"> {gamePlatformList} </p>
              </div>
            </div>
            <div className="infoLinks">
              <Link to={`/updateGame/${gameId}`}> 
                <button> Editar </button>
              </Link>
              <button onClick={() => {handleClickRemoveGame()}}> Excluir </button>
            </div>
          </section>
        </section>
        <section className="previousPage">
          <Link to={"/"}> Voltar </Link>
        </section>
      </main>
    </>
  )
}