/* backgroundImage, developers, genres, id, platformList, publishers, releaseDate, squareIcon, status, summary, title, verticalCover */
import { api } from "../services/Api/apiConfig"
import completedIcon from "../images/completed_icon.svg"
import playingIcon from "../images/playing_icon.svg"
import battleIcon from "../images/battle_icon.svg"
import epicIcon from "../images/epic_icon.svg"
import gogIcon from "../images/gog_icon.svg"
import nintendoIcon from "../images/nintendo_icon.svg"
import originIcon from "../images/origin_icon.svg"
import playstationIcon from "../images/playstation_icon.svg"
import primeIcon from "../images/prime_icon.svg"
import segaIcon from "../images/sega_icon.svg"
import steamIcon from "../images/steam_icon.svg"
import uplayIcon from "../images/uplay_icon.svg"
import xboxIcon from "../images/xbox_icon.svg"
import windowsIcon from "../images/windows_icon.svg"
import openIcon from "../images/open_icon.svg"
import closeIcon from "../images/close_icon.svg"

// Funções de Filtros

// Ordenar por Título
export function sortByTitle(games, setGames){
    let temporaryArray = []
    games.map((game) => {
        temporaryArray.push(game)
    })
    let result = [...temporaryArray.sort((a, b) => {
        if (a.title < b.title){
            return -1;
        }
        if (a.title > b.title){
            return 1;
        }
        return 0;
    })]
    setGames(result)
}

// Ordenar por Data
export function sortByReleaseDate(games, setGames){
    let temporaryArray = []
    games.map((game) => {
        temporaryArray.push(game)
    })
    let result = [...temporaryArray.sort((a, b) => {
        if (a.releaseDate < b.releaseDate){
            return -1;
        }
        if (a.releaseDate > b.releaseDate){
            return 1;
        }
        return 0;
    })]
    setGames(result)
}

// Ordenar por Gênero
export function sortByGenre(games, setGames){
    let temporaryArray = []
    games.map((game) => {
        temporaryArray.push(game)
    })
    let result = [...temporaryArray.sort((a, b) => {
        if (a.genres < b.genres){
            return -1;
        }
        if (a.genres > b.genres){
            return 1;
        }
        return 0;
    })]
    setGames(result)
}

// Filtrar por Status
export function filterStatus(filteredStatus, unchangedGamesList, setGames, setNoResult){ 
    setNoResult(false)   
    let result = unchangedGamesList.filter((game) => {
        if(filteredStatus == game.status){
            return game
        }     
    })
    if (result <= 0){
        setNoResult(true)
    }
    else{
        setNoResult(false)
    }
    setGames(result)
}

// Filtrar por Gênero
export function filterGenre(filteredGenre, unchangedGamesList, setGames, setNoResult){
    setNoResult(false)
    let result = []
    unchangedGamesList.map((game) => {             
        game.genres.filter((genre)=>{
            if(genre.toLowerCase() == filteredGenre.toLowerCase()){  
                result.push(game)
            }
        })
    })
    if (result <= 0){
        setNoResult(true)
    }
    else{
        setNoResult(false)
    }
    setGames(result)
}

// Filtrar por Plataforma
export function filterPlatform(filteredPlatform, unchangedGamesList, setGames, setNoResult){
    setNoResult(false)
    let result = []
    unchangedGamesList.map((game) => {             
        game.platformList.filter((platform)=>{
            if(platform.toLowerCase() == filteredPlatform.toLowerCase()){  
                result.push(game)
            }
        })
    })
    if (result <= 0){
        setNoResult(true)
    }
    else{
        setNoResult(false)
    }
    setGames(result)
}

// Busca Instantânea 
export function instantSearch(event, setSearchedItem, setGames, unchangedGamesList, setNoResult){
    let searchedItem = event.target.value.toLowerCase()
    setSearchedItem(searchedItem)
    let result = []
    unchangedGamesList.map((game) => { 
        let gameTitle = game.title.toLowerCase()   
        let foundedGame = gameTitle.includes(searchedItem) 
        if (foundedGame){
            result.push(game)
        }   
    })    
    setGames(result)  

    if (result <= 0){
        setNoResult(true)
    }
    else{
        setNoResult(false)
    } 
}

// Resetar Filtros
export function resetSorting(unchangedGamesList, setGames, setNoResult){ 
    let searchInput = document.querySelector(".searchInput")
    searchInput.value = ""
    setNoResult(false)
    setGames(unchangedGamesList)
}

// Função para Excluir Jogo

export function removeGame(gameId){    
    api.delete(`/games/${gameId}`)
}

//Funções de Rolagem da Tela

export function scrollFunctions(){
    window.onscroll = function fixedSubMenuAndTopButton(){
        // Fixed SubMenu
        let submenu = document.querySelector("#submenu")
        let stickySubmenu = submenu.offsetTop

        if (window.pageYOffset > stickySubmenu) {
            submenu.classList.remove("submenu")
            submenu.classList.add("stickySubmenu")
        } 
        else {
            submenu.classList.remove("stickySubmenu")
            submenu.classList.add("submenu")
        }


        // Fixed Search Area
        let searchArea = document.querySelector("#searchArea")
        let stickySearchArea = searchArea.offsetTop

        if (window.pageYOffset > stickySearchArea) {
            searchArea.classList.remove("searchArea")
            searchArea.classList.add("stickySearchArea")
        } 
        else {
            searchArea.classList.remove("stickySearchArea")
            searchArea.classList.add("searchArea")
        }


        // Show Button on Scroll Down
        let buttonVar = document.querySelector("#backToTop")

        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            buttonVar.classList.add("toggleBackToTop")
        } 
        else{
            buttonVar.classList.remove("toggleBackToTop")
        }						
    } 
}

// Mostrando Status
export const MostraStatus = (game) => {
    let icon = ""
    if (game.status == "Concluído"){
        icon = completedIcon
    }
    if (game.status == "Jogando"){
        icon = playingIcon
    }
   return icon
}

// Mostrando Plataformas 
export const MostraPlataforma = (game) => {
    let icon = ""   
    if (game.platformList.includes("Steam")){
        icon = steamIcon
    } 
    else if (game.platformList.includes("Battle.Net")){
        icon = battleIcon
    } 
    else if (game.platformList.includes("Epic Games")){
        icon = epicIcon
    }   
    else if (game.platformList.includes("GOG")){
        icon = gogIcon
    } 
    else if (game.platformList.includes("Origin")){
        icon = originIcon
    }
    else if (game.platformList.includes("Prime Gaming")){
        icon = primeIcon
    }
    else if (game.platformList.includes("PC")){
        icon = windowsIcon
    }
    else if (game.platformList.includes("UPlay")){
        icon = uplayIcon
    }
    else {
        game.platformList.forEach(platform => {
            if(platform.includes("Nintendo")){
                icon = nintendoIcon
            }
            else if(platform.includes("Playstation")){
                icon = playstationIcon
            }
            else if(platform.includes("Sega")){
                icon = segaIcon
            }
            else if(platform.includes("Xbox")){
                icon = xboxIcon
            }
        })
    }
    return icon
}

// Mostrando Submenu Mobile
export const MostraSubmenu = (isHidden, setIsHidden) => {
    let submenu = document.querySelector(".submenu")
    let stickySubmenu = document.querySelector(".stickySubmenu")
    if(submenu != null){
        if(isHidden){
            submenu.classList.add("showSubmenu") 
            setIsHidden(false)
        }
        else{
            submenu.classList.remove("showSubmenu")
            setIsHidden(true)
        }    
    }
    if(stickySubmenu != null){
        if(isHidden){
            stickySubmenu.classList.add("showSubmenu")      
            setIsHidden(false)
        }
        else{
            stickySubmenu.classList.remove("showSubmenu")
            setIsHidden(true)
        }    
    }    
}

// Mostrando Ícone Submenu
export const MostraIconeSubmenu = (isHidden) => {
    let icon = ""
    if(isHidden){
        icon = openIcon
    }
    else{
        icon = closeIcon
    }
    return icon
}



