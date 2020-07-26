import quizezCreatedReducer from './quizezCreated'
import quizezTakenReducer from './quizezTaken'
import authedReducer from './authed'
import netErrReducer from './netErrReducer'
import LoadingReducer from './loader'
import {combineReducers} from 'redux'


export default combineReducers({
    quizezCreated: quizezCreatedReducer,
    quizezTaken: quizezTakenReducer,
    authed: authedReducer,
    networkError:netErrReducer,
    loading:LoadingReducer  
})