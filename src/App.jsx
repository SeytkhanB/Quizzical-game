
import './App.css'
import StartPage from './start-page/StartPage'
import QuestionPage from './question-page/QuestionPage'
import Header from './Header'
import {Routes, Route} from 'react-router-dom'

import useAppLogic from './hooks/useAppLogic'


export default function App() {
  const {
    themeState,
    difficultyState,
    numPickerState,
    
    toggleTheme,
    handleChange,
    increment,
    decrement
  } = useAppLogic()

  return (
    <main className={themeState ? 'dark' : ''}>
      <Header
        numPickerState={numPickerState}
        themeState={themeState} 
        toggleTheme={toggleTheme} 
        difficultyState={difficultyState}
      />

      <Routes>
        <Route path='/' element={
           <StartPage 
             increment={increment}
             decrement={decrement}
             numPickerState={numPickerState}
             handleChange={handleChange}
             difficultyState={difficultyState}
             themeState={themeState} 
           />
        } />

        <Route path='/question-page' element={
          <QuestionPage 
            numPickerState={numPickerState}
            difficultyState={difficultyState}
            themeState={themeState} 
          />
        } />
      </Routes>
    </main>
  )
}
