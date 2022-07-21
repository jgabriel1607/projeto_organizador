import { React, useEffect, useState } from "react"

export const Submenu = ({ games, setGames }) => { 

	return(
		<>
			<nav className="submenu">
                <div className="orderFilter">
                    <div className="orderItems">
                        <p className="titleSubMenu"> Ordenar: </p>
                        <div className="orderButtons">
                            <button className="orderButton" id="orderTitle" onClick={() => sortByTitle()}> Título </button>
                            <button className="orderButton" id="orderReleaseDate"> Data de Lançamento </button>    
                            <button className="orderButton" id="orderGenre"> Gênero </button>
                        </div>                          
                    </div>
                    <div className="filterItems">
                        <p className="titleSubMenu"> Filtrar: </p>
                        <div className="filterSelects">
                            <div className="filterStatus filters">  
                                <label htmlFor="selectStatus" className="selectTitle"> Status: </label>
                                <div className="selectsButton">
                                    <select name="selectStatus" id="selectStatus" className="selectOptions">
                                        <option value="none"> Nenhum </option>
                                        <option value="playing"> Jogando </option>
                                        <option value="completed"> Concluídos </option>
                                    </select>
                                    <button className="applyButton" id="applyStatusButton"> Aplicar </button>
                                </div>
                            </div>
                            <div className="filterGenre filters">
                                <label htmlFor="selectGenre" className="selectTitle"> Gênero: </label>
                                <div className="selectsButton">
                                    <select name="selectGenre" id="selectGenre" className="selectOptions">
                                        <option value="action"> Action </option>
                                        <option value="adventure"> Adventure </option>
                                        <option value="arcade"> Arcade </option>
                                        <option value="beat-em-up"> Beat'em Up </option>
                                        <option value="card-board"> Card and Boardgame </option>
                                        <option value="dungeon-crawler"> Dungeon Crawler </option>
                                        <option value="fighting"> Fighting </option>
                                        <option value="hack-slash"> Hack and Slash </option>
                                        <option value="indie"> Indie </option>
                                        <option value="metroidvania"> Metroidvania </option>
                                        <option value="music-rhythm"> Music and Rhythm </option>
                                        <option value="pinball"> Pinball </option>
                                        <option value="platform"> Platform </option>
                                        <option value="point-click"> Point and Click </option>
                                        <option value="puzzle"> Puzzle </option>
                                        <option value="rts"> Real Time Strategy (RTS) </option>
                                        <option value="roguelike"> Roguelike </option>
                                        <option value="rpg"> Role Playin Game (RPG) </option>
                                        <option value="simulator"> Simulator </option>
                                        <option value="shooter"> Shooter </option>
                                        <option value="sport"> Sport </option>
                                        <option value="strategy"> Strategy </option>
                                        <option value="tactical"> Tactical </option>
                                        <option value="turn-based"> Turn Based Strategy (TBS) </option>
                                        <option value="visual-novel"> Visual Novel </option>
                                    </select>
                                    <button className="applyButton" id="applyGenreButton"> Aplicar </button>
                                </div>                                
                            </div>                        
                            <div className="filterPlatform filters">
                                <label htmlFor="selectPlatform" className="selectTitle"> Plataforma: </label>
                                <div className="selectsButton">
                                    <select name="selectPlatform" id="selectPlatform" className="selectOptions">
                                        <option value="battle-net"> Battle.Net </option>
                                        <option value="epic"> Epic Games </option>
                                        <option value="gog"> GOG </option>
                                        <option value="3ds"> Nintendo 3DS </option>
                                        <option value="nintendo-64"> Nintendo 64 </option>
                                        <option value="ds"> Nintendo DS </option>
                                        <option value="game-boy"> Nintendo Game Boy / Game Boy Color </option>
                                        <option value="game-boy-advance"> Nintendo Game Boy Advance </option>
                                        <option value="nes"> Nintendo Entertainment System (NES) </option>
                                        <option value="gamecube"> Nintendo GameCube </option>
                                        <option value="snes"> Nintendo Super Entertainment System (SNES) </option>
                                        <option value="switch"> Nintendo Switch </option>
                                        <option value="wii"> Nintendo Wii </option>
                                        <option value="wii-u"> Nintendo Wii U </option>
                                        <option value="origin"> Origin </option>
                                        <option value="pc"> PC </option>
                                        <option value="sega-cd"> Sega CD </option>
                                        <option value="dreamcast"> Sega Dreamcast </option>
                                        <option value="genesis"> Sega Genesis (Mega Drive) </option>
                                        <option value="sega-saturn"> Sega Saturn </option>
                                        <option value="ps1"> Sony Playstation One </option>
                                        <option value="ps2"> Sony Playstation 2 </option>
                                        <option value="ps3"> Sony Playstation 3 </option>
                                        <option value="steam"> Steam </option>
                                        <option value="u-play"> UPlay </option>
                                    </select>
                                    <button className="applyButton" id="applyPlatformButton"> Aplicar </button>   
                                    <button className="clearButton" id="clearButton"> Limpar Filtros </button>
                                </div>                             
                            </div>  
                            
                        </div>                                              
                    </div>                    
                </div>
                <div className="search">
                    <p className="titleSubMenu"> Busca: </p>
                    <div className="searchItems">
                        <input type="text" name="searchInput" id="searchInput" className="searchInput" placeholder="Pesquisar..."/>
                        <button className="searchButton" id="searchButton"> Pesquisar </button>
                    </div>
                    
                </div>
			</nav>
		</>
	)
}