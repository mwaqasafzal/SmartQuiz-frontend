import React from 'react'
import {connect} from 'react-redux'
import QuizTakenDesc from './QuizTakenDesc'
import {Container,Row,Col,Table} from 'react-bootstrap'
const QuizTaken=({quizezTaken})=>{
    
    return(
        <div className="quizzes-taken">   
                <h2 className="title">Quizzes Taken</h2>
                <Table responsive hover>
                    <thead style={{backgroundColor:'#204051',color:'#e4e3e3'}}>
                        <tr>
                            <th>Sr.</th>
                            <th>Quiz Name</th>
                            <th>Created By</th>
                            <th>Attempted At</th>
                            <th>Score</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            quizezTaken.map((quiz,ind)=>(
                                <QuizTakenDesc
                                    quizNo = {ind+1}
                                    key = {quiz.quizId}
                                    quiz = {quiz.quizName}
                                    creator = {quiz.createdBy.fullName}
                                    takenAt = {quiz.takenAt}
                                    score = {quiz.score}
                                    total = {quiz.total}
                                />
                            ))
                        }
                        
                    </tbody>
                </Table>               
        </div>
    );
}
const mapStateToProps=({quizezTaken})=>({
    quizezTaken
});

export default connect(mapStateToProps)(QuizTaken);