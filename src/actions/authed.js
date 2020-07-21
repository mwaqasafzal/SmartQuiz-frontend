import {getSelf,login as userLogin,signUp as userSignUp} from '../utils/api'
import {loadData} from './shared'

export const AUTH_SUCCESS = "AUTH_SUCCESS"
export const AUTH_FAILURE = "AUTH_FAILURE"

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

// export const login = (loginData)=>{
//     return dispatch=>{
//         (async function(){
//             const user = await userLogin(loginData);
//             dispatch(authSuccess(user));
//             dispatch(loadData());

//         })();
//     }
// }

// export const signUp = ({fullName,email,password})=>{
//     return dispatch=>{
//         (async function(){
//             const user = await userSignUp({fullName,email,password});
//             dispatch(authSuccess(user));
//             dispatch(loadData);
//         })();
//     }
// }