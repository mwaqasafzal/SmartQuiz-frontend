import React from 'react'
import {connect} from 'react-redux'
import QuizTakenDesc from './QuizTakenDesc'

const QuizTaken=({quizezTaken})=>{
    return(
        <div className="quiz-taken">
                <table>
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
                </table>
        </div>
    );
}
const mapStateToProps=({quizezTaken})=>({
    quizezTaken
});

export default connect(mapStateToProps)(QuizTaken);