import {receiveAllQuizezTaken} from './quizezTaken'
import {receiveAllQuizezCreated} from './quizezCreated'
import * as API from '../utils/api'


export const FAILED="OPERATION_FAILED"
export const ERR_DELT="ERROR_DELT"

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

//error will be object like this {type:'Network Error',message:'xyz'}

export const failed = error=>({
    type:FAILED,
    error
});

export const errDelt=()=>({
    type:ERR_DELT   
})