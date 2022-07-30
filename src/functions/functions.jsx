import { api } from "../services/Api/apiConfig"
/* backgroundImage, developers, genres, id, platformList, publishers, releaseDate, squareIcon, status, summary, title, verticalCover */

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
    setNoResult(false)
    setGames(unchangedGamesList)
}

// Função para Excluir Jogo

export function removeGame(gameId){    
    api.delete(`/games/${gameId}`)
}

//Funções de Rolagem da Tela

export function scrollFunctions(){
    window.onscroll = 
		function fixedSubMenuAndTopButton(){

			// Fixed SubMenu
			let submenu = document.querySelector("#submenu")
        	let sticky = submenu.offsetTop

            if (window.pageYOffset > sticky) {
                submenu.classList.remove("submenu")
                submenu.classList.add("stickySubmenu")
            } 
			else {
                submenu.classList.remove("stickySubmenu")
                submenu.classList.add("submenu")
            }

			// Show Button on Scroll Down
			let buttonVar = document.querySelector("#backToTop")

			if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
				buttonVar.style.display = "block";
			} 
			else{
				buttonVar.style.display = "none";
			}						
        } 
}

// Função Para Voltar ao Topo da Página
export function topFunction() {    
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}