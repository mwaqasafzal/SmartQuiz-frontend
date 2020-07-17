import React,{useState} from 'react'
import Quiz from './Quiz'
import {getQuiz} from '../../utils/api'

const TakeQuiz = props=>{
    const [key,setKey] = useState("");
    const [invalidKey,setInvalidKey] = useState(false);
    const [quiz,setQuiz] = useState("");
    

    const keyChangeHandler = value =>{
        setKey(value);
    }
    const startQuiz = e=>{
        e.preventDefault();
        (async function(){
            try {
                const quiz = await getQuiz(key);
                setQuiz(quiz);
                
            } catch (error) {
                setInvalidKey(true);
                setKey("");   
            }

        })();
    }
    let content = (
        <div className = "take-quiz">
            <form className="ask-key-frm" >
                <input
                    type = "text"
                    placeholder = "Enter the Key"
                    value = {key}
                    onChange = {e=>keyChangeHandler(e.target.value)}
                />
                {invalidKey && <label style={{color:"red"}}>Key is invalid</label>}
                <button
                    type = "submit"
                    value = "Submit"
                    onClick= {startQuiz}
                >Start Quiz</button>
            </form> 
        </div>
    );
    if(quiz)
        content = <Quiz quiz={quiz}/>
  
    return content;
}

export default TakeQuiz;