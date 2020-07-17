import {takenQuiz} from '../utils/api'
export const TOOK_NEW_QUIZ = "TOOK_NEW_QUIZ"
export const RECEIVE_ALL_QUIZEZ_TAKEN = "RECEIVE_ALL_QUIZEZ_TAKEN"

export const tookNewQuiz=quizStats=>({
   
        type: TOOK_NEW_QUIZ,
        quizStats
});

export const receiveAllQuizezTaken=quizez=>({
    type: RECEIVE_ALL_QUIZEZ_TAKEN,
    quizez
});

export const takeNewQuizHandler = (quizStats)=>{
    return dispatch=>{
        (async function(){
            try {
                await takenQuiz(quizStats);
                dispatch(tookNewQuiz(quizStats));    
            } catch (error) {
                //something went wrong,might be network issue
                console.log("something went wrong")
                //,trying again
            }
            
        })();
    }
}