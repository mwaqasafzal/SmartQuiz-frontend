import React from 'react'

export default function QuizTakenDesc({quiz,creator,takenAt,score,total}){
    return (
        <tr>
            <td>{quiz}</td>
            <td>{creator}</td>
            <td>{takenAt}</td>
            <td>{score}/{total}</td>
        </tr>
    );
}