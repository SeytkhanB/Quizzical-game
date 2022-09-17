
import QandA from "./QandA"

export default function History({quiz}) {

  const questions = quiz.questions.map(question => {
    return (
      <QandA 
        key={question} 
        question={question}
        answers={quiz.correctAnswers}
      />
    )
  })

  return (
    <div className="history-quiz-container">
      <h3>Quiz N{quiz.quiz}</h3>
      <p>Category: {quiz.category}</p>
      <p>Amount of questions: {quiz.amountOfQuestions}</p>

      <div className="questions-and-answers-conatainer">
        <h2>Questions and Answers:</h2>
        {questions}
      </div>

      <p>You scored {quiz.score} correct answers</p>
      <h3>Done in {quiz.done} sec</h3>
      <hr />
    </div>
  )
}