/* backgroundImage, developers, genres, id, platformList, publishers, releaseDate, squareIcon, status, summary, title,verticalCover */
import { Link } from "react-router-dom"
import completedIcon from "../../images/completed_icon.svg"
import playingIcon from "../../images/playing_icon.svg"

export const GamesCard = ({game}) =>{ 

    let completed = false
    let playing = false

    if(game.status == "Concluído"){
        completed = true
    }
    if(game.status == "Jogando"){
        playing = true
    }

    return (
        <>            
            <li className="card">                
                <Link to={`/game/${game.id}`} className="gameCoverLink"> 
                    {completed ? <img src={completedIcon} alt="Concluído" className="statusIcon"/> : ""}
                    {playing ? <img src={playingIcon} alt="Concluído" className="statusIcon"/> : ""}
                    <img src={game.verticalCover} alt={game.title} className="gameCover"/>
                </Link>                
            </li>
        </>
    )
}



