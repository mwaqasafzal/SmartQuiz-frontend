import {receiveAllQuizezTaken} from './quizezTaken'
import {receiveAllQuizezCreated} from './quizezCreated'
import {receiveQuestionTypes} from './questionTypes'
import * as API from '../utils/api'


export const loadData = ()=>{//async action creator
    return dispatch=>{
        (async function(){
            const quizezCreated = await API.getQuizezCreated();
            const quizezTaken = await API.getQuizezTaken();
            const questionTypes = await API.getQuestionTypes();
            
            dispatch(receiveAllQuizezCreated(quizezCreated));
            dispatch(receiveAllQuizezTaken(quizezTaken));
            dispatch(receiveQuestionTypes(questionTypes));
        })();
    }
    
}