import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
export const About=props=>{
    return(
            <Container id="about-us" className="about" >
                <Row>
                    <Col xs={12}>
                        <h2 className="title">About Us</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <p>Hi there,Welcome to SmartQuiz,an online quiz system.User can take quiz or can create quiz anywhere at anytime using any kind of device</p>
                    </Col>
                </Row>
            </Container>
    );
}