import {HOST} from './configs'
import {
    DuplicateKeyError,
    ServerError,
    NotFoundError,
    InvalidKeyError,
    NetworkError,
    NotAllowedError} from '../Exceptions'

const networkError ="Kindly Check Your Network Connection and Try Again";

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
    else if(res.status===500)
        throw new ServerError("Something Went Wrong,Please Try Again Later");
    else
        throw new NetworkError(networkError)

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
    else if(res.status===500)
        throw new ServerError("Something Went Wrong,Please Try Again Later");
    else
        throw new NetworkError(networkError)

}

export const getQuizTakers=async(quizId)=>{
    
    const res = await fetch(`${HOST}/quizzes/${quizId}/attempts`,{
        credentials:'include'});
    if(res.ok){
        const formattedRes = await res.json();
        return formattedRes.data.attendees;
    }
    else if(res.status===500)
        throw new ServerError("Something Went Wrong,Please Try Again Later");
    else
        throw new NetworkError(networkError)

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
    else if(res.status===500)
        throw new ServerError("Something Went Wrong,Please Try Again Later");
    else
        throw new NetworkError(networkError);

   

   
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
    if(res.ok)
        return;
    else if(res.status===500)
        throw new ServerError("Something Went Wrong,Please Try Again Later");
    else
        throw new NetworkError(networkError);
}

export const getQuiz = async(key)=>{

    const res = await fetch(`${HOST}/quizzes/${key}`,{
        credentials:'include'
    })
    
    if(res.ok){
        const formattedRes = await res.json();
        return formattedRes.data.quiz;
    }
    else if(res.status===404)
        throw new NotFoundError("Incorrect Key Entered")
    else if(res.status===403)
        throw new NotAllowedError("Key Expired or Already Taken the Quiz");
    else if(res.status===500)
        throw new ServerError("Something Went Wrong,Please Try Again Later");
    else
        throw new NetworkError(networkError)


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
    else if(res.status===500)
        throw new ServerError("Something Went Wrong,Please Try Again Later");
    else
        throw new NetworkError(networkError);

    
}

export const login = async({email,password})=>{//userId might be email or password
    const uri=`${HOST}/users/login`;
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
    else if(res.status===500)
        throw new ServerError("Something Went Wrong,Please Try Again Later");
    else
        throw new NetworkError(networkError);
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
    else if(res.status===500)
        throw new ServerError("Something Went Wrong,Please Try Again Later");
    else
        throw new NetworkError(networkError);
      
}

export const logout=async()=>{
    const res = await fetch(`${HOST}/users/logout`,{
        credentials:'include'
    });
    if(res.ok)
        return;
    else if(res.status===500)
        throw new ServerError("Something Went Wrong,Please Try Again Later");
    else
        throw new NetworkError(networkError);
}

export const removeQuiz=async(quizId)=>{
    const res = await fetch(`${HOST}/quizzes/${quizId}`,{
        method:'DELETE',
        credentials:'include'
    })

    if(res.ok)
        return {status:'success'};
    else if(res.status===404)
        throw new NotFoundError("Quiz Not Found");
    else if(res.status===500)
        throw new ServerError("Something Went Wrong,Please Try Again Later")
    else
        throw new NetworkError(networkError);
}