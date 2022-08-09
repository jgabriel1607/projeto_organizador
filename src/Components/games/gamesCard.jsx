/* backgroundImage, developers, genres, id, platformList, publishers, releaseDate, squareIcon, status, summary, title,verticalCover */
import { Link } from "react-router-dom"
import { MostraPlataforma, MostraStatus } from "../../functions/functions"

export const GamesCard = ({ game }) =>{

    return (
        <>            
            <li className="card">                
                <Link to={`/game/${game.id}`} className="gameCoverLink"> 
                    <div className="gloss"></div>
                    <div className="iconBackground">   
                        <img src={MostraStatus(game)} alt={""} className="icon"/>
                        <img src={MostraPlataforma(game)} alt={""} className="icon"/>
                    </div>
                    <img src={game.verticalCover} alt={game.title} className="gameCover"/>
                </Link>                
            </li>
        </>
    )
}



