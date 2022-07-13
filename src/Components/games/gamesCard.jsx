/* backgroundImage, developers, genres, id, platformList, publishers, releaseDate, squareIcon, status, summary, title,verticalCover */
import { Link, useHistory} from "react-router-dom"

const GamesCard = ({game}) =>{ 

    return (
        <>            
            <li className="card">
                <Link to={`/game/${game.id}`} className="gameCoverLink"> 
                    <img src={game.verticalCover} alt="gameCover" className="gameCover"/>
                </Link>
                
            </li>
        </>
    )
}
export default GamesCard

