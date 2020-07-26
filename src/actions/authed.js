import {getSelf,logout} from '../utils/api'
import {loadData, failed} from './shared'
import { startLoader, stopLoader } from './loader'
import {ServerError} from '../Exceptions'

export const AUTH_SUCCESS = "AUTH_SUCCESS"
export const AUTH_FAILURE = "AUTH_FAILURE"
export const LOG_OUT = "LOG_OUT"
export const authSuccess=user=>{
    return {
        type:AUTH_SUCCESS,
        user
    }
}

export const authFailure=()=>{
    return {
        type:AUTH_FAILURE
    }
}

export const logoutUser=()=>{
    return {
        type:LOG_OUT
    }
}

export const auth=()=>{
    return dispatch=>{
        //requesting for user profile{self}..if fulfilled means user has been signed in already
        (async function(){
            try {
                const user = await getSelf();
                console.log('self',user);
                dispatch(authSuccess(user));
                dispatch(loadData());
                
            } catch (error) {
                dispatch(authFailure());
            }
        })();
    }
}

export const logoutHandler=()=>{
    return dispatch=>{
        (async()=>{
            try {
                dispatch(startLoader());
                await logout();
                dispatch(stopLoader());
                dispatch(logoutUser());

            } catch (error) {
                dispatch(stopLoader());
                if(error instanceof ServerError)
                    dispatch(failed(error.message));
                else
                    dispatch(failed(error.message));
            }
        })();
    }
}

