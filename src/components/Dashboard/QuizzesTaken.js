import React from 'react'
import {connect} from 'react-redux'
import QuizTakenDesc from './QuizTakenDesc'
import {Table} from 'react-bootstrap'
const QuizTaken=({quizezTaken})=>{
    let content = <h5 className="center"> You have not Attempted/Taken any Quiz yet!</h5>;
    if(quizezTaken.length>0)
        content=(
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
                                key = {ind}
                                quiz = {quiz.quizName}
                                creator = {quiz.createdBy.fullName}
                                takenAt = {`${new Date(quiz.takenAt)}`}
                                score = {quiz.score}
                                total = {quiz.total}
                            />
                        ))
                    }
                    
                </tbody>
            </Table>               
        );
    return(
        <div className="quizzes-taken">   
                <h2 className="title">Quizzes Taken</h2>
                {content}
        </div>
    );
}
const mapStateToProps=({quizezTaken})=>({
    quizezTaken
});

export default connect(mapStateToProps)(QuizTaken);