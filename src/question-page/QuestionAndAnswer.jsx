
import Answers from './Answers'

export default function QuestionAndAnswer(props) {

  const anses = props.translatedAnswersState.map(item => (
      <Answers key={item} item={item} />
  ))

  return (
      <div>
          <h3>{props.item}</h3>
          {anses}
      </div>
  )
}