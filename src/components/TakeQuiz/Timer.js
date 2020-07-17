import React,{useState,useEffect} from 'react'

const getTimefromSeconds = seconds =>{
    const time = new Array(3);//[hours,minutes,seconds]
    for(let i=2;i>=0;i--){
        time[i] = seconds % 60;
        seconds = Math.floor(seconds/60);
    }
    
    return `${time[0]<10?"0"+time[0]:time[0]}:${time[1]<10?"0"+time[1]:time[1]}:${time[2]<10?"0"+time[2]:time[2]}`
}
const Timer=({duration,finishQuiz})=>{
    const {hrs,mins} = duration;

    const [seconds,setSeconds] = useState(hrs*3600+mins*60);
    useEffect(()=>{
        decCounter(seconds);
    },[]);

    const decCounter=(seconds)=>{
        setTimeout(()=>{
            if(seconds===0)
                finishQuiz(true);
            else{
                setSeconds(seconds-1);
                decCounter(seconds-1);
            }
                
        },1000);
    }
    
    return(
        <div className="timer">
            {getTimefromSeconds(seconds)}
        </div>
    )

}

export default Timer;