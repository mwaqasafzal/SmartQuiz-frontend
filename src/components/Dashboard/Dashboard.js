import React from 'react'
import Sidedrawer from '../UI/Sidedrawer'
import TakeQuizIcon from '../../icons/take-quiz.png'
import CreateQuizIcon from '../../icons/create-quiz.png'
import StatCard from '../Dashboard/StatCard'
import {Container,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function Dashboard({match,history}){

    const {path}=match;
    const changePath=to=>{
        history.push(to);
    }
  
    return (
        <div className="dashboard">
            <h2 className="title">Dashboard</h2>
            <div className="content">
                <Container className="cards" fluid>
                    <Row>
                        <Col>
                            <h2 className="title">Statistics</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>   
                            <StatCard 
                                title='Quizzes Created'
                                text='See All Quizzez You have Created and Who Attempted them until now'
                                className="m-2"
                                clickHandler={()=>changePath(`${path}/quizzes-taken`)}/>               
                        </Col>
                        <Col sm={6}>
                            <StatCard 
                                title='Quizzes Taken'
                                text='See All Details Quizzez You have Taken until now'
                                className="m-2"
                                clickHandler={()=>changePath(`${path}/quizzes-created`)}/>
       
                        </Col>
                    </Row>
                </Container>
            </div>
            
        </div>
      
    );
}