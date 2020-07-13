import React from 'react';
import {Col,Container,Row} from 'react-bootstrap'
import students from '../assets/images/students.png'
import stats from '../assets/images/stats.png'
import createquiz from '../assets/images/createquiz.png'
import takequiz from '../assets/images/takequiz.png'
import {Service} from './Service'

export const Services=props=>{
    
    return(
        <div className="services mt-3" >
                <h2 className="title" id="services">Services</h2>
                    <Container>
                            <Row >
                                <Col sm={6}>
                                    <Service 
                                        image={createquiz}
                                        title="Create a Quiz">
                                        User can create a quiz,with latest tools provided by SmartQuiz
                                    </Service>
                                </Col>
                                <Col sm={6}>
                                    <Service 
                                        image={takequiz}
                                        title="Attempt a Quiz">
                                        User can attempt a quiz,any time,at any kind of device like desktop or smart phone.
                                    </Service>
                                </Col>
                                <Col sm={6}>
                                    <Service 
                                        image={students}
                                        title="Those Who have taken your Quiz">
                                        If you have created the quiz,anyone who attempted your quiz will be notified to you,with his result
                                    </Service>
                                </Col>
                                <Col sm={6}>
                                    <Service 
                                        image={stats}
                                        title="Statistics of attempts and result">
                                            A complete set of statistics will be provided to you either the attempts on quizez you created and the quizez you attempted
                                    </Service>

                                </Col>
                            </Row>

                        </Container>

                {/* <div className={classes.root}>
                    
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                           
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Service 
                                image={students}
                                title="Those Who have taken your Quiz">
                                If you have created the quiz,anyone who attempted your quiz will be notified to you,with his result
                            </Service>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                         
                        </Grid>
                    </Grid>
                 </div> */}
        </div>
    );
}


