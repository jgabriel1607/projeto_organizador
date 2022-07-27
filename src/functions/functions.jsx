/* backgroundImage, developers, genres, id, platformList, publishers, releaseDate, squareIcon, status, summary, title, verticalCover */
export function sortByTitle(unchangedGamesList, games, setGames){
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

export function sortByReleaseDate(unchangedGamesList, games, setGames){
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

export function sortByGenre(unchangedGamesList, games, setGames){
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

export function filterStatus(filteredStatus, unchangedGamesList, games, setGames){    
    let result = unchangedGamesList.filter((game) => {
        if(filteredStatus == game.status){
            return game
        }     
    })
    setGames(result)
}

export function filterGenre(filteredGenre, unchangedGamesList, games, setGames){
    let result = []
    unchangedGamesList.map((game) => {             
        game.genres.filter((genre)=>{
            if(genre.toLowerCase() == filteredGenre.toLowerCase()){  
                result.push(game)
            }
        })
    })
    setGames(result)
}

export function filterPlatform(filteredPlatform, unchangedGamesList, games, setGames){
    let result = []
    unchangedGamesList.map((game) => {             
        game.platformList.filter((platform)=>{
            if(platform.toLowerCase() == filteredPlatform.toLowerCase()){  
                result.push(game)
            }
        })
    })
    setGames(result)
}

export function searching(searchedItem, unchangedGamesList, games, setGames){
    let result = []
    unchangedGamesList.map((game) => {    
        let gameTitle = game.title.split(" ")         
        gameTitle.filter((title)=>{
            if(title.toLowerCase() == searchedItem.toLowerCase()){  
                result.push(game)
            }
        })
    })
    setGames(result)
}

export function resetSorting(unchangedGamesList, games, setGames){ 
    setGames(unchangedGamesList)
}