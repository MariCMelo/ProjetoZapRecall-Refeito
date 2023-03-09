import styled from "styled-components"

// recebe a prop totalQestions que é o tamanho da array de questões, em valor numérico
export default function Results({totalQuestions, questionsCounter}){
    return (
        <ResultsContainer>
           {questionsCounter} / {totalQuestions} CONCLUÍDOS
        </ResultsContainer>
    )
}

const ResultsContainer = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`