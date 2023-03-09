import Flashcard from "./Flashcard"
import Results from "./Results"
import styled from "styled-components"
import deckReact from "../constants/Deck"

import logo from "../assets/logo.png"
import { useState } from "react"

export default function GamePage() {
// Contador para saber quantas perguntas já foram respondidas
const [counter, setCounter] = useState(0);

    return(
        <GameContainer>
            <LogoContainer>
                {/* Traz a imagem do logo */}
                <img src={logo} alt="Logo do ZapRecall (Raio amarelo)"/>
                <h1>ZapRecall</h1>
            </LogoContainer>
{/* Isso traz a quantidade de elementos da array para a tela ex: tem 8 elementos então traz 8 divs */}
{/* o card={card} é para passar o valor de card, a pergunta e resposta para dentro da div flashcard, mas ainda não está sendo utilizada */}
        {deckReact.map((card, i) => (
            <Flashcard
                key={card.question}
                index={i} 
                card={card}
            />
        ))}
        
       
{/* Aqui foi passado o deck.length que conta o número de objetos no array e o counter que conta o número de perguntas que foram respondidas */}
        <Results totalQuestions={deckReact.length} questionsCounter={counter}/>

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