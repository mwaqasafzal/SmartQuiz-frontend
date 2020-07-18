import React from 'react'
import QuizCreatedDesc from './QuizCreatedDesc'
import {connect} from 'react-redux'
import {Container,Row,Col,Table} from 'react-bootstrap'
const QuizCreated=({quizezCreated})=>{//path = /dashboard/quiz-created/
    return(
        <div className="quiz-created">
            <h2 className="title">Quizzes Created</h2>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Created at</th>
                        <th>Deadline</th>
                        <th>duration</th>
                    </tr>
                </thead>
                <tbody>
                   {quizezCreated.map(quiz=>(
                       <QuizCreatedDesc
                          key = {quiz.id}
                          quizId = {quiz.id}
                          name = {quiz.name}
                          createdAt = {quiz.createdAt}
                          deadline = {quiz.deadline}
                          duration = {quiz.duration}
                       />
                   ))}
                </tbody>
                    
                   
            </Table>
        </div>
    );
}
const mapStateToProps=({quizezCreated})=>({
    quizezCreated
});

export default connect(mapStateToProps)(QuizCreated);