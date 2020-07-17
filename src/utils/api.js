import * as DataSever from './Data'

export const getQuizezTaken=async ()=>{
    const res = await DataSever.getQuizezTaken();
    const quizezTaken = JSON.parse(res);
    return quizezTaken;
}

export const getQuizezCreated=async()=>{
    const res = await DataSever.getQuizezCreated();
    const quizezCreated = JSON.parse(res);
    return quizezCreated;
}

export const getQuizTakers=async(quizId)=>{
    const res = await DataSever.getQuizTakers(quizId);
    const quizTakers = JSON.parse(res);
    return quizTakers;
}

export const getQuestionTypes = async()=>{
    const res = await DataSever.getQuestionTypes();
    const questionTypes = JSON.parse(res);
    return questionTypes;
}

export const createQuiz = async(quiz)=>{
    const res = await DataSever.createQuiz(quiz);
    const updatedQuiz = JSON.parse(res);
    return updatedQuiz;
}