export const RECEIVE_ALL_QUIZEZ_CREATED = "RECEIVE_ALL_QUIZEZ_CREATED"
export const CREATE_NEW_QUIZ = "CREATE_NEW_QUIZ"

export const createNewQuiz=quiz=>({
        type:CREATE_NEW_QUIZ,
        quiz
})

export const receiveAllQuizezCreated=quizez=>({
        type:RECEIVE_ALL_QUIZEZ_CREATED,
        quizez
})