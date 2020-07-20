import React from 'react'
import {Link} from 'react-router-dom'
const Result = ({quizname,score,total})=>(
    <div className="result">
        <h2 className="title">Result</h2>
        <div style={{textAlign:'center'}}>
            <h3>{quizname}</h3>
            <h4>Score: {score}/{total}</h4>
            <Link to="/dashboard" >Go To Home</Link>
        </div>
    </div>
);
export default Result;