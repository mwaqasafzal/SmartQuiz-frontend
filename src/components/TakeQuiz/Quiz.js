import React,{useState,useEffect,useRef} from 'react'
import Questions from './Questions'
import {connect} from 'react-redux'
import {takeNewQuizHandler} from '../../actions/quizezTaken'

const Quiz=({quiz,dispatch})=>{

    const {questions,duration} = quiz;
    const [score,setScore] = useState(0);
    const [quizCompleted,setQuizCompleted] =useState(false);
    const completedRef = useRef();
    useEffect(()=>{
        if(completedRef.current){
            const quizStats={
                quizId:quiz.id,
                quizName:quiz.name,
                total:quiz.questions.length,
                score,
                takenAt:new Date(),
                createdBy:quiz.createdBy
            }
            console.log(quizStats);
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
            <React.Fragment>
                <h2>{quiz.name}</h2>
                <h3>Score: {score}/{quiz.questions.length}</h3>
            </React.Fragment>
        );
    else
        content = (
            <React.Fragment>
                <h1>{quiz.name}</h1>
                {/*timer here*/}
                <Questions
                    questions = {questions}
                    increaseScore = {increaseScore}
                    finishQuiz = {finishQuiz}
                />

            </React.Fragment>
          
        );
    return(
        <div className = "quiz">
           {content}
        </div>
    );
}

export default connect()(Quiz);