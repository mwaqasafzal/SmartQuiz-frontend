import React from 'react'
import {connect} from 'react-redux'
import {Container,Row,Button,Col} from 'react-bootstrap'

const quizCreated = ({quizKey,history})=>{
    
    return(
        <Container style={{textAlign:'center'}}className="created-quiz" fluid>
            <Row >
                <Col><h2>Quiz Created Successfully!</h2></Col>
            </Row>
            <Row>
                <Col><h3>key:{quizKey}</h3></Col>
            </Row>
            <Row>
                <Col><Button style={{color:'white'}} onClick={()=>{history.replace('/')}}>Done</Button></Col>
            </Row>
            
        </Container>
    );

}

const mapStateToProps = ({quizezCreated},{match})=>{
  
    const quizId=match.params.quizId;
    const quiz = quizezCreated.find(quiz=>quiz._id===quizId);

    return {
        quizKey: quiz.key
    }
    
}
export default connect(mapStateToProps)(quizCreated);
