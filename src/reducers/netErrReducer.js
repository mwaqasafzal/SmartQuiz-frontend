import {NET_ERR} from '../actions/shared'

export default function(state=false,action){
    switch(action.type){
        case NET_ERR:
            return true;
        default:
            return state;
    }
}