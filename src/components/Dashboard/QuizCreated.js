import React from 'react'
import QuizCreatedDesc from './QuizCreatedDesc'
import {connect} from 'react-redux'

const QuizCreated=({quizezCreated})=>{//path = /dashboard/quiz-created/
    return(
        <div className="quiz-created">
            <table>
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
                    
                   
            </table>
        </div>
    );
}
const mapStateToProps=({quizezCreated})=>({
    quizezCreated
});

export default connect(mapStateToProps)(QuizCreated);