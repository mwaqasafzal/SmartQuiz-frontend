import React from 'react'

export default function QuizTakenDesc({quizNo,quiz,creator,takenAt,score,total}){
    return (
        <tr>
            <td>{quizNo}</td>
            <td>{quiz}</td>
            <td>{creator}</td>
            <td>{takenAt}</td>
            <td>{score}/{total}</td>
        </tr>
    );
}