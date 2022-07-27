import { React, useEffect, useState} from "react"
import {Switch, Route} from "react-router-dom"
import { Home } from "../pages/home/home"
import { Register } from "../pages/register/register"
import { Game } from "../pages/game/game"

export const Rotas = () =>{

	const [games, setGames] = useState([])

	useEffect(() => {
		fetch("http://localhost:3333/games")
		.then((res) => res.json())
		.then((data) => setGames(data))
		.catch((err) => console.log(err))
  	}, [])

	return(
		<>
			<Switch>
				<Route exact path={"/"}>
					<Home games={games} setGames={setGames} />
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