import "../src/style/reset.css"
import "../src/style/style.css"
import { React, useEffect, useState } from "react"
import { Rotas } from "./Routes/routes"
import { Menu } from "./components/menu/menu"

function App() {  
  return(  
    <>
    <Menu/>
    <Rotas/>
    </>
  )
}

export default App;
