import React from 'react'
import StatCard from '../Dashboard/StatCard'
import {Container,Row,Col} from 'react-bootstrap'

export default function Dashboard({match,history}){

    const {path}=match;
    const changePath=to=>{
        history.push(to);
    }
  
    return (
        <div className="dashboard">
            <h2 className="title">Dashboard</h2>
            <div className="content">
                <Container className="cards justify-content-md-center"  >
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
                                clickHandler={()=>changePath(`${path}/quizzes-created`)}/>               
                        </Col>
                        <Col sm={6}>
                            <StatCard 
                                title='Quizzes Taken'
                                text='See All Details Quizzez You have Taken until now'
                                className="m-2"
                                clickHandler={()=>changePath(`${path}/quizzes-taken`)}/>
       
                        </Col>
                    </Row>
                </Container>
            </div>
            
        </div>
      
    );
}