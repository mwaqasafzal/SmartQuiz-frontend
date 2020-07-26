import quizezCreatedReducer from './quizezCreated'
import quizezTakenReducer from './quizezTaken'
import authedReducer from './authed'
import errReducer from './errReducer'
import LoadingReducer from './loader'
import {combineReducers} from 'redux'


export default combineReducers({
    quizezCreated: quizezCreatedReducer,
    quizezTaken: quizezTakenReducer,
    authed: authedReducer,
    error:errReducer,
    loading:LoadingReducer  
})