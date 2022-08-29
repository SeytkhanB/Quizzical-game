import { useState } from 'react'
import './App.css'
import StartPage from './StartPage'
import QuestionPage from './QuestionPage'


export default function App() {
  const [playGame, setPlayGame] = useState(false)

    function play(){
        setPlayGame(prevPlayGame => !prevPlayGame)
    }

    return (
        <main className="main-page">
            {!playGame && <StartPage play={play}/>}
            {playGame && <QuestionPage play={play}/>}
        </main>
    )
}
