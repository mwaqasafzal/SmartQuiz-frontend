import {HOST} from './configs'
import {DuplicateKeyError,ServerError,NotFoundError,InvalidKeyError} from '../Exceptions'

const networkError = {
    type:'Network Error',
    message:"Kindly Check Your Network Connection and Try Again"
};

export const getQuizezTaken=async ()=>{
    
    
    const res = await fetch(`${HOST}/quizzes/attempted`,{
        method:'GET',
        headers:{
            'content-type':'application/json'
        },
        credentials:'include'
    })
    if(res.ok){
        const formattedRes = await res.json();
         return formattedRes.data.quizzes;
    }
    else
        throw new ServerError("Something went wrong");
}

export const getQuizezCreated=async()=>{
    const res = await fetch(`${HOST}/quizzes`,{
        method:'GET',
        headers:{
            'content-type':'application/json'
        },
        credentials:'include'
    })
    if(res.ok){
        const formattedRes = await res.json();
        return formattedRes.data.quizzes;
    }
    else
        throw new ServerError("Something went wrong");
}

export const getQuizTakers=async(quizId)=>{
    
    const res = await fetch(`${HOST}/quizzes/${quizId}/attempts`,{
        credentials:'include'});
    if(res.ok){
        const formattedRes = await res.json();
        return formattedRes.data.attendees;
    }
    else
        throw new ServerError("Something went wrong");
}

export const createQuiz = async(quiz)=>{
    const res = await fetch(`${HOST}/quizzes`,{
        method:'POST',
        body:JSON.stringify({
            ...quiz
        }),
        headers:{
            'content-type':'application/json'
        },
        credentials:'include'
    });
    if(res.ok){
        const formattedRes = await res.json();
        return formattedRes.data.quiz;//updated quiz
    }
    else
        throw new ServerError("Something went wrong");
   

   
}
export const takenQuiz = async(quizStats)=>{
    const res=await fetch(`${HOST}/quizzes/${quizStats.key}`,{
        method:'POST',
        body:JSON.stringify({
            ...quizStats
        }),
        headers:{
            'content-type':'application/json'
        },
        credentials:'include'
    });

    if(!res.ok)//means server errorr

        throw new ServerError("Something went wrong");
 
     
}

export const getQuiz = async(key)=>{

    const res = await fetch(`${HOST}/quizzes/${key}`,{
        credentials:'include'
    })
    
    if(res.ok){
        const formattedRes = await res.json();
        return formattedRes.data;
    }
    else if(res.status===404)
        return {
            status:'failed',
            error:{
                type:'Not Found',
                message:'Quiz not found'
            }
        };
    else if(res.status===403)
        return {
            status:'failed',
            error:{
                type: 'Not Allowed',
                message:'Quiz Already Taken or Key Expired'
            }
        };
    else if(res.status===500)
        return{
            status:'failed',
            error:{
                type:'Server Error',
                message:'Something Went Wrong,Please Try Again Later'
            }
        }
    else
        return{
            status:'failed',
            error:networkError
        }


}


export const getSelf = async()=>{
    const res = await fetch(`${HOST}/users/me`,{
        credentials:'include'
    });
   
    if(res.ok){
        const formattedRes = await res.json();
        return formattedRes.data;
    }
    else if(res.status===400)
        throw new NotFoundError("User Not Found");
    else 
        throw new ServerError("Something Went Wrong");

    
}

export const login = async({email,password})=>{//userId might be email or password
    const uri=`${HOST}/users/login`;
    console.log(uri);
    const res = await fetch(uri,{
        method:'POST',
        body:JSON.stringify({
            email,
            password
        }),
        headers:{
            'content-type':'application/json'
        },
        credentials:'include'
    });

    if(res.ok){
        const formattedRes = await res.json();
        return formattedRes.data.user;
    }
    else if(res.status==403)
        throw new InvalidKeyError("Email or Password Incorrect");
    else if(res.status==404)
        throw new NotFoundError("User Not Found")
    else 
        throw new ServerError("Something Went Wrong")
}

export const signUp = async({username,fullName,email,password})=>{
    const res = await fetch(`${HOST}/users/signup`,{
        method:'POST',
        body:JSON.stringify({
            username,
            fullName,
            email,
            password
        }),
        headers:{
            'content-type':'application/json'
        },
        credentials:'include'
    });
    if(res.ok){
        const formattedRes = await res.json();
        return formattedRes.data.user;
    }
    else if(res.status===403)//duplicate key
        throw new DuplicateKeyError("Email Already Exists");
    else
        throw new ServerError("Something Went Wrong")
      
}

export const logout=async()=>{
    const res = await fetch(`${HOST}/users/logout`,{
        credentials:'include'
    });
    console.log('logout res',res);
}

export const removeQuiz=async(quizId)=>{
    const res = await fetch(`${HOST}/quizzes/${quizId}`,{
        method:'DELETE',
        credentials:'include'
    })

    if(res.ok)
        return {status:'success'};
    else if(res.status===404)
        return {
            status:'failed',
            error:{
                message:'Quiz Not Found'
            }
    }
    else if(res.status===500)
        return {
                status:'failed',
                error:{
                    type:'Server Error',
                    message:"Something Went Wrong,can't remove quiz"
                }
            }
    else
        return {
            status:'failed',
            error:networkError
        }
}