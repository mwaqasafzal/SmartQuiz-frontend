import React,{useState} from 'react'

const Questions=({questions,finishQuiz,increaseScore})=>{

    const totalQuestions = questions.length;

    const [answer,setAnswer] = useState("");
    const [questionNo,setQuestionNo] = useState(0);
    let _question = questions[questionNo]; 
    const answerChangeHandler = answer=>{
        setAnswer(answer);
    }

    const submitAnswer = e=>{
        e.preventDefault();
        const {answer:correctAnswer,questionType} = _question;
        
        if(questionType==="blank" && correctAnswer.toLowerCase()===answer.toLowerCase())
            increaseScore();//passing points for this question...by default its one
        else if(questionType==="mcq" && correctAnswer===answer)
            increaseScore();
        
        if(questionNo==totalQuestions-1)
           return finishQuiz(true);
        setAnswer("");
        setQuestionNo(questionNo+1);
    }


  
    let questionContent;

    if(_question.questionType==="mcq"){
        const {question,options} = _question;
        
        questionContent = (
            <div className = "quiz-question">
                <h4>{questionNo+1}. {question}</h4>
                <div className = "options" style={{marginLeft:'20px'}}>
                    {options.map((option,ind)=>(
                        <React.Fragment  key= {ind}>
                             <input 
                                type="radio"
                                value = {ind+1}
                                name="option"
                                onChange = {e=>answerChangeHandler(e.target.value)}/> &nbsp;
                                { option} 
                                <br/>
                        </React.Fragment>
                    ))}
                </div>
                <button onClick={submitAnswer}>Submit</button>
            </div>);
    }
    else if(_question.questionType === "blank"){
        const {question} = _question;
        questionContent = (
            <div className = "quiz-question">
                <h4>{questionNo+1}. {question}</h4>
                <input 
                    type = "text" 
                    placeholder = "Your Answer"
                    value = {answer}
                    onChange = {e=>answerChangeHandler(e.target.value)}
                    style={{margin:'10px 20px',fontSize:'1.2rem',letterSpacing:'1px'}}
                    />
                    <br/><br/>
                <button onClick={submitAnswer}>Submit</button>
            </div>
        );
    }
        
    return questionContent;
}

export default Questions;