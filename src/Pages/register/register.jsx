/* backgroundImage, developers, genres, id, platformList, publishers, releaseDate, squareIcon, status, summary, title, verticalCover */
import React from "react"

export const Register = () => {
	return(
		<>
			<section className="content">
				<h1> Cadastro </h1>		
				<form className="registerGame">
					<label htmlFor="titleGame"> Título </label>
					<input type="text" id="titleGame"/>
					<label htmlFor="summaryGame"></label>
				</form>
			</section>
		</>
	)
}