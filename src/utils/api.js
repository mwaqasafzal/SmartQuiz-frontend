import {HOST} from './configs'

export const getQuizezTaken=async ()=>{
    const res = await fetch(`${HOST}/quizzes/attempted`,{
        method:'GET',
        headers:{
            'content-type':'application/json'
        }
    })
    const formattedRes = await res.json();
    return formattedRes.data.quizzes;

}

export const getQuizezCreated=async()=>{
    const res = await fetch(`${HOST}/quizzes`,{
        method:'GET',
        headers:{
            'content-type':'application/json'
        }
    })
    const formattedRes = await res.json();
    return formattedRes.data.quizzes;
}

export const getQuizTakers=async(quizId)=>{
    
    const res = await fetch(`${HOST}/quizzes/${quizId}/attempts`)
    const formattedRes = await res.json();
    return formattedRes.data.attendees;
}

export const createQuiz = async(quiz)=>{
    const res = await fetch(`${HOST}/quizzes`,{
        method:'POST',
        body:JSON.stringify({
            ...quiz
        }),
        headers:{
            'content-type':'application/json'
        }
    })

    const formattedRes = await res.json();
    console.log(formattedRes);
    return formattedRes.data.quiz;//updated quiz

   
}
export const takenQuiz = async(quizStats)=>{
    fetch(`${HOST}/quizzes/${quizStats.key}`,{
        method:'POST',
        body:JSON.stringify({
            ...quizStats
        }),
        headers:{
            'content-type':'application/json'
        }
    })

     
}

export const getQuiz = async(key)=>{

    const res = await fetch(`${HOST}/quizzes/${key}`)
    const formattedRes = await res.json();
    if(formattedRes.status==="failed")
        throw new Error(formattedRes.message);
    return formattedRes.data.quiz;

}