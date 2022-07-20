import { useRequestData } from "../Hooks/UseRequestData"
import {BASE_URL, API_KEY} from "../constants/urls"
import {GlobalContext} from "./GlobalContext"

export const GlobalState = ({ children }) => {
   const [movie, setMovie] = useRequestData([], `${BASE_URL}/movie/popular?api_key=${API_KEY}`, "results")[0]
    
    return <GlobalContext.Provider value={{movie, setMovie}}>
        { children }
    </GlobalContext.Provider>
}