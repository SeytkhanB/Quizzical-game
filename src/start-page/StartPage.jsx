
import PlusIcon from '../assets/plus.png'
import MinusIcon from '../assets/minus.png'
import {Link} from 'react-router-dom'

export default function StartPage(props) {

  return (
    <div className={`starting-page ${props.themeState ? 'dark' : ''}`}>
        <h1>Quizzical</h1>
        <p>Amount of questions</p>
        <div className='icons-container'>
          <img 
            onClick={props.decrement} 
            className={props.themeState ? 'for-white-icons' : 'minus-icon'} 
            src={MinusIcon} alt="-"
          />
          <p>{props.numPickerState}</p>
          <img 
            onClick={props.increment} 
            className={props.themeState ? 'for-white-icons' : 'plus-icon'}
            src={PlusIcon} alt="+"
          />
        </div>

        <label className="difficulties" htmlFor="favColor">Change difficulties</label>
        <br />
        <select 
            id="favColor"
            value={props.difficultyState}
            onChange={(e) => props.handleChange(e.target.value)}
        >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>

        <Link 
          to='/question-page' 
          className='btn btn-link'
        >
          Start quiz
        </Link>
    </div>
  )
}
