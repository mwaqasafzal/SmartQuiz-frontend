import React from 'react'
import {Link,withRouter} from 'react-router-dom'

const QuizCreatedDesc = ({quizId,name,createdAt,location})=>{
    const path = location.pathname;
    
    return(
        <tr>
            <td>{name}</td>
            <td>{createdAt}</td>
            <td className="see-stats"><Link to={`${path}/${quizId}`}> see stats</Link></td>
        </tr>
    );

}

export default withRouter(QuizCreatedDesc);