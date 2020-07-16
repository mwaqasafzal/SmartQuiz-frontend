
export const TAKE_NEW_QUIZ = "TAKE_NEW_QUIZ"
export const RECEIVE_ALL_QUIZEZ_TAKEN = "RECEIVE_ALL_QUIZEZ_TAKEN"

export const takeNewQuiz=quiz=>({
   
        type: TAKE_NEW_QUIZ,
        quiz
});

export const receiveAllQuizezTaken=quizez=>({
    type: RECEIVE_ALL_QUIZEZ_TAKEN,
    quizez
});