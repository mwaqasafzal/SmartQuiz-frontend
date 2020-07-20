import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {getQuizTakers} from '../../utils/api'
import QuizAttendee from './QuizAttendee'
import Loader from '../UI/Loader/Loader'
import {connect} from 'react-redux'
import {Container,Card,Table} from 'react-bootstrap'
import {convertDate} from '../../utils/helpers'

const QuizStats = ({match,quiz})=>{
    const path = match.url;//will be like /dashboard/quizez-created/<quiz-id>
    const quizId = match.params.quizId;

    const [attendees,setAttendees] = useState(null);

    useEffect(()=>{
        (async function(){
            const attendees = await getQuizTakers(quizId);
            setAttendees(attendees);
        })();
    },[])
    let content;
    if(!attendees)
        content=<div className="custom-loader"><Loader/></div>;
    else
        content=(
            <div className="quiz-stats">
                <h2 className="title">{quiz.name}</h2>
                <Container>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Text>Created @ <b>{convertDate(quiz.createdAt)}</b></Card.Text>
                            <Card.Text>Deadline @ <b>{convertDate(quiz.deadline)}</b></Card.Text>
                            <Card.Text>Total Score <b>{quiz.questions.length}</b></Card.Text>
                            <Card.Text>Duration <b>{quiz.duration.hrs} hrs {quiz.duration.mins} mins</b></Card.Text>
                            <Link to={`${path}/fullquiz`}>See Complete Quiz</Link>
                        </Card.Body>
                    </Card>
                    <br/>
                    {attendees.length===0 && <h5 className="center">No has Attempted this Quiz Yet!</h5>}
                    <div className="complete-stats">
                       {attendees.length>0 && ( <Table responsive>
                            <thead style={{backgroundColor:'#204051',color:'#e4e3e3'}}>
                                <tr>
                                    <th>Attendee</th>
                                    <th>Email</th>
                                    <th>Date/Time</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    attendees.map((attendee,ind)=>(
                                        <QuizAttendee
                                            key = {ind}
                                            attendee ={attendee.fullName}
                                            email = {attendee.email}
                                            attendedAt = {new Date(attendee.takenAt)}
                                            score = {attendee.score}
                                        />
                                    ))
                                }
                            </tbody>
                        </Table>)}
                    </div>
                </Container>
               
            </div>
        );
    return content;
}

const mapStateToProps = ({quizezCreated},{match})=>{
    const {quizId} = match.params;
    return {
        quiz:quizezCreated.find(({_id})=>_id===quizId)
    }
}
export default connect(mapStateToProps)(QuizStats);