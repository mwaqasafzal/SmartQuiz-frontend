import React,{useState,useEffect,useRef} from 'react'
import Questions from './Questions'
import Timer from './Timer'
import Result from './Result'
import {connect} from 'react-redux'
import {takeNewQuizHandler} from '../../actions/quizezTaken'
import {Container} from 'react-bootstrap'

const Quiz=({quiz,dispatch})=>{

    const {questions,duration} = quiz;
    const [score,setScore] = useState(0);
    const [quizCompleted,setQuizCompleted] =useState(false);
    const completedRef = useRef();
    useEffect(()=>{
        if(completedRef.current){
            const quizStats={
                _id:quiz._id,
                key:quiz.key,
                quizName:quiz.name,
                total:quiz.questions.length,
                score,
                takenAt:new Date().toUTCString(),
                createdBy:quiz.createdBy
            }
            dispatch(takeNewQuizHandler(quizStats));
        }
        else
            completedRef.current=true;
    },[quizCompleted]);

    const increaseScore=(points=1)=>{
        setScore(score+points);
    }

    const finishQuiz=()=>{
        setQuizCompleted(true);
    }

    let content;
    if(quizCompleted)
        content = (
            <Result 
                quizname={quiz.name} 
                score={score}
                total={quiz.questions.length}/>
        );
    else
        content = (
            <div className="taking-quiz">
                <h2 className="title">{quiz.name}</h2>
                <Timer 
                    duration={duration}
                    finishQuiz={finishQuiz}/>
                <Questions
                    questions = {questions}
                    increaseScore = {increaseScore}
                    finishQuiz = {finishQuiz}
                />

            </div>
          
        );
    return(
        <Container style={{width:'80%'}}>
           {content}
        </Container>
    );
}

export default connect()(Quiz);