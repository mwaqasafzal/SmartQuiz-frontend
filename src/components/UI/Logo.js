import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
export const Logo=props=>{
    return (
        <div className="logo" onClick={()=>scroll.scrollToTop()}>
            SmartQuiz
        </div>
    );
}