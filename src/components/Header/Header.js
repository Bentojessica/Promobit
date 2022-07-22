import React, { useEffect, useState } from "react";
import {
  Text,
  ContainerHeader,
  ContainerText,
  ContainerButton,
} from "./styled";
import Button from "@mui/material/Button";
import { HeaderLogo } from "./HeaderLogo";
import { BASE_URL, API_KEY } from "../../constants/urls";
import axios from "axios";
import { IoMdCloseCircle } from "react-icons/io";

export const Header = () => {
  const [selectedButton, setSelectedButton] = useState(false);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=pt-BR`)
      .then((res) => {
        setGenres(res.data.genres);
      });
  }, []);

  const handleClick = () => {
    setSelectedButton((e) => !e);

    if (!selectedButton) {
        setGenres([...genres])
    } else {
         setGenres(genres.filter((genre) => genre.id !== genres.id ))
    }
};



  return (
    <div>
      <HeaderLogo />
      <ContainerHeader>
        <ContainerText>
          <Text>
            Milhões de filmes, séries e pessoas para descobrir. Explore já.
          </Text>
          <h6>FILTRE POR</h6>
        </ContainerText>
        <ContainerButton>
          {genres.map((genre) => {
            return (
              <Button
                variant="contained"
                style={{ height: "35px", width: "180px", marginLeft: "50px"}}
                onClick={handleClick}
              >
                {genre.name}
                {selectedButton && (

					<IoMdCloseCircle />
			)}
              </Button>
            );
          })}
        </ContainerButton>
      </ContainerHeader>
    </div>
  );
};
