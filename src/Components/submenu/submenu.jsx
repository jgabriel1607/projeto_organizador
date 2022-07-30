import { React, useEffect, useState } from "react"
import { sortByTitle, sortByReleaseDate, sortByGenre, resetSorting, filterStatus, filterGenre, filterPlatform, instantSearch } from "../../functions/functions"

export const Submenu = ({ games, setGames, unchangedGamesList, setNoResult }) => {
    const [searchedItem, setSearchedItem] = useState("")
    const [filteredStatus, setFilteredStatus] = useState("Nenhum")
    const [filteredGenre, setFilteredGenre] = useState("Action")
    const [filteredPlatform, setFilteredPlatform] = useState("Amazon Games")
    
	return(
		<>
			<nav className="submenu" id="submenu">
                <div className="orderFilter">
                    <div className="orderItems">
                        <p className="titleSubMenu"> Ordenar: </p>
                        <div className="orderButtons">
                            <button className="orderButton" onClick={() => {sortByTitle(games, setGames)}}> Título </button>
                            <button className="orderButton" onClick={() => {sortByReleaseDate(games, setGames)}}> Data de Lançamento </button>    
                            <button className="orderButton" onClick={() => {sortByGenre(games, setGames)}}> Gênero </button>
                        </div>                          
                    </div>
                    <div className="filterItems">
                        <p className="titleSubMenu"> Filtrar: </p>
                        <div className="filterSelects">
                            <div className="filterStatus filters">  
                                <label htmlFor="selectStatus" className="selectTitle"> Status: </label>
                                <div className="selectsButton">
                                    <select name="selectStatus" id="selectStatus" className="selectOptions" onChange={(event) => {setFilteredStatus(event.target.value)}}>
                                        <option value="Nenhum"> Nenhum </option>
                                        <option value="Jogando"> Jogando </option>
                                        <option value="Concluído"> Concluído </option>
                                        <option value="Outro"> Outro </option>
                                    </select>
                                    <button className="applyButton" id="applyStatusButton" onClick={() => {filterStatus(filteredStatus, unchangedGamesList, setGames, setNoResult)}}> Aplicar </button>
                                </div>
                            </div>
                            <div className="filterGenre filters">
                                <label htmlFor="selectGenre" className="selectTitle"> Gênero: </label>
                                <div className="selectsButton">
                                    <select name="selectGenre" id="selectGenre" className="selectOptions" onChange={(event) => {setFilteredGenre(event.target.value)}}>
                                        <option value="Action"> Action </option>
                                        <option value="Adventure"> Adventure </option>
                                        <option value="Arcade"> Arcade </option>
                                        <option value="Beat'em Up"> Beat'em Up </option>
                                        <option value="Card and Boardgame"> Card and Boardgame </option>
                                        <option value="Dungeon Crawler"> Dungeon Crawler </option>
                                        <option value="Fighting"> Fighting </option>
                                        <option value="Hack and Slash"> Hack and Slash </option>
                                        <option value="Indie"> Indie </option>
                                        <option value="Metroidvania"> Metroidvania </option>
                                        <option value="Music and Rhythm"> Music and Rhythm </option>
                                        <option value="Pinball"> Pinball </option>
                                        <option value="Platform"> Platform </option>
                                        <option value="Point and Click"> Point and Click </option>
                                        <option value="Puzzle"> Puzzle </option>
                                        <option value="Real Time Strategy (RTS)"> Real Time Strategy (RTS) </option>
                                        <option value="Roguelike"> Roguelike </option>
                                        <option value="Role Playin Game (RPG)"> Role Playin Game (RPG) </option>
                                        <option value="Simulator"> Simulator </option>
                                        <option value="Shooter"> Shooter </option>
                                        <option value="Sport"> Sport </option>
                                        <option value="Strategy"> Strategy </option>
                                        <option value="Tactical"> Tactical </option>
                                        <option value="Turn Based Strategy (TBS)"> Turn Based Strategy (TBS) </option>
                                        <option value="Visual Novel"> Visual Novel </option>
                                    </select>
                                    <button className="applyButton" id="applyGenreButton" onClick={() => {filterGenre(filteredGenre, unchangedGamesList, setGames, setNoResult)}}> Aplicar </button>
                                </div>                                
                            </div>                        
                            <div className="filterPlatform filters">
                                <label htmlFor="selectPlatform" className="selectTitle"> Plataforma: </label>
                                <div className="selectsButton">
                                    <select name="selectPlatform" id="selectPlatform" className="selectOptions" onChange={(event) => {setFilteredPlatform(event.target.value)}}>
                                        <option value="Amazon Games"> Amazon Games </option>
                                        <option value="Battle.Net"> Battle.Net </option>
                                        <option value="Epic Games"> Epic Games </option>
                                        <option value="GOG"> GOG </option>
                                        <option value="Nintendo 3DS"> Nintendo 3DS </option>
                                        <option value="Nintendo 64"> Nintendo 64 </option>
                                        <option value="Nintendo DS"> Nintendo DS </option>
                                        <option value="Nintendo Game Boy / Game Boy Color"> Nintendo Game Boy / Game Boy Color </option>
                                        <option value="Nintendo Game Boy Advance"> Nintendo Game Boy Advance </option>
                                        <option value="Nintendo Entertainment System (NES)"> Nintendo Entertainment System (NES) </option>
                                        <option value="Nintendo GameCube"> Nintendo GameCube </option>
                                        <option value="Nintendo Super Entertainment System (SNES)"> Nintendo Super Entertainment System (SNES) </option>
                                        <option value="Nintendo Switch"> Nintendo Switch </option>
                                        <option value="Nintendo Wii"> Nintendo Wii </option>
                                        <option value="Nintendo Wii U"> Nintendo Wii U </option>
                                        <option value="Origin"> Origin </option>
                                        <option value="PC"> PC </option>
                                        <option value="Sega CD"> Sega CD </option>
                                        <option value="Sega Dreamcast"> Sega Dreamcast </option>
                                        <option value="Sega Genesis (Mega Drive)"> Sega Genesis (Mega Drive) </option>
                                        <option value="Sega Saturn"> Sega Saturn </option>
                                        <option value="Sony Playstation One"> Sony Playstation One </option>
                                        <option value="Sony Playstation 2"> Sony Playstation 2 </option>
                                        <option value="Sony Playstation 3"> Sony Playstation 3 </option>
                                        <option value="Steam"> Steam </option>
                                        <option value="UPlay"> UPlay </option>
                                    </select>
                                    <button className="applyButton" id="applyPlatformButton" onClick={() => {filterPlatform(filteredPlatform, unchangedGamesList, setGames, setNoResult)}}> Aplicar </button>   
                                    <button className="clearButton" id="clearButton"  onClick={() => {resetSorting(unchangedGamesList, setGames, setNoResult)}}> Limpar Filtros </button>
                                </div>                             
                            </div>  
                            
                        </div>                                              
                    </div>                    
                </div>
                <div className="search">
                    <p className="titleSubMenu"> Busca: </p>
                    <div className="searchItems">
                        <input type="text" name="searchInput" className="searchInput" placeholder="Pesquisar..." onKeyUp={(event) => instantSearch(event, setSearchedItem, setGames, unchangedGamesList, setNoResult)} />                        
                    </div>                    
                </div>
			</nav>
		</>
	)
}
