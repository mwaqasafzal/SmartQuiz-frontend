
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
        duration: "1 hour",
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
        duration: "1 hour",
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

export const getQuizTakers=(quizId)=>{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            
            const attendees = users.filter(user=>user.quizezTaken.includes(quizId));
            const quizAttendees = attendees.map(attendee=>{
                const {attemptedAt,score} = scores.find(({username,quizId})=>username===attendee.username && quizId === quizId);

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