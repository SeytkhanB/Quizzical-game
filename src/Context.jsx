
import {createContext, useEffect, useState} from "react";

const Context = createContext('');

function ContextProvider(props) {
  const [storeDataState, setStoreDateState] = useState(JSON.parse(localStorage.getItem('quiz')) || [])

  useEffect(() => {
    localStorage.setItem('quiz', JSON.stringify(storeDataState))
  }, [storeDataState])

  function storeQuiz(quiz) {
    setStoreDateState(prevState => [...prevState, quiz])
  }

  function deleteAll() {
    localStorage.clear()
    setStoreDateState([])
  }

  return (
    <Context.Provider 
      value={{
        storeQuiz,
        storeDataState,
        deleteAll
      }}
    > 
      {props.children}
    </Context.Provider>
  )
}
export {ContextProvider, Context}