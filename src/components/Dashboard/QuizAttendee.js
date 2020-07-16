import React from 'react'

export default function QuizAttendee ({attendee,attendedAt,score}){
    return(
        <tr>
            <td>{attendee}</td>
            <td>{attendedAt}</td>
            <td>{score}</td>
        </tr>
    );
}