import quizezCreatedReducer from './quizezCreated'
import quizezTakenReducer from './quizezTaken'
import authedReducer from './authed'
import {combineReducers} from 'redux'

export default combineReducers({
    quizezCreated: quizezCreatedReducer,
    quizezTaken: quizezTakenReducer,
    authed: authedReducer,
    
})