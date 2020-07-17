import React,{useState,useEffect,useRef} from 'react'
import QuestionForm from './QuestionFrm'
import {connect} from 'react-redux'
import {createQuiz} from '../../utils/api'
import {createNewQuiz} from '../../actions/quizezCreated'

const CreateQuiz = ({match,authed,dispatch,history,push})=>{

    const path = match?match.url:'/create-quiz'

    const [questions,setQuestions] = useState([]);
    const [duration,setDuration] = useState({hrs:0,mins:0});
    const [deadline,setDeadline] = useState("");
    const [quizName,setQuizName] = useState("");
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
                // history.replace(`/created-quiz/${updatedQuiz.id}`);
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
        //createQuiz(quiz);

    }

    const createMeta = e=>{
        e.preventDefault();
        setCreating(true);
    }

    const quizNameHandler = name =>{
        setQuizName(name);
    }

    const durationHandler = (type,value)=>{
        if(type === "hrs")
            setDuration({...duration,hrs:value})
        else
            setDuration({...duration,mins:value})
    }
    
    const deadlineHandler = deadline=>{
        setDeadline(deadline);
    }

   
    let content = (
        <div className="create-quiz">
             <h1>Create Quiz</h1>
            <QuestionForm 
                addQuestion = {addQuestion}
                submitQuiz = {submitQuizHandler}/>
        </div>
    );
    
    if(!creating)
        content = (
            <React.Fragment>
                <div className="create-quiz-meta">
                    <h2>Nature of Quiz</h2>
                    <form onSubmit={createMeta}>
                        <input
                            type = "text"
                            placeholder = "Enter Quiz Name"
                            value = {quizName}
                            onChange = {e=>quizNameHandler(e.target.value)}
                        />
                        <input 
                            type = "text" 
                            placeholder = "Enter Deadline"
                            value = {deadline}
                            onChange = {e=>deadlineHandler(e.target.value)}/>
                        <label>Duration </label>
                        <input 
                            type = "number" 
                            value = {duration.hrs} 
                            min={0} 
                            max={12}
                            onChange = {e=>durationHandler('hrs',e.target.value)}/> Hrs &nbsp;
                        <input 
                            type = "number" 
                            value = {duration.mins} 
                            min={0} 
                            max={59}
                            onChange = {e=>durationHandler('mins',e.target.value)}/> Mins &nbsp;
                        <input type = "submit" value = "Create Quiz"/>
                    </form>
                </div>
            </React.Fragment>
        );

    return content;
}

const mapStateToProps = ({authed})=>({
    authed
});
export default connect(mapStateToProps)(CreateQuiz);