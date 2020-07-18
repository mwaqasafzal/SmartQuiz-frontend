import React,{useState} from 'react'
import Quiz from './Quiz'
import {getQuiz} from '../../utils/api'
import {Container,Form,Button} from 'react-bootstrap'
const TakeQuiz = props=>{
    const [key,setKey] = useState("");
    const [invalidKey,setInvalidKey] = useState(false);//for form validation
    const [incorrectKey,setIncorrectKey] = useState(false);//is there any quiz with that key
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
        (async function(){
            try {
                const quiz = await getQuiz(key);
                setQuiz(quiz);
                
            } catch (error) {
                setIncorrectKey(true);
                setKey("");   
            }

        })();
    }
    let content = (
        
       <div className = "take-quiz">
            <Container  style={{maxWidth:"500px",minWidth:'400px',width:"50%"}}>
                <Form >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{fontSize:'1.3rem',fontWeight:'bold'}}>Quiz Key</Form.Label>
                        <Form.Control 
                            className={invalidKey || incorrectKey?'invalid-input':null}
                            type = "text"
                            placeholder = "Enter the Key"
                            value = {key}
                            onChange = {e=>keyChangeHandler(e.target.value)}/>
                    </Form.Group>
                    {incorrectKey && <label style={{color:'red',fontSize:'0.8rem'}}>*Key is Expired or does not exists</label>}
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

export default TakeQuiz;