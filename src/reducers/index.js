import quizezCreatedReducer from './quizezCreated'
import quizezTakenReducer from './quizezTaken'
import questionTypesReducer from './questionTypes'
import authedReducer from './authed'
import {combineReducers} from 'redux'

export default combineReducers({
    quizezCreated: quizezCreatedReducer,
    quizezTaken: quizezTakenReducer,
    questionTypes: questionTypesReducer,
    authed: authedReducer,
    
})