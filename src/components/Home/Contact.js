import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

export const Contact=()=>{
    return (
            <Container 
                className="contact" 
                id="contact-us"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-offset="300"
                data-aos-easing="ease-in-out"
                data-aos-once="false">
                <Row>
                    <Col>
                        <h2 className="title">Lets Get in touch!</h2>
                    </Col>
                </Row>
                <Row>
                     <Col>
                       <p>Have any problem or want to explore more about us?Just Email Us,we will get back to you as soon as possible</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                         <a href="mailto:muhammad.bsse3476@iiu.edu.pk">muhammad.bsse3476@iiu.edu.pk</a>
                    </Col>
                </Row>
            </Container>
       
       
    );
}