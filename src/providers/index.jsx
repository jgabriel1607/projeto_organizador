import { GamesProvider } from "./games/games"

const Providers = ({children}) => {
    return (
        <>
        <GamesProvider> { children } </GamesProvider>
        </>
    )    
}

export default Providers