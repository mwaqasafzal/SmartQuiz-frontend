import React from 'react'
import {connect} from 'react-redux'

const quizCreated = ({key,history})=>{
    return(
        <div className="quiz-created">
            <h2>Quiz Created Successfully!</h2>
            <h3>key:{key}</h3>
            <button onClick={()=>{history.replace('/')}}>Done</button>
        </div>
    );

}
const mapStateToProps = ({quizezCreated},{quizId})=>{
    const quiz = quizCreated.find(quiz=>quiz.id===quizId);
    return {
        key: quiz.key
    }
    
}
export default connect(mapStateToProps)(quizCreated);