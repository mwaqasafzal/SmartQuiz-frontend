import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Sidedrawer from '../UI/Sidedrawer'
import QuizTaken from './QuizTaken'
import QuizCreated from './QuizCreated'
import QuizDescription from './QuizDescription'
import QuizStats from './QuizStats'
import TakeQuizIcon from '../../icons/take-quiz.png'
import CreateQuizIcon from '../../icons/create-quiz.png'

export default function Dashboard(props){
    const path=props.history?props.location.pathname:"/dashboard";
    const options = [
        {to:`${path}/quizez-taken`,name:"Quizzes Taken",icon:TakeQuizIcon},
        {to:`${path}/quizez-created`,name:"Quizzes Created",icon:CreateQuizIcon}
    ];
    return (
        <div className="dashboard">
            <Sidedrawer options = {options} style={{height:"5%"}}type="Analytics"/>
            <Switch>
                <Route path={`${path}/quizez-taken`} component={QuizTaken}/>
                <Route path={`${path}/quizez-created`} exact component={QuizCreated}/>
                <Route path={`${path}/quizez-created/:quizId`} exact component={QuizStats}/>
                <Route path={`${path}/quizez-created/:quizId/fullquiz`} component={QuizDescription}/>
            </Switch>
        </div>
    );
}