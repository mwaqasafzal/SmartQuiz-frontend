import {removeQuiz as _removeQuiz} from '../utils/api'
import {startLoader,stopLoader} from './loader'
import {failed} from './shared'

export const RECEIVE_ALL_QUIZEZ_CREATED = "RECEIVE_ALL_QUIZEZ_CREATED"
export const CREATE_NEW_QUIZ = "CREATE_NEW_QUIZ"
export const REMOVE_QUIZ = "REMOVE_QUIZ"

export const createNewQuiz=quiz=>({
        type:CREATE_NEW_QUIZ,
        quiz
})

export const receiveAllQuizezCreated=quizez=>({
        type:RECEIVE_ALL_QUIZEZ_CREATED,
        quizez
})

export const removeQuiz=quizId=>({
        type:REMOVE_QUIZ,
        quizId
})

export const removeQuizHandler=quizId=>{
        return async(dispatch)=>{
                dispatch(startLoader());
                try {
                        await _removeQuiz(quizId);
                        dispatch(stopLoader());
                        dispatch(removeQuiz(quizId));
                } catch (error) {
                        dispatch(stopLoader());
                        dispatch(failed(error.message));
                }          
        }
}