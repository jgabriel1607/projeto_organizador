import "./reset.css"
import "./App.css"
import { React, useEffect, useState } from "react"
import { Rotas } from "./routes/routes"
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
