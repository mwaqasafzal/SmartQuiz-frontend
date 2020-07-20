import React from 'react'

export default function QuizAttendee ({attendee,email,attendedAt,score}){
    return(
        <tr>
            <td>{attendee}</td>
            <td>{email}</td>
            <td>{attendedAt}</td>
            <td>{score}</td>
        </tr>
    );
}