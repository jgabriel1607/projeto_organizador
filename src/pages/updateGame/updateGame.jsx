/* backgroundImage, developers, genres, id, platformList, publishers, releaseDate, squareIcon, status, summary, title, verticalCover */
import React from "react";
import { api } from "../../services/Api/apiConfig"
import { useState, useContext } from "react";
import { Link, useParams, useHistory} from "react-router-dom";
import { GamesContext } from "../../providers/games/games"
import "../../style/game.css"
import "../../style/register.css"


export const UpdateGamePage = () => {
  
	const {games, unchangedGamesList} = useContext(GamesContext)  
	const history = useHistory()
	const param = useParams().gameId  
	const game = games.filter((gameInfo) => {
		if(param == gameInfo.id){
		return gameInfo
		}
	})

	const dateFormat = new Intl.DateTimeFormat('pt-BR')
	const convertingDateFormat = dateFormat.format(new Date(game[0].releaseDate))

	const [gameId, setGameId] = useState(game[0].id);
	const [gameTitle, setGameTitle] = useState(game[0].title);
	const [gameSummary, setGameSummary] = useState(game[0].summary);
	const [gameStatus, setGameStatus] = useState(game[0].status);
	const [gameGenre, setGameGenre] = useState(game[0].genres);
	const [gameReleaseDate, setGameReleaseDate] = useState(game[0].releaseDate);
	const [gamePlatformList, setGamePlatformList] = useState(game[0].platformList);
	const [gameDevelopers, setGameDevelopers] = useState(game[0].developers);
	const [gamePublishers, setGamePublishers] = useState(game[0].publishers);
	const [gameBackgroundImage, setGameBackgroundImage] = useState(game[0].backgroundImage);
	const [gameSquareIcon, setGameSquareIcon] = useState(game[0].squareIcon);
	const [gameVerticalCover, setGameVerticalCover] = useState(game[0].verticalCover);

	const[originalGameName, setOriginalGameName] = useState(gameTitle)
	const[newGenres, setNewGenres] = useState(false)

	const handleCheckboxGenre = (event) => {
		let checkboxValue = event.target.value
		let checkboxChecked = event.target.checked
		let result = gameGenre.find((item) => item == checkboxValue)

		if (checkboxChecked){
			if (newGenres == false){
				setGameGenre([])
				setGameGenre([checkboxValue])
				setNewGenres(true)
			}
			else{
				if (result !== checkboxValue){
					setGameGenre([...gameGenre, checkboxValue])
				}
			}
		}
		else{
			let newArray = gameGenre.filter((item) => item !== checkboxValue)
			setGameGenre(newArray)
		}
	}	

	const handleCheckboxPlatform = (event) => {
		let checkboxValue = event.target.value
		let checkboxChecked = event.target.checked
		let result = gamePlatformList.find((item) => item == checkboxValue)

		if (checkboxChecked){
			if (newGenres == false){
				setGamePlatformList([])
				setGamePlatformList([checkboxValue])
				setNewGenres(true)
			}
			else{
				if (result !== checkboxValue){
					setGamePlatformList([...gamePlatformList, checkboxValue])
				}
			}
		}
		else{
			let newArray = gamePlatformList.filter((item) => item !== checkboxValue)
			setGamePlatformList(newArray)
		}	
	}

	const updateGame = (e) => {
		e.preventDefault()

		const newGame = {
			id: gameId,
			title: gameTitle,
			summary: gameSummary,
			platformList: gamePlatformList,
			developers: gameDevelopers,
			publishers: gamePublishers,
			releaseDate: gameReleaseDate,
			genres: gameGenre,
			backgroundImage: gameBackgroundImage,
			squareIcon: gameSquareIcon,
			verticalCover: gameVerticalCover,
			status: gameStatus
		}

		api.put(`/games/${gameId}`, newGame)

		alert("Jogo Atualizado com Sucesso!")

		history.push("/")	
		history.go(0)
	}

	return (
    <>
      <main className="main">
        <h1 className="titlePage"> Editando: {originalGameName}</h1>
        <section className="content">
        	<form className="registerGame" onSubmit={updateGame}>
				<div className="registerLeftSide">
					<div className="registerItem">
						<label htmlFor="titleGame" className="labelTitle"> Título: </label>
						<input type="text" name="titleGame" id="titleGame" className="textInputs" placeholder="Título do Jogo" value={gameTitle} onChange={() => {setGameTitle(titleGame.value)}}/>
					</div>
					<div className="registerItem">
						<label htmlFor="summaryGame" className="labelTitle"> Resumo: </label>
						<textarea name="summaryGame" id="summaryGame" className="areaInput" placeholder="Resumo do Jogo" value={gameSummary} onChange={() => {setGameSummary(summaryGame.value)}}></textarea>
					</div>					
					<div className="registerItem">
						<label htmlFor="developers" className="labelTitle"> Desenvolvedoras: </label>
						<input type="text" name="developers" id="developers"  className="textInputs" placeholder="Desenvolvedoras" value={gameDevelopers} onChange={() => {setGameDevelopers(developers.value.split(','))}}/>
					</div>					
					<p className="observacaoInfo"> *Caso tenha mais de 1 item, separar por ",". </p>
					<div className="registerItem">
						<label htmlFor="publishers" className="labelTitle"> Distribuidoras: </label>
						<input type="text" name="publishers" id="publishers"  className="textInputs" placeholder="Distribuidoras" value={gamePublishers} onChange={() => {setGamePublishers(publishers.value.split(','))}}/>
					</div>					
					<p className="observacaoInfo"> *Caso tenha mais de 1 item, separar por ",". </p>
					<div className="registerItem">
						<label htmlFor="releaseDate" className="labelTitle"> Data de Lançamento: </label>
						<input type="date" name="releaseDate" id="releaseDate"  className="dataInput" defaultValue={gameReleaseDate} onChange={() => {setGameReleaseDate(releaseDate.value)}}/>
					</div>
					<div className="registerItem">
						<label className="labelTitle"> Imagens: </label>
						<div className="itemImages">
						<div className="images">
							<label htmlFor="verticalImage" className="titleImages"> Imagem de Capa: </label>
							<input type="url" name="verticalImage" id="verticalImage" className="textInputs" placeholder="URL da Imagem de Capa" value={gameVerticalCover} onChange={() => {setGameVerticalCover(verticalImage.value)}}/>
						</div>
						<div className="images">
							<label htmlFor="backgroundImage" className="titleImages"> Imagem Horizontal: </label>
							<input type="url" name="backgroundImage" id="backgroundImage" className="textInputs" placeholder="URL da Imagem de Horizontal" value={gameBackgroundImage} onChange={() => {setGameBackgroundImage(backgroundImage.value)}}/>
						</div>
						<div className="images">
							<label htmlFor="iconImage" className="titleImages"> Ícone: </label>
							<input type="url" name="iconImage" id="iconImage" className="textInputs" placeholder="URL da Imagem de Ícone" value={gameSquareIcon} onChange={() => {setGameSquareIcon(iconImage.value)}}/>
						</div>
						</div>
					</div>
					<div className="registerItem">
						<label className="labelTitle"> Status: </label>
						<div className="itemStatus">
							<select name="selectStatus" id="selectStatus" className="options" onChange={() => {setGameStatus(selectStatus.value)}}>
								<option value="Nenhum"> Nenhum </option>
								<option value="Jogando"> Jogando </option>
								<option value="Concluído"> Concluido </option>
							</select>
						</div>	
					</div>
				</div>
				<div className="registerRightSide">
					<div className="registerItem">
						<label className="labelTitle"> Gêneros: </label>
						<div className="itemGenre">
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="action" value="Action" onChange={handleCheckboxGenre}/> 
								<label htmlFor="action"> Action </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="adventure" value="Adventure" onChange={handleCheckboxGenre}/> 
								<label htmlFor="adventure"> Adventure </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="arcade" value="Arcade" onChange={handleCheckboxGenre}/> 
								<label htmlFor="arcade"> Arcade </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="beat-up" value="Beat'em Up" onChange={handleCheckboxGenre}/> 
								<label htmlFor="beat-up"> Beat'em Up </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="card-board" value="Card and Boardgame" onChange={handleCheckboxGenre}/> 
								<label htmlFor="card-board"> Card and Boardgame </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="casual" value="Casual" onChange={handleCheckboxGenre}/> 
								<label htmlFor="casual"> Casual </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="dungeon-crawler" value="Dungeon Crawler" onChange={handleCheckboxGenre}/> 
								<label htmlFor="dungeon-crawler"> Dungeon Crawler </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="fighting" value="Fighting" onChange={handleCheckboxGenre}/> 
								<label htmlFor="fighting"> Fighting </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="hack-slash" value="Hack and Slash" onChange={handleCheckboxGenre}/> 
								<label htmlFor="hack-slash"> Hack and Slash </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="indie" value="Indie" onChange={handleCheckboxGenre}/> 
								<label htmlFor="indie"> Indie </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="metroidvania" value="Metroidvania" onChange={handleCheckboxGenre}/> 
								<label htmlFor="metroidvania"> Metroidvania </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="music-rhythm" value="Music and Rhythm" onChange={handleCheckboxGenre}/> 
								<label htmlFor="music-rhythm"> Music and Rhythm </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="party" value="Party" onChange={handleCheckboxGenre}/> 
								<label htmlFor="party"> Party </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="pinball" value="Pinball" onChange={handleCheckboxGenre}/> 
								<label htmlFor="pinball"> Pinball </label>
							</div>		
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="platform" value="Platform" onChange={handleCheckboxGenre}/> 
								<label htmlFor="platform"> Platform </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="point-click" value="Point and Click" onChange={handleCheckboxGenre}/> 
								<label htmlFor="point-click"> Point and Click </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="puzzle" value="Puzzle" onChange={handleCheckboxGenre}/> 
								<label htmlFor="puzzle"> Puzzle </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="racing" value="Racing" onChange={handleCheckboxGenre}/> 
								<label htmlFor="racing"> Racing </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="rts" value="Real Time Strategy (RTS)" onChange={handleCheckboxGenre}/> 
								<label htmlFor="rts"> Real Time Strategy (RTS) </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="roguelike" value="Roguelike" onChange={handleCheckboxGenre}/> 
								<label htmlFor="roguelike"> Roguelike </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="rpg" value="Role Playing Game (RPG)" onChange={handleCheckboxGenre}/> 
								<label htmlFor="rpg"> Role Playing Game (RPG) </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="simulator" value="Simulator" onChange={handleCheckboxGenre}/> 
								<label htmlFor="simulator"> Simulator </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="shooter" value="Shooter" onChange={handleCheckboxGenre}/> 
								<label htmlFor="shooter"> Shooter </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="sports" value="Sports" onChange={handleCheckboxGenre}/> 
								<label htmlFor="sports"> Sports </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="strategy" value="Strategy" onChange={handleCheckboxGenre}/> 
								<label htmlFor="strategy"> Strategy </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="survival-horror" value="Survival Horror" onChange={handleCheckboxGenre}/> 
								<label htmlFor="survival-horror"> Survival Horror </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="terror" value="Terror" onChange={handleCheckboxGenre}/> 
								<label htmlFor="terror"> Terror </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="tactical" value="Tactical" onChange={handleCheckboxGenre}/> 
								<label htmlFor="tactical"> Tactical </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="turn-based" value="Turn Based Strategy" onChange={handleCheckboxGenre}/> 
								<label htmlFor="turn-based"> Turn Based Strategy (TBS) </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="checkboxGenre" id="visual-novel" value="Visual Novel" onChange={handleCheckboxGenre}/> 
								<label htmlFor="visual-novel"> Visual Novel </label>
							</div>
						</div>              
					</div>
					<div className="registerItem">
						<label className="labelTitle"> Plataformas: </label>
						<div className="itemPlatform">							
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="battle-net" value="Battle.Net" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="battle-net"> Battle.Net </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="epic" value="Epic Games" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="epic"> Epic Games </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="gog" value="GOG" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="gog"> GOG </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="3ds" value="Nintendo 3DS" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="3ds"> Nintendo 3DS </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="nintendo-64" value="Nintendo 64" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="nintendo-64"> Nintendo 64 </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="ds" value="Nintendo DS" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="ds"> Nintendo DS </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="game-boy" value="Nintendo Game Boy / Game Boy Color" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="game-boy"> Nintendo Game Boy / Game Boy Color </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="game-boy-advance" value="Nintendo Game Boy Advance" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="game-boy-advance"> Nintendo Game Boy Advance </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="nes" value="Nintendo Entertainment System (NES)" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="nes"> Nintendo Entertainment System (NES) </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="gamecube" value="Nintendo GameCube" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="gamecube"> Nintendo GameCube </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="snes" value="Nintendo Super Entertainment System (SNES)" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="snes"> Nintendo Super Entertainment System (SNES) </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="switch" value="Nintendo Switch" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="switch"> Nintendo Switch </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="wii" value="Nintendo Wii" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="wii"> Nintendo Wii </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="wii-u" value="Nintendo Wii U" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="wii-u"> Nintendo Wii U </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="origin" value="Origin" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="origin"> Origin </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="pc" value="PC" onChange={handleCheckboxPlatform}/>
								<label htmlFor="pc"> PC </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="prime-gaming" value="Prime Gaming" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="prime-gaming"> Prime Gaming </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="sega-cd" value="Sega CD" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="sega-cd"> Sega CD </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="dreamcast" value="Sega Dreamcast" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="dreamcast"> Sega Dreamcast </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="genesis" value="Sega Genesis" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="genesis"> Sega Genesis (Mega Drive) </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="sega-saturn" value="Sega Saturn" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="sega-saturn"> Sega Saturn </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="ps1" value="Sony Playstation One" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="ps1"> Sony Playstation One </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="ps2" value="Sony Playstation 2" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="ps2"> Sony Playstation 2 </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="ps3" value="Sony Playstation 3" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="ps3"> Sony Playstation 3 </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="steam" value="Steam" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="steam"> Steam </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="u-play" value="UPlay" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="u-play"> UPlay </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="xbox" value="Xbox" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="xbox"> Xbox </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="xbox360" value="Xbox 360" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="xbox360"> Xbox 360 </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="checkboxPlatform" id="xbox-one" value="Xbox One" onChange={handleCheckboxPlatform}/> 
								<label htmlFor="xbox-one"> Xbox One </label>
							</div>
						</div>	
					</div>
					<div className="registerItem">
						<input type="submit" value="Salvar" className="submitInput" />
						<section className="previousPage">
							<Link to={"/"}> Voltar </Link>
						</section>
					</div>
				</div>
          	</form>
        </section>
      </main>
    </>
  );
};
