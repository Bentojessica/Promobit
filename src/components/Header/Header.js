import React from "react"
import {Text, ContainerHeader, ContainerText} from "./styled"
import Button from '@mui/material/Button';
import { HeaderLogo } from "./HeaderLogo";
export const Header = () => {

    return (
        <div>
            <HeaderLogo/>
            <ContainerHeader>
                <ContainerText>
                <Text>Milhões de filmes, séries e pessoas para descobrir. Explore já.</Text>
                <h6>FILTRE POR</h6>
                </ContainerText>
                <Button variant="contained" style={{margin: '30% 10px', left: '80px'}}>Contained</Button>
                <Button variant="contained" style={{margin: '100px', marginLeft: '90px', marginRight: '20px'}}>Contained</Button>
                <Button variant="contained" style={{margin: '100px', marginLeft: '2px', marginRight: '20px'}}>Contained</Button>
                <Button variant="contained" style={{margin: '100px', marginLeft: '2px', marginRight: '20px'}}>Contained</Button>
                <Button variant="contained" style={{margin: '100px', marginLeft: '2px', marginRight: '20px'}}>Contained</Button>
                <Button variant="contained" style={{margin: '100px', marginLeft: '2px', marginRight: '20px'}}>Contained</Button>
                <Button variant="contained" style={{margin: '100px', marginLeft: '2px', marginRight: '20px'}}>Contained</Button>
            </ContainerHeader>
            </div>
    )
}