import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { Header } from "../../components/Header/Header"
import {ContainerMovieCard} from "./styled"
import { useRequestData } from "../../Hooks/UseRequestData"
import { goToDetails } from "../../routes/coordinator"
import {MovieCard} from "../../components/MovieCard/MovieCard"
import {BASE_IMG, API_KEY, BASE_URL, movieApi} from "../../constants/urls"

export const HomePage = () => {

    const [offset, setOffset] = useState(0)
    const navigate = useNavigate()
    const movie = useRequestData([], `${BASE_URL}/movie/popular?api_key=${API_KEY}`, "results")[0]

    const onClickMovieId = (id) => {
        goToDetails(navigate, id)
    }
    const result = movie.map((movie) => {
        return(
            <MovieCard
                key = {movie.key}
                poster = {BASE_IMG + movie.poster_path}
                title = {movie.title}
                date= {movie.release_date}
                onClick={()=> onClickMovieId(movie.id)}
            />
        )
    })
    
    return (
        <div>
            <Header/>
            <ContainerMovieCard>
                {result}
            </ContainerMovieCard>
        </div>
    )
}