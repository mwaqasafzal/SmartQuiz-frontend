import React from 'react'
import {connect} from 'react-redux'
import Backbutton from '../UI/Backbutton'
import Loader from '../UI/Loader/Loader'
import Question from './Question'
import {Card} from 'react-bootstrap'
import {convertDate} from '../../utils/helpers'

const QuizDescription = ({quiz,history})=>{

    if(!quiz)
        return <div className="custom-loader"><Loader/></div>

    const {name,createdAt,deadline,duration,questions} = quiz;
    return (
        <div className="quiz-description">
            <div className="header">
                <Backbutton clickHandler={()=>history.goBack()}/>
                <h3 style={{flex:'auto',textAlign:'center'}}>{name}</h3>
            </div>
            
            <Card style={{ width: '28rem',margin:'auto' }}>
                <Card.Body>
                    <Card.Text>Created @ <b>{convertDate(createdAt)}</b></Card.Text>
                    <Card.Text>Deadline @ <b>{convertDate(deadline)}</b></Card.Text>
                    <Card.Text>Total Score <b>{questions.length}</b></Card.Text>
                    <Card.Text>Duration <b>{duration.hrs} hrs {duration.mins} mins</b></Card.Text>
                </Card.Body>
            </Card>
           
            <div className="questions">
                <h5>Questions</h5>
                
                {questions.map((question,ind)=>(
                    <Question
                        key={ind}
                        {...question}
                        questionNo={ind+1}
                    />
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = ({quizezCreated},{match})=>{
    const quizId = match.params.quizId;
    return {
        quiz:quizezCreated.find(({_id})=>_id===quizId)
    }
}
export default connect(mapStateToProps)(QuizDescription);