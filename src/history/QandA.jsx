
import { nanoid } from "nanoid"

export default function QandA(props) {

  const answers = props.answers.map(answer => (
    <ol key={nanoid()}>
      <li className="history-correct-answer">{answer}</li>
    </ol>
  ))

  return (
    <div>
      <h3>Question:</h3>
      <p>{props.question}</p>
      {answers}
    </div>
  )
}