import React, {useState, useEffect} from 'react'
import useSound from 'use-sound'
import play from './sounds/play.mp3'
import correct from './sounds/correct.mp3'
import wrong from './sounds/wrong.mp3'




const Quiz = ({data, setStop, questionNumber, setQuestionNumber}) => {
    console.log(questionNumber)

    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");
    const [letPlay] =useSound(play);
    const [correctAnswer] =useSound(correct);
    const [wrongAnswer] =useSound(wrong);

    useEffect(() => {
        letPlay();
    }, [letPlay])

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration)
    }

    const handleClick = (item) => {
        setSelectedAnswer(item)
        setClassName("answer active");
        delay(2000, () => {
            setClassName(item.correct  ? "answer correct" : "answer wrong")
        })
        delay(3000, () => {
            if(item.correct) {
                correctAnswer();
                delay(1000, () => {
                setQuestionNumber((prev) => prev + 1);
                setSelectedAnswer(null)
                })
            }else{
                wrongAnswer();
                delay(1000, ()=> {
                    setStop(true)
                })
                
            }
        })
        
    }

    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
        
    }, [data, questionNumber])
    return (
        <div className="quiz">
            <div className="question">{question?.question}</div>
            <div className="answers">
            {question?.answers.map((item) => 
            (<div className={selectedAnswer === item ? className : "answer"}  onClick={() =>handleClick(item)}>{item.text}
            </div>))} 
            </div>
        </div>
    )
}

export default Quiz
