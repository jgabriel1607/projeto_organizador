/* backgroundImage, developers, genres, id, platformList, publishers, releaseDate, squareIcon, status, summary, title, verticalCover */
import React from "react";
import { Submenu } from "../../components/submenu/submenu";

export const Register = () => {
  return (
    <>
      <main className="main">
        <h1 className="titleGames"> Cadastro de Jogo</h1>
        <section className="content">
        	<form className="registerGame">
				<div className="registerLeftSide">
					<div className="registerItem">
						<label htmlFor="titleGame" className="labelTitle"> Título: </label>
						<input type="text" name="titleGame" id="titleGame" className="textInputs" placeholder="Título do Jogo"/>
					</div>
					<div className="registerItem">
						<label htmlFor="summaryGame" className="labelTitle"> Resumo: </label>
						<textarea name="summaryGame" id="summaryGame" className="areaInput" placeholder="Sinopse do Jogo"></textarea>
					</div>
					<div className="registerItem">
						<label htmlFor="developers" className="labelTitle"> Desenvolvedoras: </label>
						<input type="text" name="developers" id="developers"  className="textInputs" placeholder="Desenvolvedoras"/>
					</div>
					<div className="registerItem">
						<label htmlFor="publishers" className="labelTitle"> Publicadoras: </label>
						<input type="text" name="publishers" id="publishers"  className="textInputs" placeholder="Publicadoras"/>
					</div>
					<div className="registerItem">
						<label htmlFor="release-date" className="labelTitle"> Data de Lançamento: </label>
						<input type="date" name="release-date" id="release-date"  className="dataInput"  />
					</div>
					<div className="registerItem">
						<label className="labelTitle"> Imagens: </label>
						<div className="itemImages">
						<div className="images">
							<label htmlFor="verticalImage" className="titleImages"> Imagem de Capa: </label>
							<input type="button" value="Anexar Arquivo..." id="verticalImage"/>
						</div>
						<div className="images">
							<label htmlFor="backgroundImage" className="titleImages"> Imagem Horizontal: </label>
							<input type="button" value="Anexar Arquivo..." id="backgroundImage"/>
						</div>
						<div className="images">
							<label htmlFor="iconImage" className="titleImages"> Ícone: </label>
							<input type="button" value="Anexar Arquivo..." id="iconImage"/>
						</div>
						</div>
					</div>
					<div className="registerItem">
					<label className="labelTitle"> Status: </label>
						<div className="itemStatus">
							<div className="status">
								<input type="radio" name="status" id="nenhum" value="Nenhum"/> 
								<label htmlFor="nenhum"> Nenhum </label>
							</div>
							<div className="status">
								<input type="radio" name="status" id="jogando" value="Jogando"/> 
								<label htmlFor="jogando"> Jogando </label>
							</div>
							<div className="status">
								<input type="radio" name="status" id="concluído" value="Concluído"/> 
								<label htmlFor="concluído"> Concluído </label>
							</div>
						</div>	
					</div>
				</div>
				<div className="registerRightSide">
					<div className="registerItem">
						<label className="labelTitle"> Gêneros: </label>
						<div className="itemGenre">
							<div className="genre">
								<input type="checkbox" name="action" id="action"/> 
								<label htmlFor="action"> Action </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="adventure" id="adventure"/> 
								<label htmlFor="adventure"> Adventure </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="arcade" id="arcade"/> 
								<label htmlFor="arcade"> Arcade </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="beat-em-up" id="beat-up"/> 
								<label htmlFor="beat-up"> Beat'em Up </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="card-board" id="card-board"/> 
								<label htmlFor="card-board"> Card and Boardgame </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="dungeon-crawler" id="dungeon-crawler"/> 
								<label htmlFor="dungeon-crawler"> Dungeon Crawler </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="fighting" id="fighting"/> 
								<label htmlFor="fighting"> Fighting </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="hack-slash" id="hack-slash"/> 
								<label htmlFor="hack-slash"> Hack and Slash </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="indie" id="indie"/> 
								<label htmlFor="indie"> Indie </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="metroidvania" id="metroidvania"/> 
								<label htmlFor="metroidvania"> Metroidvania </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="music-rhythm" id="music-rhythm"/> 
								<label htmlFor="music-rhythm"> Music and Rhythm </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="pinball" id="pinball"/> 
								<label htmlFor="pinball"> Pinball </label>
							</div>		
							<div className="genre">
								<input type="checkbox" name="platform" id="platform"/> 
								<label htmlFor="platform"> Platform </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="point-click" id="point-click"/> 
								<label htmlFor="point-click"> Point and Click </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="puzzle" id="puzzle"/> 
								<label htmlFor="puzzle"> Puzzle </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="racing" id="racing"/> 
								<label htmlFor="racing"> Racing </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="rts" id="rts"/> 
								<label htmlFor="rts"> Real Time Strategy (RTS) </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="roguelike" id="roguelike"/> 
								<label htmlFor="roguelike"> Roguelike </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="rpg" id="rpg"/> 
								<label htmlFor="rpg"> Role Playin Game (RPG) </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="simulator" id="simulator"/> 
								<label htmlFor="simulator"> Simulator </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="shooter" id="shooter"/> 
								<label htmlFor="shooter"> Shooter </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="sport" id="sport"/> 
								<label htmlFor="sport"> Sport </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="strategy" id="strategy"/> 
								<label htmlFor="strategy"> Strategy </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="tactical" id="tactical"/> 
								<label htmlFor="tactical"> Tactical </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="turn-based" id="turn-based"/> 
								<label htmlFor="turn-based"> Turn Based Strategy (TBS) </label>
							</div>
							<div className="genre">
								<input type="checkbox" name="visual-novel" id="visual-novel"/> 
								<label htmlFor="visual-novel"> Visual Novel </label>
							</div>
						</div>              
					</div>
					<div className="registerItem">
						<label className="labelTitle"> Plataformas: </label>
						<div className="itemPlatform">
							<div className="platform">
								<input type="checkbox" name="battle-net" id="battle-net"/> 
								<label htmlFor="battle-net"> Battle.Net </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="epic" id="epic"/> 
								<label htmlFor="epic"> Epic Games </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="gog" id="gog"/> 
								<label htmlFor="gog"> GOG </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="3ds" id="3ds"/> 
								<label htmlFor="3ds"> Nintendo 3DS </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="nintendo-64" id="nintendo-64"/> 
								<label htmlFor="nintendo-64"> Nintendo 64 </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="ds" id="ds"/> 
								<label htmlFor="ds"> Nintendo DS </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="game-boy" id="game-boy"/> 
								<label htmlFor="game-boy"> Nintendo Game Boy / Game Boy Color </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="game-boy-advance" id="game-boy-advance"/> 
								<label htmlFor="game-boy-advance"> Nintendo Game Boy Advance </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="nes" id="nes"/> 
								<label htmlFor="nes"> Nintendo Entertainment System (NES) </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="gamecube" id="gamecube"/> 
								<label htmlFor="gamecube"> Nintendo GameCube </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="snes" id="snes"/> 
								<label htmlFor="snes"> Nintendo Super Entertainment System (SNES) </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="switch" id="switch"/> 
								<label htmlFor="switch"> Nintendo Switch </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="wii" id="wii"/> 
								<label htmlFor="wii"> Nintendo Wii </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="wii-u" id="wii-u"/> 
								<label htmlFor="wii-u"> Nintendo Wii U </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="origin" id="origin"/> 
								<label htmlFor="origin"> Origin </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="pc" iPC="pc"/>
								<label htmlFor="pc"> PC </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="sega-cd" id="sega-cd"/> 
								<label htmlFor="sega-cd"> Sega CD </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="dreamcast" id="dreamcast"/> 
								<label htmlFor="dreamcast"> Sega Dreamcast </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="genesis" id="genesis"/> 
								<label htmlFor="genesis"> Sega Genesis (Mega Drive) </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="sega-saturn" id="sega-saturn"/> 
								<label htmlFor="sega-saturn"> Sega Saturn </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="ps1" id="ps1"/> 
								<label htmlFor="ps1"> Sony Playstation One </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="ps2" id="ps2"/> 
								<label htmlFor="ps2"> Sony Playstation 2 </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="ps3" id="ps3"/> 
								<label htmlFor="ps3"> Sony Playstation 3 </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="steam" id="steam"/> 
								<label htmlFor="steam"> Steam </label>
							</div>
							<div className="platform">
								<input type="checkbox" name="u-play" id="u-play"/> 
								<label htmlFor="u-play"> UPlay </label>
							</div>
						</div>	
					</div>
					<div className="registerItem">
						<input type="submit" value="Salvar" className="submitInput"/>
					</div>
				</div>
          	</form>
        </section>
      </main>
    </>
  );
};
