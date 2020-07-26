import {CREATE_NEW_QUIZ,RECEIVE_ALL_QUIZEZ_CREATED,REMOVE_QUIZ} from '../actions/quizezCreated'

export default function(state=[],action){
    
    switch(action.type){
        case RECEIVE_ALL_QUIZEZ_CREATED:
            return action.quizez;
        case CREATE_NEW_QUIZ:
            return [...state,action.quiz]
        case REMOVE_QUIZ:
            return state.filter(quiz=>quiz._id!==action.quizId)
        default:
            return state;
    }
}