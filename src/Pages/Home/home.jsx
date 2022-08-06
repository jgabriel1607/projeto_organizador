import { Submenu } from "../../components/submenu/submenu"
import { GamesList } from "../../components/games/gamesList"
import { TopButton } from "../../components/topButton/topButton"

export const Home = () => {  

  return (
    <>
      <main className="main">
        <h1 className="titlePage"> Biblioteca de Jogos </h1>
        <Submenu />   
        <GamesList />         
        <TopButton/>
      </main>
    </>
  )
}
