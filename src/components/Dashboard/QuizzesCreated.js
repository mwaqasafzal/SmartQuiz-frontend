import React from 'react'
import QuizCreatedDesc from './QuizCreatedDesc'
import {connect} from 'react-redux'
import {Table} from 'react-bootstrap'
const QuizCreated=({quizezCreated})=>{//path = /dashboard/quiz-created/
    let content = <h5 className="center"> You have not Created any Quiz yet!</h5>;
    if(quizezCreated.length>0)
        content = (
            <Table responsive>
                <thead style={{backgroundColor:'#204051',color:'#e4e3e3'}}>
                    <tr>
                        <th>Sr.</th>
                        <th>Name</th>
                        <th>Key</th>
                        <th>Created at</th>
                        <th>Deadline</th>
                        <th>Duration</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {quizezCreated.map((quiz,ind)=>(
                        <QuizCreatedDesc
                            quizNo={ind+1}
                            key = {quiz._id}
                            quizKey = {quiz.key}
                            quizId = {quiz._id}
                            name = {quiz.name}
                            createdAt = {quiz.createdAt}
                            deadline = {quiz.deadline}
                            duration = {quiz.duration}
                        />
                    ))}
                </tbody>
                    
                    
            </Table>
        );
    return(
        <div className="quizzes-created">
            <h2 className="title">Quizzes Created</h2>
            {content}
        </div>
    );
}
const mapStateToProps=({quizezCreated})=>({
    quizezCreated
});

export default connect(mapStateToProps)(QuizCreated);