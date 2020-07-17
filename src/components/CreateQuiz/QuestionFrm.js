import React,{useState} from 'react'
import FilterQuesType from './FilterQuesType'
import {connect} from 'react-redux'


const QuestionFrm = ({questionTypes,addQuestion,submitQuiz})=>{
    /* 
        for time being there are two types of questions
        1-mcq
        2-blank
        so we have to provide the interface according to them
    */

    const [question,setQuestion] = useState("");
    const [answer,setAnswer] = useState("");
    const [options,setOptions] = useState(["","","",""]);
    const [questionType,setQuestionType] = useState(questionTypes[0]);
   
    const changeQuestionType=(type)=>{
        setQuestionType(type);
    }

    const changeAnswer = answer=>{
        setAnswer(answer);
    }

    const changeQuestion = question =>{
        setQuestion(question);
    }

    const changeOption = (index,value)=>{
        const opts = [...options];
        opts[index] = value;
        setOptions(opts);
    }

    const addNewQuestion = e=>{
        e.preventDefault();
        let newQuestion = {
            question,
            type:questionType
        };
        newQuestion = questionType==="mcq"?{...newQuestion,options}:{...newQuestion,answer};
       


        addQuestion(newQuestion);
        setQuestion("");
        setAnswer("");
        setOptions(["","","",""]);
    }
    
    const saveAndSubmit = e=>{
        e.preventDefault();
        let newQuestion = {
            question,
            type:questionType
        };
        newQuestion = questionType==="mcq"?{...newQuestion,options}:{...newQuestion,answer};

        submitQuiz(newQuestion);
    }
    
    let solution = (
        <React.Fragment>
            <input 
                type = "text" 
                placeholder = "Enter Option One" 
                onChange = {e=>changeOption(0,e.target.value)}
                value = {options[0]}/>
            <input 
                type = "text" 
                placeholder = "Enter Option Two" 
                onChange = {e=>changeOption(1,e.target.value)}
                value = {options[1]}/>
            <input 
                type = "text" 
                placeholder = "Enter Option Three"
                onChange = {e=>changeOption(2,e.target.value)}
                value = {options[2]}/>
            <input 
                type = "text" 
                placeholder = "Enter Option Four"
                onChange = {e=>changeOption(3,e.target.value)}
                value = {options[3]}/>
            <input 
                type = "number" 
                placeholder = "Enter Correct Option"
                onChange = {e=>changeAnswer(e.target.value)}
                value = {answer}/>
        </React.Fragment>
    );
    if(questionType==="blank")
        solution = (
                        <input 
                            type = "text" 
                            placeholder = "Enter Correct Answer" 
                            onChange = {e=>changeAnswer(e.target.value)}
                            value = {answer} />);
        
    return (
            <form className="question-frm">
                <FilterQuesType
                    selectedType = {questionType}
                    questionTypes = {questionTypes}
                    changeQuestionType = {changeQuestionType}/>
                <input
                    placeholder="Enter the Question"
                    value = {question}
                    onChange = {e=>changeQuestion(e.target.value)}
                />
                {solution}
                <button onClick={addNewQuestion}>Add &amp; Next</button>
                <button onClick={saveAndSubmit}>Add &amp; Submit</button>
            </form>
    );
}

const mapStateToProps=({questionTypes})=>({
    questionTypes
});

export default connect(mapStateToProps)(QuestionFrm);
