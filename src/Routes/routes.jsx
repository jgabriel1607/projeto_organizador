import React from "react"
import {Switch, Route} from "react-router-dom"
import { Home } from "../Pages/Home/home"
import { Cadastro } from "../Pages/Cadastro/cadastro"

export const Rotas = () =>{
	return(
		<>
			<Switch>
				<Route exact path={"/"}><Home/></Route>
				<Route exact path={"/cadastro"}><Cadastro/></Route>
			</Switch>
		</>
	)
}