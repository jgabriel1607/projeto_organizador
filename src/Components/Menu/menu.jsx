import React from "react"
import { Link } from "react-router-dom"
import "../../style/menu.css"

export const Menu = () => {
	return(
		<>
			<nav className="menu">
				<Link to="/"> <h1 className="menuTitle"> MYLIBRARY </h1> </Link>
				<Link to="/" className="menuLink"> Jogos </Link>
				<Link to="/register" className="menuLink"> Cadastro de Jogo </Link>
			</nav>
		</>
	)
}