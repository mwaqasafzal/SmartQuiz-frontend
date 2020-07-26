import React from 'react'
import {convertDate} from '../../utils/helpers'
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeQuizHandler} from '../../actions/quizezCreated'

const QuizCreatedDesc = ({quizNo,quizId,quizKey,name,createdAt,deadline,duration,location,dispatch})=>{
    const path = location.pathname;
    
    const removeQuiz=quizId=>{
        dispatch(removeQuizHandler(quizId));
    }
    
    return(
        <tr>
            <td>{quizNo}</td>
            <td>{name}</td>
            <td>{quizKey}</td>
            <td>{convertDate(createdAt)}</td>
            <td>{convertDate(deadline)}</td>
            <td>{duration.hrs} hrs {duration.mins} mins</td>
            <td className="see-stats"><Link to={`${path}/${quizId}`}> see stats</Link></td>
            <td><button 
                    className="delete-quiz-btn"
                    onClick={removeQuiz}>Remove</button></td>
        </tr>
    );

}

export default connect()(withRouter(QuizCreatedDesc));