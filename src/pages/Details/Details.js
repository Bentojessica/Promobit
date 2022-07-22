import { useNavigate, useParams } from "react-router-dom";
import { goToDetails, goToHome } from "../../routes/coordinator";
import { API_KEY, BASE_IMG, BASE_URL } from "../../constants/urls";
import { useRequestData } from "../../Hooks/UseRequestData";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { MovieCastCard } from "../../components/MoviesCastCard/MovieCastCard";
import { HeaderLogo } from "../../components/Header/HeaderLogo";
import {
  Image,
  ContainerElenco,
  ContainerText,
  ContainerHeader,
  MeiaLua,
  ImageTrailer,
  ContainerRecoment
} from "./styled";
import Typography from "@mui/material/Typography";

export const DetailsPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const onClickCardId = (id) => {
    goToDetails(navigate, id);
  };

  const onClickClickCards = () => {
    goToHome(navigate);
  };

 const movieDetails = useRequestData(
    [],
    `${BASE_URL}/movie/${params.id}?api_key=${API_KEY}&language=pt-BR`
  )[0];
  const movieCredits = useRequestData(
    [],
    `${BASE_URL}/movie/${params.id}/credits?api_key=${API_KEY}&language=pt-BR`,
    "cast"
  )[0];
  const movieRecommendation = useRequestData(
    [],
    `${BASE_URL}/movie/${params.id}/recommendations?api_key=${API_KEY}`,
    "results"
  )[0];

  const listMovieCast =
    movieDetails &&
    movieCredits.map((movie) => {
      return (
        <MovieCastCard
          key={movie.id}
          poster={BASE_IMG + movie.profile_path}
          name={movie.name}
          character={movie.character}
        />
      );
    });

  const moviesCards =
    movieRecommendation &&
    movieRecommendation.map((movie, index) => {
      return (
        <MovieCard
          key={movie.id}
          poster={BASE_IMG + movie.poster_path}
          title={movie.title}
          date={movie.release_date}
          onClick={() => onClickCardId(movie.id)}
        />
      );
    });
  return (
    <div>
      <ContainerHeader>
        <HeaderLogo onClick={() => onClickClickCards()} />
        <Image src={BASE_IMG + movieDetails.poster_path} />
        <Typography
          variant="h4"
          color="white"
          style={{
            marginTop: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "250px"
            
          }}
        >
          {movieDetails.original_title}
          <h6>({movieDetails.release_date})</h6>
        </Typography>
        <ContainerText>
          <MeiaLua>{movieDetails.vote_average}</MeiaLua>
          <Typography
            variant="h5"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              margin: "0px 0px 5px 150px",
              position: 'absolute'
            }}
          >
            Avaliação
          </Typography>
          <Typography
            variant="h6"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              margin: "230px 0px 0px 150px",
              position: 'absolute'
            }}
          >
            Sinopse:
          </Typography>
          <Typography
            variant="h6"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "55%",
              height: "60px",
              color: "white",
              margin: "550px 0px 0px 300px",
              position: 'absolute'
            }}
          >
            {movieDetails.overview}
          </Typography>
        </ContainerText>
      </ContainerHeader>

      <Typography
        variant="h4"
        color="text.primary"
        style={{
          marginTop: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Elenco Original
      </Typography>

      <ContainerElenco>{listMovieCast}</ContainerElenco>
      
      <Typography
        variant="h4"
        color="text.primary"
        style={{
          marginTop: "4%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >Trailer</Typography>
      <ImageTrailer src={BASE_IMG + movieDetails.backdrop_path} />
      
      <Typography
        variant="h4"
        color="text.primary"
        style={{
          marginTop: "30%", 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>Recomendações</Typography>
        
      <ContainerRecoment>
        {moviesCards}
      </ContainerRecoment>
    </div>
  );
};
