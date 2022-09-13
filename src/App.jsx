
import { useState } from 'react'
import './App.css'
import StartPage from './start-page/StartPage'
import QuestionPage from './question-page/QuestionPage'

import Header from './Header'


export default function App() {
  const [playGame, setPlayGame] = useState(false)
  const [themeState, setThemeState] = useState(true)
  const [difficultyState, setDifficultyState] = useState('easy')
  const [numPickerState, setNumPickerState] = useState(5)

  function play(){
    setPlayGame(prevPlayGame => !prevPlayGame)
  }

  function toggleTheme() {
    setThemeState(prevState => !prevState)
  }

  function handleChange(value) {
    setDifficultyState(value)
  }

  function increment() {
    setNumPickerState(prevState => {
      if (prevState >= 30) {
        return prevState = 30
      }
      return prevState + 5
    })
  }

  function decrement() {
    setNumPickerState(prevState => {
      if (prevState <= 5) {
        return prevState = 5
      }
      return prevState - 5
    })
  }



  return (
    <main className={themeState ? 'dark' : ''}>
      <Header
        numPickerState={numPickerState}
        themeState={themeState} 
        toggleTheme={toggleTheme} 
        difficultyState={difficultyState}
      />

      {
        !playGame && 
        <StartPage 
          increment={increment}
          decrement={decrement}
          numPickerState={numPickerState}
          handleChange={handleChange}
          difficultyState={difficultyState}
          themeState={themeState} 
          play={play}
        />
      }
      {
        playGame && 
        <QuestionPage 
          numPickerState={numPickerState}
          difficultyState={difficultyState}
          themeState={themeState} 
          play={play}
        />
      }
    </main>
  )
}
