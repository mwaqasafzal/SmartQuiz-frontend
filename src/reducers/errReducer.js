import {FAILED,ERR_DELT} from '../actions/shared'

export default function(state=null,action){
    switch(action.type){
        case FAILED:
            return action.error;
        case ERR_DELT:
            return null;
        default:
            return state;
    }
}