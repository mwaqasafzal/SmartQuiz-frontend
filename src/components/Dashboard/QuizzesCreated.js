import React from 'react'
import QuizCreatedDesc from './QuizCreatedDesc'
import {connect} from 'react-redux'
import {Table} from 'react-bootstrap'
const QuizCreated=({quizezCreated})=>{//path = /dashboard/quiz-created/
    return(
        <div className="quizzes-created">
            <h2 className="title">Quizzes Created</h2>
            <Table responsive>
                <thead style={{backgroundColor:'#204051',color:'#e4e3e3'}}>
                    <tr>
                        <th>Sr.</th>
                        <th>Name</th>
                        <th>Created at</th>
                        <th>Deadline</th>
                        <th>duration</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                   {quizezCreated.map((quiz,ind)=>(
                       <QuizCreatedDesc
                          quizNo={ind+1}
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