import {receiveAllQuizezTaken} from './quizezTaken'
import {receiveAllQuizezCreated} from './quizezCreated'
import * as API from '../utils/api'

export const NET_ERR = "NETWORK_ERROR"

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

export const networkError = ()=>(
    {
        type:NET_ERR
    }
);