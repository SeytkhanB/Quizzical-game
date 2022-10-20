
import {createContext, useEffect, useState} from "react";

const Context = createContext('');

function ContextProvider(props) {
  const [storeDataState, setStoreDateState] = useState(JSON.parse(localStorage.getItem('quiz')) || [])
  const [countQuiz, setCountQuiz] = useState(1)

  useEffect(() => {
    localStorage.setItem('quiz', JSON.stringify(storeDataState))
  }, [storeDataState])

  function storeQuiz(quiz) {
    setStoreDateState(prevState => [...prevState, quiz])
  }

  function deleteAll() {
    localStorage.clear()
    setStoreDateState([])
    setCountQuiz(1)
  }

  function storeQuizToState() {
    setCountQuiz(prevState => {
      if (prevState === prevState) {
        // setTypedWordsState([])    // to remove all typed words for next attempt
        return prevState + 1
      }
      return prevState
    })

    return countQuiz
}

  return (
    <Context.Provider 
      value={{
        storeQuiz,
        storeDataState,
        deleteAll,
        storeQuizToState
      }}
    > 
      {props.children}
    </Context.Provider>
  )
}
export {ContextProvider, Context}