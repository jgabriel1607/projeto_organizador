import { React, useEffect, useState} from "react"
import {Switch, Route} from "react-router-dom"
import { Home } from "../pages/home/home"
import { Register } from "../pages/register/register"
import { Game } from "../pages/game/game"
import { UpdateGamePage } from "../pages/updateGame/updateGame"

export const Rotas = () =>{
	return(
		<>
		<Switch>	
				<Route exact path={"/"}>
					<Home/>
				</Route>
				<Route exact path={"/register"}>
					<Register/>
				</Route>
				<Route path={"/updateGame/:gameId?"}>
					<UpdateGamePage/>
				</Route>
				<Route path={"/game/:gameId?"}>
					<Game/>
				</Route>
		</Switch>
		</>
	)
}