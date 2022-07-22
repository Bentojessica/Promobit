import styled from "styled-components";

export const Image = styled.img`
height: 20px;
width: 118px;
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: -0.14%;
margin: 2% 118px;
cursor: pointer
`

export const HeaderLog = styled.div`
position: absolute;
width: 100%;
height: 10%;
left: 0px;
top: 0px;
background: #5C16C5;
`

export const Text = styled.h4`
margin-top: 40%;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 56px;
text-align: center;
letter-spacing: -0.005em;
color: #FFFFFF;
margin-left: 50%;
width: 100%;

`

export const ContainerHeader = styled.div`
width: 100%;
height: 600px;
left: 0px;
top: 0px;
background: #2D0C5E;
`

export const ContainerText = styled.div`
position: absolute;
margin-top: 10px;
width: 900px;
height: 112px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

h6 {
    width: 90px;
    margin-left: 50%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
    justify-content: center;
    align-items: center;
    }
`

export const ContainerButton = styled.div`
position: absolute;
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 10px ;
margin: 28% 2% 2% 2%;
width: 90%;
height: 112px
`

// export const ContainerButton = styled.div`
// width: 90%;
// left: 0px;
// margin-top: 70%;
// display: grid;
// grid-template-columns: repeat(3, 1fr);
// gap: 30px 10px;
// margin: 2% 2% 2% 6%;
// `
