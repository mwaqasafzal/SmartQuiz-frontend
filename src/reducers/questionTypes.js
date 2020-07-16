import {RECEIVE_QUESTION_TYPES} from '../actions/questionTypes'
export default function(state=[],action){

    switch(action.type){
        case RECEIVE_QUESTION_TYPES:
            return action.types;
        default:
            return state;
    }
}