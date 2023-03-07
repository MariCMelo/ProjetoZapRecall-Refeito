import Flashcard from "./Flashcard"
import Results from "./Results"

import logo from "../assets/logo.png"

export default function GamePage() {
    return(
        <div>
        <img src={logo} alt="Logo do ZapRecall (Raio amarelo)"/>
        <h1>ZapRecall</h1>

        <Flashcard />
        <Flashcard />
        <Flashcard />
        <Flashcard />

        <Results />

        </div>
    )
}