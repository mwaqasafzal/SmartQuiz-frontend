import React,{useState,useEffect,useRef} from 'react'
import QuestionForm from './QuestionFrm'
import {connect} from 'react-redux'
import {createQuiz} from '../../utils/api'
import {createNewQuiz} from '../../actions/quizezCreated'
import {Container,Form,Button} from 'react-bootstrap'

const CreateQuiz = ({match,authed,dispatch,history})=>{

    const [questions,setQuestions] = useState([]);
    const [duration,setDuration] = useState({hrs:0,mins:0});
    const [invalidHrs,setInvalidHrs] = useState(false);
    const [invalidMins,setInvalidMins] = useState(false);
    const [deadline,setDeadline] = useState("");
    const [invalidDeadline,setInvalidDeadline] = useState(false);
    const [quizName,setQuizName] = useState("");
    const [invalidName,setInvalidName] = useState(false);
    const [creating,setCreating] = useState(false);//creating the quiz or writing meta data
    const [submitted,setSubmitted] = useState(false);
    const checkRef = useRef();

    useEffect(()=>{
        /*
            as this method should be called after update of submitted state,
            but it gets called on mounting as well,so to stop that we created a reference
            and on mounthing it will be undefined,so we can check and work accordingly
        */
    
        if(checkRef.current){
            const quiz = {
                creator:authed,
                name:quizName,
                deadline,
                duration,
                questions
            };
            (async function(){
                //submitted quiz to server successfully
                const updatedQuiz = await createQuiz(quiz);
                //updating the store
                dispatch(createNewQuiz(updatedQuiz));
                console.log(updatedQuiz);
                
                history.replace(`/created-quiz/${updatedQuiz.id}`);
            })();
            
        }
        else{
            checkRef.current=true;
        }
       
    },[submitted])
    
   
    const addQuestion=(question)=>{
        setQuestions([...questions,question])
    }
    const submitQuizHandler=(question)=>{//stilll there is one last question that will be added on submit
                                //as there are two options for question 
                                //1- Save and Next  2- Save and Submit
        addQuestion(question);
        setSubmitted(true);
    }

    const createMeta = e=>{
        e.preventDefault();
        setCreating(true);
    }

    const quizNameHandler = name =>{
        if(name.length===0)
            setInvalidName(true);
        else 
            setInvalidName(false);
        setQuizName(name);
    }

    const durationHandler = (type,value)=>{
        if(duration.hrs==0 && duration.Mins==0){
            alert('invalid duration')
            setInvalidHrs(true);
            setInvalidMins(true);
        }
        else{
            setInvalidHrs(false);
            setInvalidMins(false);
        }
            
        if(type === "hrs"){
            if(value==0){
                if(duration.mins==0){
                    setInvalidMins(true);
                    setInvalidHrs(true);
                }    
            }
            setDuration({...duration,hrs:value});
        }
        else{
            if(value==0)
                if(duration.hrs==0){
                    setInvalidMins(true);
                    setInvalidHrs(true);
                }
            setDuration({...duration,mins:value})
        }
           
    }
    
    const deadlineHandler = deadline=>{
        const deadlineDate = new Date(deadline);
        const today = new Date();
        if(deadlineDate.getDate()<today.getDate())
            setInvalidDeadline(true);
        else
            setInvalidDeadline(false);
        setDeadline(deadline);
    }

    const checkValidity=()=>{
        if(invalidDeadline)
            return false;
        else if(quizName.length===0)
            return false;
        else if(duration.mins===0 && duration.hrs===0)
            return false;
        return true;
    }

    let content = (
        <div className="create-quiz">
             <h2 className="title">Create Quiz</h2>
            <h5 style={{textAlign:"center"}}>Question No {questions.length+1}</h5>
            <QuestionForm 
                addQuestion = {addQuestion}
                submitQuiz = {submitQuizHandler}/>
        </div>
    );
    
    if(!creating)
        content = (
            <div className="quiz-nature">
                <h2 className="title">Nature of Quiz</h2>
                <Container style={{maxWidth:"500px"}}fluid>
                    <Form  onSubmit={createMeta}>
                        <Form.Group controlId="formBasicQuizName">
                            <Form.Label>Quiz Name</Form.Label>
                            <Form.Control 
                                className={invalidName?'invalid-input':null}
                                type="text" 
                                placeholder="Enter Quiz Name"
                                value = {quizName}
                                onChange = {e=>quizNameHandler(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicDeadline">
                            <Form.Label>Deadline</Form.Label>
                            <Form.Control 
                                className={invalidDeadline?'invalid-input':null}
                                type="date" 
                                placeholder="Enter Deadline"
                                value = {deadline}
                                onChange = {e=>deadlineHandler(e.target.value)} />
                        </Form.Group>
                        <Form.Label>Duration</Form.Label>
                        <Form.Row style={{flexFlow:"row"}}>
                            <Form.Control 
                                className={invalidHrs?'invalid-input':null}
                                type="number" 
                                value = {duration.hrs===0?"":duration.hrs} 
                                placeholder="Hrs"  
                                min={0} 
                                max={12}
                                onChange = {e=>durationHandler('hrs',e.target.value)}/> 
                            <Form.Control 
                                className={invalidMins?'invalid-input':null}
                                type="number" 
                                placeholder="Mins"
                                value = {duration.mins===0?"":duration.mins}
                                min={0} 
                                max={59}
                                onChange = {e=>durationHandler('mins',e.target.value)} /> 
                          
                        </Form.Row>
                        <br/>

                        <Button 
                            type="submit" 
                            style={{display:"block",width:"100%",backgroundColor:'#3b6978',border:'none'}}
                            disabled={!checkValidity()}>
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        );

    return content;
}

const mapStateToProps = ({authed})=>({
    authed
});
export default connect(mapStateToProps)(CreateQuiz);