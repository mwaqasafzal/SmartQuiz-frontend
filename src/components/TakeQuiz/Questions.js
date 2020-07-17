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
        const {answer:correctAnswer,type} = _question;
        
        if(type==="blank" && correctAnswer.toLowerCase()===answer.toLowerCase())
            increaseScore();//passing points for this question...by default its one
        else if(type==="mcq" && correctAnswer===answer)
            increaseScore();
        
        if(questionNo==totalQuestions-1)
           return finishQuiz(true);

        setQuestionNo(questionNo+1);
    }


  
    let questionContent;

    if(_question.type==="mcq"){
        const {question,options} = _question;
        
        questionContent = (
            <div className = "question">
                <h4>{question}</h4>
                <div className = "options">
                    {options.map((option,ind)=>(
                        <React.Fragment  key= {ind}>
                             <input 
                                type="radio"
                                value = {ind+1}
                                onChange = {e=>answerChangeHandler(e.target.value)}/>
                                { option} 
                        </React.Fragment>
                       
                        
                      
                    ))}
                </div>
                <button onClick={submitAnswer}>Submit</button>
            </div>);
    }
    else if(_question.type === "blank"){
        const {question} = _question;
        questionContent = (
            <div className = "question">
                <h4>{question}</h4>
                <input 
                    type = "text" 
                    placeholder = "Enter your answer"
                    value = {answer}
                    onChange = {e=>answerChangeHandler(e.target.value)}
                    />
                <button onClick={submitAnswer}>Submit</button>
            </div>
        );
    }
        
    return(
        <div className = "questions">
            {questionContent}
        </div>
    );
}

export default Questions;