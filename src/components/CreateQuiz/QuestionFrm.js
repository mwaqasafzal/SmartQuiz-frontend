import React,{useState} from 'react'
import FilterQuesType from './FilterQuesType'
import {Container,Form,Button} from 'react-bootstrap'

const QuestionFrm = ({addQuestion,submitQuiz})=>{

    /* 
        for time being there are two types of questions
        1-mcq
        2-blank
        so we have to provide the interface according to them
    */
    const questionTypes = ['mcq','blank'];

    const [question,setQuestion] = useState("");
    const [invalidQuestion,setInvalidQuestion] = useState("");
    const [answer,setAnswer] = useState("");
    const [invalidAnswer,setInvalidAnswer] = useState(false);
    const [options,setOptions] = useState(["","","",""]);
    const [invalidOptions,setInvalidOptions] = useState([false,false,false,false]);
    const [questionType,setQuestionType] = useState(questionTypes[0]);
    
    const changeQuestionType=(type)=>{
        setQuestionType(type);
    }

    const changeAnswer = answer=>{
        if(answer.length===0)
            setInvalidAnswer(true);
        else
            setInvalidAnswer(false);
        setAnswer(answer);
    }

    const changeQuestion = question =>{
        if(question.length===0)
            setInvalidQuestion(true);
        else 
            setInvalidQuestion(false);
        setQuestion(question);
    }

    const changeOption = (index,value)=>{
        const opts = [...options];
        opts[index] = value;
        const invalidOpts = [...invalidOptions];
        if(value.length===0){
            invalidOpts[index] = true;
            setInvalidOptions(invalidOpts);
        }
        else{
            invalidOpts[index] = false;
            setInvalidOptions(invalidOpts);
        }
        setOptions(opts);
    }

    const addNewQuestion = e=>{
        e.preventDefault();
        let newQuestion = {
            question,
            questionType
        };
        newQuestion = questionType==="mcq"?{...newQuestion,options,answer}:{...newQuestion,answer};
       
        addQuestion(newQuestion);
        setQuestion("");
        setAnswer("");
        setOptions(["","","",""]);
    }
    
    const saveAndSubmit = e=>{
        e.preventDefault();
        let newQuestion = {
            question,
            questionType
        };
        newQuestion = questionType==="mcq"?{...newQuestion,options,answer}:{...newQuestion,answer};

        submitQuiz(newQuestion);
    }
    const checkValidity = ()=>{
        if(question.length===0)
            return false;
        else if(answer.length===0)
            return false;
        else
            options.forEach(option=>{
                if(option.length===0)
                    return false;
            })
        return true;
    }
    
    let solution = (
        <React.Fragment>
            <Form.Group controlId="formBasicOp1">
                    <Form.Label>Option 1</Form.Label>
                    <Form.Control 
                        className={invalidOptions[0]?'invalid-input':null}
                        type = "text" 
                        placeholder = "Enter Option One" 
                        onChange = {e=>changeOption(0,e.target.value)}
                        value = {options[0]} />
            </Form.Group>
            <Form.Group controlId="formBasicOp2">
                    <Form.Label>Option 2</Form.Label>
                    <Form.Control 
                        className={invalidOptions[1]?'invalid-input':null}
                        type = "text" 
                        placeholder = "Enter Option Two" 
                        onChange = {e=>changeOption(1,e.target.value)}
                        value = {options[1]} />
            </Form.Group>
            <Form.Group controlId="formBasicOp3">
                    <Form.Label>Option 3</Form.Label>
                    <Form.Control 
                        className={invalidOptions[2]?'invalid-input':null}
                        type = "text" 
                        placeholder = "Enter Option Three" 
                        onChange = {e=>changeOption(2,e.target.value)}
                        value = {options[2]} />
            </Form.Group>
            <Form.Group controlId="formBasicOp4">
                    <Form.Label>Option 4</Form.Label>
                    <Form.Control 
                        className={invalidOptions[3]?'invalid-input':null}
                        type = "text" 
                        placeholder = "Enter Option Four" 
                        onChange = {e=>changeOption(3,e.target.value)}
                        value = {options[3]} />
            </Form.Group>
            
            <Form.Group controlId="formBasicAns">
                    <Form.Label>Correct Option </Form.Label>
                    <Form.Control 
                        className={invalidAnswer?'invalid-input':null}
                        type = "number" 
                        placeholder = "Enter Correct Option No" 
                        min={1}
                        max={4}
                        onChange = {e=>changeAnswer(e.target.value)}
                        value = {answer} />
            </Form.Group>
            
        </React.Fragment>
    );
    if(questionType==="blank")
        solution = (
            <Form.Group controlId="formBasicQuizName">
                    <Form.Label>Answer</Form.Label>
                    <Form.Control 
                        className={invalidAnswer?'invalid-input':null}
                        type = "text" 
                        placeholder = "Enter the Answer" 
                        onChange = {e=>changeAnswer(e.target.value)}
                        value = {answer} />
            </Form.Group>
        );

    let isInpValid=checkValidity();
    return (
        <Container style={{maxWidth:"500px"}} fluid>
            <FilterQuesType
                    selectedType = {questionType}
                    questionTypes = {questionTypes}
                    changeQuestionType = {changeQuestionType}/>
            
            <Form className="question-frm">
                <Form.Group controlId="formBasicQuizName">
                    <Form.Label>Enter Question</Form.Label>
                    <Form.Control 
                        className={invalidQuestion?'invalid-input':null}
                        type="text" 
                        placeholder="Enter Question"
                        value = {question}
                        onChange = {e=>changeQuestion(e.target.value)} />
                </Form.Group>
                {solution}
                <Form.Row style={{justifyContent:"flex-end"}}>
                    <Button 
                        type="submit" 
                        style={{backgroundColor:'#3b6978',border:'none'}}
                        disabled={!isInpValid}
                        onClick={addNewQuestion}>
                        Add &amp; Next
                    </Button>&nbsp;
                    <Button 
                        type="submit" 
                        style={{backgroundColor:'#3b6978',border:'none'}}
                        disabled={!isInpValid}
                        onClick={saveAndSubmit}>
                        Add &amp; Submit
                    </Button>
                </Form.Row>
            </Form>
        </Container>
            
    );
}


export default QuestionFrm;
