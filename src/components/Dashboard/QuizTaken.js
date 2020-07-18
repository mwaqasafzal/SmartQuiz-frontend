import React from 'react'
import {connect} from 'react-redux'
import QuizTakenDesc from './QuizTakenDesc'
import {Container,Row,Col,Table} from 'react-bootstrap'
const QuizTaken=({quizezTaken})=>{
    
    return(
        <div className="quiz-taken">   
                <h2 className="title">Quizzes Taken</h2>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Quiz Name</th>
                            <th>Created By</th>
                            <th>Attempted at</th>
                            <th>Score</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            quizezTaken.map(quiz=>(
                                <QuizTakenDesc
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