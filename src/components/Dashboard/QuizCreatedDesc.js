import React from 'react'
import {Link,withRouter} from 'react-router-dom'

const QuizCreatedDesc = ({quizNo,quizId,name,createdAt,deadline,duration,location})=>{
    const path = location.pathname;
    
    return(
        <tr>
            <td>{quizNo}</td>
            <td>{name}</td>
            <td>{createdAt}</td>
            <td>{deadline}</td>
            <td>{duration.hrs} hrs {duration.mins} mins</td>
            <td className="see-stats"><Link to={`${path}/${quizId}`}> see stats</Link></td>
        </tr>
    );

}

export default withRouter(QuizCreatedDesc);