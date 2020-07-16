import React from 'react'
import {connect} from 'react-redux'

const QuizDescription = ({quiz})=>{
    console.log(quiz);
    return(
        <div className="quiz-description">
            Quiz Quiz Quiz
            {JSON.stringify(quiz)}
        </div>
    );
}

const mapStateToProps = ({quizezCreated},{match})=>{
    const quizId = match.params.quizId;
    return {
        quiz:quizezCreated.find(({id})=>id===quizId)
    }
}
export default connect(mapStateToProps)(QuizDescription);