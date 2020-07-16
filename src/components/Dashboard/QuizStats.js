import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {getQuizTakers} from '../../utils/api'
import QuizAttendee from './QuizAttendee'
import {connect} from 'react-redux'

const QuizStats = ({match,quiz})=>{
    const path = match.url;//will be like /dashboard/quizez-created/<quiz-id>
    const quizId = match.params.quizId;

    const [attendees,setAttendees] = useState([]);

    useEffect(()=>{
        (async function(){
            const attendees = await getQuizTakers(quizId);
            setAttendees(attendees);
        })();
    },[])

    return(
        <div className="quiz-stats">
            <div className="header">
                <h2>{quiz.name}</h2>
                <div className="basic-stats">
                <p>Created at <b>{quiz.createdAt}</b></p>
                    <p>Total Score <b>{quiz.questions.length}</b></p>
                    <Link to={`${path}/fullquiz`}>See Complete Quiz</Link>
                </div>
            </div>
            <div className="complete-stats">
                <table>
                    <thead>
                        <tr>
                            <th>Attendee</th>
                            <th>Date/Time</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            attendees.map(attendee=>(
                                <QuizAttendee
                                    key = {attendee.username}
                                    attendee ={attendee.username}
                                    attendedAt = {attendee.attemptedAt}
                                    score = {attendee.score}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const mapStateToProps = ({quizezCreated},{match})=>{
    const {quizId} = match.params;
    return {
        quiz:quizezCreated.find(({id})=>id===quizId)
    }
}
export default connect(mapStateToProps)(QuizStats);