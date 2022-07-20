import styled from "styled-components";

export const Image = styled.img`
position: absolute;
margin: 60px 70px;
display: flex;
flex-direction: column;
width: 270px;
`

export const ContainerHeader = styled.div`
width: 100%;
height: 580px;
left: 0px;
top: 0px;
background: #2D0C5E;
`

export const ContainerElenco = styled.div`
margin-top: 10vH;
display: grid;
gap: --size-3;
grid-auto-flow: column;
grid-auto-columns: 18%;
overflow-x: auto;
over-scroll-behavior-inline: contain;
-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
border-radius: 8px;

::-webkit-scrollbar-thumb{
    background: #bdbdbd;
    border-radius: 8px;
}

::-webkit-scrollbar{
    height: 10px;
}

::-webkit-scrollbar-thumb:hover{
    background: #2D0C5E;
}

`

export const ContainerText = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 40px;
`

export const MeiaLua = styled.div`
position: absolute;
margin: auto;
top: 10px;
right: 80px;
bottom: 30%;
left: 0;
width: 40px;
height: 40px;
border-radius: 50px;
border: none;
font-size: 25px;
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: white;
box-shadow: 7px 3px 7px 2px #80b918;
`

export const ImageTrailer = styled.img`
position: absolute;
margin-botton: 400px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 500px;
margin-left: 450px;
margin-top: 20px;
`

export const ContainerRecoment = styled.div`
margin-top: 10vH;
display: grid;
gap: --size-3;
grid-auto-flow: column;
grid-auto-columns: 18%;
overflow-x: auto;
over-scroll-behavior-inline: contain;
-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);

::-webkit-scrollbar-thumb{
    background: #bdbdbd;
    border-radius: 8px;
}

::-webkit-scrollbar{
    height: 10px;
}

::-webkit-scrollbar-thumb:hover{
    background: #2D0C5E;
}

`