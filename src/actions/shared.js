import {receiveAllQuizezTaken} from './quizezTaken'
import {receiveAllQuizezCreated} from './quizezCreated'
import * as API from '../utils/api'


export const loadData = ()=>{//async action creator
    return dispatch=>{
        (async function(){
            const quizezCreated = await API.getQuizezCreated();
            const quizezTaken = await API.getQuizezTaken();
            
            dispatch(receiveAllQuizezCreated(quizezCreated));
            dispatch(receiveAllQuizezTaken(quizezTaken));
        })();
    }
    
}