
import { useState } from 'react'

export default function useAppLogic() {
  const [themeState, setThemeState] = useState(true)
  const [difficultyState, setDifficultyState] = useState('easy')
  const [numPickerState, setNumPickerState] = useState(5)

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

  return {
    themeState,
    difficultyState,
    numPickerState,
    
    toggleTheme,
    handleChange,
    increment,
    decrement
  }
}