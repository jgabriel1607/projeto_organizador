import React from "react"
import { Link } from "react-router-dom"

export const Menu = () => {
	return(
		<>
			<nav className="menu">
				<Link to="/" className="menuLink"> Jogos </Link>
				<Link to="/register" className="menuLink"> Cadastro de Jogos </Link>
			</nav>
		</>
	)
}