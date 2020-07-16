import {CREATE_NEW_QUIZ,RECEIVE_ALL_QUIZEZ_CREATED} from '../actions/quizezCreated'

export default function(state=[],action){
    
    switch(action.type){
        case RECEIVE_ALL_QUIZEZ_CREATED:
            return action.quizez;
        case CREATE_NEW_QUIZ:
            return [...state,action.quiz]
        default:
            return state;
    }
}