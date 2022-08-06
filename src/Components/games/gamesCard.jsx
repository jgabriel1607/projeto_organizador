/* backgroundImage, developers, genres, id, platformList, publishers, releaseDate, squareIcon, status, summary, title,verticalCover */
import { Link } from "react-router-dom"
import completedIcon from "../../images/completed_icon.svg"
import playingIcon from "../../images/playing_icon.svg"
import steamIcon from "../../images/steam_icon.svg"
import epicIcon from "../../images/epic_icon.svg"

export const GamesCard = ({ game }) =>{
    let isSteam = false
    let isEpic = false

    function testaPlataforma(){
        return game.platformList.map((platform) => {
            if(platform == "Steam"){
                isSteam = true
            }
            else{
                isSteam = false
            }
            if(platform == "Epic Games"){
                isEpic = true
            }
            else{
                isEpic = false
            }
        })        
    }
    testaPlataforma()
    
    return (
        <>            
            <li className="card">                
                <Link to={`/game/${game.id}`} className="gameCoverLink">                     
                        {game.status == "Concluído" ? 
                        <div className="statusIconBackground"> 
                            <div className="icon">
                                <img src={completedIcon} alt="Concluído" className="statusIcon"/> 
                            </div>
                            <div className="icon">
                                {isSteam? 
                                    <img src={steamIcon} alt="SteamIcon" className="statusIcon"/>
                                : ""}
                            </div>
                            <div className="icon">
                                {isEpic? 
                                    <img src={epicIcon} alt="EpicIcon" className="statusIcon"/>
                                : ""} 
                            </div>                       
                        </div>
                        : ""}                        
                        {game.status == "Jogando" ? 
                        <div className="statusIconBackground"> 
                            <div className="icon">
                                <img src={playingIcon} alt="Jogando" className="statusIcon"/> 
                            </div>
                            <div className="icon">
                                {isSteam? 
                                    <img src={steamIcon} alt="SteamIcon" className="statusIcon"/>
                                : ""}
                            </div>
                            <div className="icon">
                                {isEpic? 
                                    <img src={epicIcon} alt="EpicIcon" className="statusIcon"/>
                                : ""} 
                            </div>
                        </div>    
                        : ""}  {game.status == "Nenhum" ? 
                        <div className="statusIconBackground"> 
                            <div className="icon">
                                {isSteam? 
                                    <img src={steamIcon} alt="SteamIcon" className="statusIcon"/>
                                : ""}
                            </div>
                            <div className="icon">
                                {isEpic? 
                                    <img src={epicIcon} alt="EpicIcon" className="statusIcon"/>
                                : ""} 
                            </div>
                        </div>    
                        : ""}                       
                    <img src={game.verticalCover} alt={game.title} className="gameCover"/>
                </Link>                
            </li>
        </>
    )
}



