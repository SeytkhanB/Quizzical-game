
import React, {useState, useContext, useEffect} from "react"
import Question from "./Question"
import  {nanoid}  from "nanoid"
import  {decode}  from "he"
import Load from '../assets/load.gif'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import timerIcon from '../assets/timer-icon.png'

import {Context} from '../Context'


export default function QuestionPage(props){
    const [triviaData, setTriviaData] = useState([])
    const [loadState, setLoadState] = useState(true)
    const [gameData, setGameData] = useState({tally:0, checked:false})

    const [time, setTime] = useState(0)
    const {
        storeQuiz,
        storeQuizToState
    } = useContext(Context)

    const navigate = useNavigate()


    useEffect(() => {
        let interval = setInterval(() => {
            setTime(prevTime => prevTime + 1)
        }, 1000)

        if (gameData.checked) {
            clearInterval(interval)
            const questions = triviaData.map(question => question.question)
            const correct = triviaData.map(correct => correct.correct)
            const score = `${gameData.tally}/${triviaData.length}`
            
            storeQuiz({
                id: nanoid(),
                quiz: storeQuizToState(),
                category: props.difficultyState,
                amountOfQuestions: props.numPickerState,
                questions: questions,
                correctAnswers: correct,
                score: score,
                done: time
            })
        }

        return () => {
            clearInterval(interval)
        }
    }, [time])

    function toStartPage() {
        navigate('/')
    }


    const url = `https://opentdb.com/api.php?amount=${props.numPickerState}&difficulty=${props.difficultyState}`
    useEffect(() => {
        const controller = new AbortController()

        async function fetchData() {
            try {
                const res = await axios.get(url)
                const results = res.data.results

                const newTriviaObjs=[]
                for(let i=0; i < results.length;i++){
                    let optionsArray = [...results[i].incorrect_answers, results[i].correct_answer].sort(() => (Math.random() > .5) ? 1 : -1)
                    //create an array of objects from each answer array
                    optionsArray = optionsArray.map(answer => { 
                        let ans = answer === 'True' ? 'Yes' :
                                answer === 'False' ? 'No' :
                                decode(answer)
                        return {
                            value: ans,
                            isHeld: false,
                            isCorrect: false,
                            isWrong: false,
                            id: nanoid()
                        }
                        }
                    )
                    
                    let corrAns = results[i].correct_answer === 'True' ? 'Yes' :
                                results[i].correct_answer === 'False' ? 'No' :
                                decode(results[i].correct_answer)
                    //create new trivia question object
                    const triviaObj = {
                        question: decode(results[i].question),
                        correct: corrAns,
                        options: optionsArray,
                        id: nanoid()
        
                    }
        
                    newTriviaObjs.push(triviaObj)
                }

                setTriviaData(newTriviaObjs)

            } catch (err) {
                console.log(err)
            } finally {
                setLoadState(false)
            }
        }

        fetchData()

        return () => controller.abort()
    }, [])


    function toggleOption(oId, qId){
        setTriviaData(prevTriviaData => {
            return prevTriviaData.map(trivia=>{
                if(trivia.id === qId){
                    const tempOptions = trivia.options.map(option => {
                        if(option.id===oId){
                            //change clicked to true else false
                            return {...option, isHeld: !option.isHeld}
                        }
                        return {...option, isHeld: false}
                        }
                    )
                    return {...trivia, options: tempOptions}//update trivia options array
                }
                return trivia
            })
        })
    }
    
    function checkAnswers(){
        //copy triviaData manually and update with a new version
        //set the value of the correct selection
        const temp = new Array(...triviaData)
        let gameTally = 0
        temp.map(trivia => {
            trivia.options.map(option=>{

                if(option.value === trivia.correct){
                    option.isCorrect = true
                }
                if(option.isHeld && option.value === trivia.correct){
                    //increase tally
                    gameTally++
                }
                else if(option.isHeld && option.value != trivia.correct){
                    option.isWrong = true
                }
            })

        })
        setTriviaData(temp)
        setGameData({tally:gameTally, checked:true})
    }

    const questions = triviaData.map((trivia) => (
        <Question 
            theme={props.themeState}
            key={trivia.id} 
            id={trivia.id} 
            correct={trivia.correct} 
            question={trivia.question} 
            options={trivia.options} 
            toggleOption={toggleOption}
            checked={gameData.checked}
        />
    ))

    return (
        <div 
            className={`question-page ${props.themeState ? 'dark' : ''}}`}
            style={{color: props.themeState ? 'white' : ''}}
        >
            {
                loadState ?
                <div className="load-container">
                    <img src={Load} alt="Loading..." /> 
                </div> :

                <div>
                    <div className="timer-container">
                        <img src={timerIcon} alt='Timer icon' />
                        <h5 style={{
                                color: props.themeState ? 'white' : ''
                            }}
                        >
                            : {time}
                        </h5>
                    </div>

                    <div>
                        {questions}
                    </div>
                    <div>
                        {(triviaData.length > 0 &&!gameData.checked) && 
                            <button 
                                className="btn" 
                                onClick={checkAnswers}
                            >
                                Check answers
                            </button>
                        }
                        {gameData.checked && 
                            <div>
                                <span>You scored {gameData.tally}/{triviaData.length} correct answers</span>
                                <button 
                                    className="btn btn-game" 
                                    onClick={toStartPage}
                                >
                                    Play again
                                </button>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    )
}