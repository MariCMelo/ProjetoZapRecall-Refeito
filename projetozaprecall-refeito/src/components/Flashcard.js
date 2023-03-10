import { useState } from "react"
import styled from "styled-components"
import seta_play from "../assets/seta_play.png"
import seta_virar from "../assets/seta_virar.png"

// Vai receber por prop o index que aí vai o número da pergunta e card quesão as perguntas e respostas
export default function Flashcard({index, card}){
// Criar estados para fazer aparecer os diferentes flashcards
// começou a responder?
const [started, setStarded] = useState (false);
// virou o flashcard?
const [turned, setTurned] = useState (false);
// fazer com que a pergunta esteja finalizada e não permita clicar novamente na setinha 
const [finished, setFinished] = useState (false);
// função para mostrar o flashcard / virar o flashcard
function showQuestion() {
// Se tiver terminada não faz nada mas se não tiver pode virar
    if (!finished){
    setStarded (true)
    }
    
}
// função para virar o card
function showAnswer() {
    setTurned (true)
}
// função para responder quando clicar nos botões coloridos
function answeredQuestion() {
    setStarded(false)
// Faz com que não seja mais possível abrir a pergunta apos terminar
    setFinished(true)
}


    return( 

        <>
           {/* se a pessoa ainda não clicou no card:  */}
           {!started ? (
                <CloseFlashcardContainer>
{/* Colocando o index aí depois de perfunta o número da pergunta que tá na array vai aparecer na frente do pergunta */}
{/* Adicionou o + 1 para que o índice não comece com o valor 0 */}
                  <p>Pergunta {index + 1}</p>
{/* Traz o ícone da seta */}
{/* quando clicar na seta vai rodar a função showQuestion */}
                   <img onClick={showQuestion} src= {seta_play} alt="Icone de play" />
                </CloseFlashcardContainer>
           ) : (
                <OpenFlashcardContainer>
{/* está virado? */}
            {!turned ? (
// Card antes de virar
                    <>
                        {card.question}
                        <img onClick={showAnswer} src={seta_virar} alt = "Seta que vira o flashcard"/>
                    </>
                    ) : (
// Card virado 
                        <>
                        {card.answer}
                        <ButtonsContainer>
                            <button onClick={answeredQuestion}>Não Lembrei</button>
                            <button onClick={answeredQuestion}>Quase não Lembrei</button>
                            <button onClick={answeredQuestion}>Zap!</button>
                        </ButtonsContainer>
                        </>
                    )}
                </OpenFlashcardContainer>           
           )}
        </> 
    ) 
}

const CloseFlashcardContainer = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
        p{
            font-family: 'Recursive';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
            color: #333333;
            

        }
`
const OpenFlashcardContainer = styled.div`
width: 300px;
margin: 12px;
padding: 15px;
min-height: 100px;
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #333333;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
        img{
            position: absolute;
            bottom: 10px;
            right: 10px;
}
`
const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    button{
        width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        border-radius: 5px;
        padding:5px;
    }

`