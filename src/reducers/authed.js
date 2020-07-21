import {AUTH_FAILURE,AUTH_SUCCESS} from '../actions/authed'


export default function(state=null,action){
    switch(action.type){
        case AUTH_SUCCESS:
            return {
                ...action.user,
            }
        case AUTH_FAILURE:
            return null;
        default:
            return state;
    }
}