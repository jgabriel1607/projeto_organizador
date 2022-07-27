/* backgroundImage, developers, genres, id, platformList, publishers, releaseDate, squareIcon, status, summary, title,verticalCover */
export function sortByTitle(games, setGames){
    let result = [...games.sort((a, b) => {
        if (a.title < b.title){
            return -1;
        }
        if (a.title > b.title){
            return 1;
        }
        return 0;
    })]
    setGames(result)
    console.log(games)
}

export function sortByReleaseDate(games, setGames){  
    let result = [...games.sort((a, b) => {
        if (a.releaseDate < b.releaseDate){
            return -1;
        }
        if (a.releaseDate > b.releaseDate){
            return 1;
        }
        return 0;
    })]
    console.log(result)
    setGames(result)
    console.log(games)
}

export function sortByGenre(games, setGames){
    let result = [...games.sort((a, b) => {
        if (a.genre < b.genre){
            return -1;
        }
        if (a.genre > b.genre){
            return 1;
        }
        return 0;
    })]
    setGames(result)
    console.log(games)
}

export function resetSorting(unchangedGamesList, games, setGames){
    setGames(unchangedGamesList)
    return games
}

export function filterStatus(filteredStatus, games, setGames){    
    let result = games.filter((game) => {
        if(filteredStatus == game.status){
            return game
        }     
    })
    setGames(result)
    console.log(games)
}

export function filterGenre(filteredGenre, games, setGames){
    let result = []
    games.map((game) => {             
        game.genres.filter((genre)=>{
            if(genre.toLowerCase() == filteredGenre.toLowerCase()){  
                result.push(game)
            }
        })
    })
    setGames(result)
    console.log(games)   
}

export function filterPlatform(filteredPlatform, games, setGames){
    let result = []
    games.map((game) => {             
        game.platformList.filter((platform)=>{
            if(platform.toLowerCase() == filteredPlatform.toLowerCase()){  
                result.push(game)
            }
        })
    })
    setGames(result)
    console.log(games) 
}

export function searching(searchedItem, games, setGames){
    let result = []
    games.map((game) => {    
        let gameTitle = game.title.split(" ")         
        gameTitle.filter((title)=>{
            if(title.toLowerCase() == searchedItem.toLowerCase()){  
                result.push(game)
            }
        })
    })
    setGames(result)
    console.log(games) 
}

/* export function consoleInfo(game){
    console.log(game)
    console.log(game.id + " - " + game.title + " - " + game.status + " - " + game.releaseDate)
} */