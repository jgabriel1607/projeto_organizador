/* backgroundImage, developers, genres, id, platformList, publishers, releaseDate, squareIcon, status, summary, title, verticalCover */
import { Link } from "react-router-dom"
import { MostraPlataforma, MostraStatus } from "../../functions/functions"

export const GamesCard = ({ game }) =>{
    let status = ""
    let platform = ""
    status = MostraStatus(game)
    platform = MostraPlataforma(game)

    return (
        <>            
            <li className="card">                
                <Link to={`/game/${game.id}`} className="gameCoverLink"> 
                    <div className="gloss"></div>                    
                    <h1 className="titleGameMobile"> {game.title} </h1>
                    <img src={game.verticalCover} alt={game.title} className="gameCover"/>
                    <div className="iconBackground">   
                        {status != "" ? <img src={status} alt={""} className="icon" /> : ""}
                        <img src={platform} alt={""} className="icon" />
                    </div>
                </Link>                
            </li>
        </>
    )
}



