import { React, useEffect, useState} from "react"
import {Switch, Route} from "react-router-dom"
import { Home } from "../pages/home/home"
import { Register } from "../pages/register/register"
import { Game } from "../pages/game/game"
import { api } from "../services/Api/apiConfig"
import { scrollFunctions } from "../functions/functions"

export const Rotas = () =>{
	const [games, setGames] = useState([])	
    const [unchangedGamesList, setUnchangedGamesList] = useState([])

	useEffect(() => {
		async function getGames(){
			const response = await api.get("/games")
			setGames(response.data)
			setUnchangedGamesList(response.data)
		}

		getGames()
		scrollFunctions()	
		

		/* fetch("http://localhost:3333/games")
		.then((res) => res.json())
		.then((data) => {
			setGames(data)
			setUnchangedGamesList(data)
		})
		.catch((err) => console.log(err)) */
  	}, [])

	return(
		<>
			<Switch>
				<Route exact path={"/"}>
					<Home games={games} setGames={setGames} unchangedGamesList={unchangedGamesList}/>
				</Route>
				<Route exact path={"/register"}>
					<Register/>
				</Route>
				<Route path={"/game/:gameId?"}>
					<Game games={games} setGames={setGames} unchangedGamesList={unchangedGamesList}/>
				</Route>
			</Switch>
		</>
	)
}