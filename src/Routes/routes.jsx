import { React, useEffect, useState} from "react"
import {Switch, Route} from "react-router-dom"
import { Home } from "../pages/home/home"
import { Register } from "../pages/register/register"
import { Game } from "../pages/game/game"
import { api } from "../services/api/apiConfig"

export const Rotas = () =>{
	const [games, setGames] = useState([])

	useEffect(() => {
		async function getGames(){
		const response = await api.get("/games")
		setGames(response.data)
		}
		getGames()		
  	}, [])

	return(
		<>
			<Switch>
				<Route exact path={"/"}>
					<Home games={games} setGames={setGames}/>
				</Route>
				<Route exact path={"/register"}>
					<Register/>
				</Route>
				<Route path={"/game/:gameId?"}>
					<Game games={games} setGames={setGames}/>
				</Route>
			</Switch>
		</>
	)
}