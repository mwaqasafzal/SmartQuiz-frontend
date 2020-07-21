import {AUTH_FAILURE,AUTH_SUCCESS, LOG_OUT} from '../actions/authed'


export default function(state=null,action){
    switch(action.type){
        case AUTH_SUCCESS:
            return {
                ...action.user,
            }
        case AUTH_FAILURE:
        case LOG_OUT:
            return null;
        
        default:
            return state;
    }
}