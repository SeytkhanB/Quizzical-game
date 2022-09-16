
import quizIcon from './assets/quiz.png'
import CategoriesIcon from './assets/categories.png'
import AmountOfQuestions from './assets/question-mark.png'

export default function Header(props) {

  const diff = props.difficultyState
  
  let iconOfDifficulty = ''
  if (props.difficultyState === 'easy') {
    iconOfDifficulty = '🤓'
  } else if (props.difficultyState === 'medium') {
    iconOfDifficulty = '🧐'
  } else if (props.difficultyState === 'hard') {
    iconOfDifficulty = '😵‍💫'
  } 

  return (
    <nav className={`${props.themeState ? 'dark' : ''}`}>
        <div className='logo-container'>
          <img className='quiz-icon' src={quizIcon} alt="Quiz icon" />
          
          <div 
            className='category-container'
            style={{color: props.themeState ? 'white' : ''}}
          >
            <p> 
              <img width='10px' src={CategoriesIcon} alt="" /> {diff.toUpperCase()} {iconOfDifficulty}
            </p>

            <p className='amount-of-questions'>
              <img width='10px' src={AmountOfQuestions} alt="" /> {props.numPickerState}
            </p>
          </div>
        </div>

        <div className="toggler">

          <p className="toggler--light">Light</p>
          <div 
            className="toggler--slider"
           onClick={props.toggleTheme}
          >
            <div className="toggler--slider--circle"></div>
          </div>
          <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  )
}