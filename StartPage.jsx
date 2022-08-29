
import React, { useState } from 'react'
import PlusIcon from './assets/plus.png'
import MinusIcon from './assets/minus.png'

export default function StartPage(props) {
  const [numPickerState, setNumPickerState] = useState(5)

  function increment() {
    setNumPickerState(prevState => {
      if (prevState >= 50) {
        return prevState = 50
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
    <div className='starting-page'>
        <h1>Quizzical</h1>
        <p>Amount of questions</p>
        <div className='icons-container'>
          <img onClick={decrement} className='minus-icon' src={MinusIcon} alt="" />
          <p>{numPickerState}</p>
          <img onClick={increment} className='plus-icon' src={PlusIcon} alt="" />
        </div>



        <label className="difficulties" htmlFor="favColor">Change difficulties</label>
        <br />
        <select 
            id="favColor"
        >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>

        <button className='btn' onClick={props.play}>Start quiz</button>
    </div>
  )
}
