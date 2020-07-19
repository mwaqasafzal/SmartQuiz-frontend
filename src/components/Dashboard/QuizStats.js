import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {getQuizTakers} from '../../utils/api'
import QuizAttendee from './QuizAttendee'
import Loader from '../UI/Loader/Loader'
import {connect} from 'react-redux'
import {Container,Card,Table} from 'react-bootstrap'

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
                            <Card.Text>Created @ <b>{quiz.createdAt}</b></Card.Text>
                            <Card.Text>Deadline @ <b>{quiz.deadline}</b></Card.Text>
                            <Card.Text>Total Score <b>{quiz.questions.length}</b></Card.Text>
                            <Card.Text>Duration <b>{quiz.duration.hrs} hrs {quiz.duration.mins} mins</b></Card.Text>
                            <Link to={`${path}/fullquiz`}>See Complete Quiz</Link>
                        </Card.Body>
                    </Card>
                    <br/>
                    <div className="complete-stats">
                        <Table responsive>
                            <thead style={{backgroundColor:'#204051',color:'#e4e3e3'}}>
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
                        </Table>
                    </div>
                </Container>
               
            </div>
        );
    return content;
}

const mapStateToProps = ({quizezCreated},{match})=>{
    const {quizId} = match.params;
    return {
        quiz:quizezCreated.find(({id})=>id===quizId)
    }
}
export default connect(mapStateToProps)(QuizStats);