import React,{useState,useEffect,useRef} from 'react'
import Questions from './Questions'
import Timer from './Timer'
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
            <div className="taking-quiz">
                <h2 className="title">Result</h2>
                <div style={{textAlign:'center'}}>
                    <h3>{quiz.name}</h3>
                    <h4>Score: {score}/{quiz.questions.length}</h4>
                </div>
                
            </div>
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