import {START_LOADER,STOP_LOADER} from '../actions/loader'

export default function(state=false,action){
    switch(action.type){
        case START_LOADER:
            return true;
        case STOP_LOADER:
            return false;
        default:
            return state;
    }
}