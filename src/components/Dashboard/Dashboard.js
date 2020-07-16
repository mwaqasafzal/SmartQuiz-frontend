import React from 'react'
import {NavLink,Route} from 'react-router-dom'
import Stats from './Stats'
import QuizTaken from './QuizTaken'
import QuizCreated from './QuizCreated'
import QuizDescription from './QuizDescription'
import QuizStats from './QuizStats'
import Switch from 'react-bootstrap/esm/Switch'
export default function Dashboard(props){
    const path=props.history?props.location.pathname:"/dashboard";
    return (
        <div className="dashboard">
            <div className="side-drawer">
                <ul className="quiz-nav">
                    <li><NavLink activeClassName="dashboard-active" to={`${path}/stats`}>Stats</NavLink></li>
                    <li><NavLink activeClassName="dashboard-active" to={`${path}/quizez-taken`}>Quiz Taken</NavLink></li>
                    <li><NavLink activeClassName="dashboard-active" to={`${path}/quizez-created`}>Quiz Created</NavLink></li>
                </ul>
            </div>
            <div className="content">
                <Switch>
                    <Route path={`${path}/stats`} component={Stats}/>
                    <Route path={`${path}/quizez-taken`} component={QuizTaken}/>
                    <Route path={`${path}/quizez-created`} exact component={QuizCreated}/>
                    <Route path={`${path}/quizez-created/:quizId`} exact component={QuizStats}/>
                    <Route path={`${path}/quizez-created/:quizId/fullquiz`} component={QuizDescription}/>
                </Switch>
            </div>
        </div>
    );
}