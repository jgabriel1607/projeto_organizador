import { createContext, useEffect, useState } from "react"
import { api } from "../../services/Api/apiConfig"
import { scrollFunctions } from "../../functions/functions"

export const GamesContext = createContext()

export const GamesProvider = ({children}) => {
    const [games, setGames] = useState([])
    const [unchangedGamesList, setUnchangedGamesList] = useState([])
    const [noResult, setNoResult] = useState(false)

    async function getGames(){
        const response = await api.get("/games")
        setGames(response.data)
        setUnchangedGamesList(response.data)}

    useEffect(() => {
		getGames()
        scrollFunctions()
  	}, [])

    return(
    <GamesContext.Provider value={{games, setGames, unchangedGamesList, setUnchangedGamesList, noResult, setNoResult}}>
        {children}
    </GamesContext.Provider>
    )
}