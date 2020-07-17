import {TOOK_NEW_QUIZ,RECEIVE_ALL_QUIZEZ_TAKEN} from '../actions/quizezTaken'

export default function(state=[],action){
    switch(action.type){
        case RECEIVE_ALL_QUIZEZ_TAKEN:
            return action.quizez;
        case TOOK_NEW_QUIZ:
            return [...state,action.quizStats];
        default:
            return state;
    }
}