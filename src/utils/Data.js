let quizCount = 0;
const quizez = [
    {
        id:"quiz5",
        key:"xyzq5",
        name:"DSA Quiz",
        createdAt:"20 June 2020",
        deadline:"30 June 2020",
        duration: {
            hrs:0,
            mins:1
        },
        questions:[
            {
                type:"blank",    
                question:"Order of Stack?",
                answer:"lifo"
            },
            {
                type: "mcq",
                question: "What is one is graph traversing algorithm?",
                options: ["binary search","bankers algorithm","dijkestra algorithm","bubble sort"],
                answer: "3"

            }
        ]
    }
]
const quizezTaken = [
        {   quizId:"quiz0",
            quizName:"Quiz One",
            total:10,
            score:8,
            takenAt: "15 July 2020 @1:30 PM",
            createdBy: {
                username:"user1",
                fullName:"Muhammad Ahmed",
                email:"m.ahmed@test.com"
            }
        },
        {
            quizId:"quiz1",
            quizName:"Quiz Two",
            total:10,
            score:6,
            takenAt: "15 July 2020 @3:30 PM",
            createdBy: {
                username:"user2",
                fullName:"Abdul Rehman",
                email:"a.rehman@test.com"
            }

        },
        {
            quizId:"quiz2",
            quizName:"Quiz Three",
            total:10,
            score:7,
            takenAt: "16 July 2020 @5:30 PM",
            createdBy:{
                username:"user3",
                fullName:"Usama Karim",
                email:"u.karim@test.com"
            }
        }
]
// const quizTypes=["mcq","blank"]
const quizezCreated = [//who has attempted quiz will be fetched when user opens quizez created
    {
        id:"quiz3",
        name:"Tech Quiz",
        createdAt:"12 June 2020",
        deadline:"30 June 2020",
        duration: {
            hrs:1,
            mins:20
        },
        questions:[
            {
                type:"mcq",    
                question:"Ubuntu is distro of?",
                options:["linux","windows","mac"],
                correct:1
            }
        ]
    },
    {
        id:"quiz4",
        name:"Gk Quiz",
        createdAt:"20 June 2020",
        deadline:"30 June 2020",
        duration: {
            hrs:1,
            mins:20
        },
        questions:[
            {
                type:"blank",    
                question:"Which year Pakistan won ICC Cricket World Cup?",
                answer:"1992"
            }
        ]
    }
]

const users = [
   {
       username:"talha",
       fullName:"Muhammad Talha",
       email:"talha@test.com",
       quizezTaken:["quiz3","quiz4","quiz2"]
   },
   {
        username:"ahmer",
        fullName:"Muhammad Ahmer",
        email:"ahmer@test.com",
        quizezTaken:["quiz3","quiz1"]
    },
    {
        username:"farhan",
        fullName:"Muhammad Farhan",
        email:"farhan@test.com",
        quizezTaken:["quiz4","quiz2"]
    }
    
]
const questionTypes = ['mcq','blank'];

const scores = [
    {
        username:"talha",
        quizId:"quiz3",
        attemptedAt:"14 June 2020 @5:00 PM",
        score: 8
    },
    {
        username:"talha",
        quizId:"quiz4",
        attemptedAt:"25 June 2020 @2:00 PM",
        score: 9
    },
    {
        username:"ahmer",
        quizId:"quiz3",
        attemptedAt:"13 June 2020 @1:00 PM",
        score: 6
    },
    {
        username:"farhan",
        quizId:"quiz4",
        attemptedAt:"22 June 2020 @7:00 PM",
        score: 9
    }
]

export const getQuizezTaken=()=>{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(JSON.stringify(quizezTaken));
        }, 500);
    })
}

export const getQuizezCreated=()=>{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(JSON.stringify(quizezCreated));
        }, 500);
    })
}
export const getQuestionTypes=()=>{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(JSON.stringify(questionTypes));
        }, 500);
    })
}

export const getQuizTakers=(quizId)=>{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            
            const attendees = users.filter(user=>user.quizezTaken.includes(quizId));
            const quizAttendees = attendees.map(attendee=>{
                const {attemptedAt,score} = scores.find(score=>score.username===attendee.username && score.quizId === quizId);

                return {
                    ...attendee,
                   attemptedAt,
                   score
                }
            })
            
            res(JSON.stringify(quizAttendees));
        }, 2000);
    })
}

export const createQuiz=quiz=>{
    const quizId = Date.now();
    quiz.key = quizId;
    quiz.id = ++quizCount;
    quizezCreated.push(quiz);
    return new Promise((res,rej)=>{

        res(JSON.stringify(quiz));
    },500);
}

export const getQuiz=key=>{
    const quiz = quizez.find(quiz=>quiz.key === key);
    return new Promise((res,rej)=>{
        if(quiz){
            quiz.createdBy = {
                username : "testuser",
                fullName : "Mr. Test",
                email : "Test@test.com"
            }
            res(JSON.stringify(quiz));
        }
           
        else
            rej("not found")
    },500);
}

export const takenQuiz = quizStats=>{
    quizezTaken.push(quizStats);
    return new Promise((res,rej)=>{
        res('success:200');
    })
}