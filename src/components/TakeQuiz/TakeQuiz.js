import React,{useState} from 'react'
import Quiz from './Quiz'
import {getQuiz} from '../../utils/api'
import {Container,Form,Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {startLoader,stopLoader} from './../../actions/loader'
import {failed} from '../../actions/shared'

const TakeQuiz = ({dispatch})=>{
    const [key,setKey] = useState("");
    const [invalidKey,setInvalidKey] = useState(false);//for form validation
    const [quiz,setQuiz] = useState("");
    

    const keyChangeHandler = value =>{
        if(value.length===0)
            setInvalidKey(true);
        else
            setInvalidKey(false);
        setKey(value);
    }

    const startQuiz = e=>{
        e.preventDefault();
        const keyValue = key;
        setKey("");
        (async function(){
            dispatch(startLoader());
            const res = await getQuiz(keyValue);
            dispatch(stopLoader());

            if(res.status==='failed')
                dispatch(failed(res.error));
            else{
                setQuiz(res.quiz);
                setKey("");
            }   
            
        })();
    }
    let content = (
        
       <div className = "take-quiz">
            <Container  style={{maxWidth:"500px",minWidth:'400px',width:"50%"}}>
                <h5 className="center" style={{color:"#3b6978"}}>Hi There! This is for testing purpose,you can take an already made quiz using key <b>WyD6ufInu</b></h5>
                <Form >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{fontSize:'1.3rem',fontWeight:'bold'}}>Quiz Key</Form.Label>
                        <Form.Control 
                            className={invalidKey ?'invalid-input':null}
                            type = "text"
                            placeholder = "Enter the Key"
                            value = {key}
                            onChange = {e=>keyChangeHandler(e.target.value)}/>
                    </Form.Group>
                    <Button  
                        type="submit"
                        className="custom-btn"
                        onClick= {startQuiz}
                        disabled={key.length===0}>
                        Submit
                    </Button>
                </Form>
            </Container>
       </div>
    );
    if(quiz)
        content = <Quiz quiz={quiz}/>
  
    return content;
}



export default connect()(TakeQuiz);