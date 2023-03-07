import Flashcard from "./Flashcard"
import Results from "./Results"
import styled from "styled-components"

import logo from "../assets/logo.png"

export default function GamePage() {
    return(
        <GameContainer>
            <LogoContainer>
                <img src={logo} alt="Logo do ZapRecall (Raio amarelo)"/>
                <h1>ZapRecall</h1>
            </LogoContainer>
        
        <Flashcard />
        <Flashcard />
        <Flashcard />
        <Flashcard />

        <Results />

        </GameContainer>
    )
}


const GameContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
        img {
            width: 52px;   
        }
        h1{
            font-family: 'Righteous';
            font-style: normal;
            font-weight: 400;
            font-size: 36px;
            line-height: 45px;
            color: #FFFFFF;
            margin-left: 20px;    
        }
`