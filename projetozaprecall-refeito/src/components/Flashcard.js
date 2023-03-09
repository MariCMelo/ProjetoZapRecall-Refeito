import styled from "styled-components"
import seta_play from "../assets/seta_play.png"
// Vai receber por prop o index que aí vai o número da pergunta e card quesão as perguntas e respostas
export default function Flashcard({index,}){
    return(
        <QuestionContainer>
        {/* Colocando o index aí depois de perfunta o número da pergunta que tá na array vai aparecer na frente do pergunta */}
        {/* Adicionou o + 1 para que o índice não comece com o valor 0 */}
        <p>Pergunta {index + 1}</p>
        {/* Traz o ícone da seta */}
        <img src= {seta_play} alt="Icone de play" />
        </QuestionContainer>
    )
}

const QuestionContainer = styled.div`
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