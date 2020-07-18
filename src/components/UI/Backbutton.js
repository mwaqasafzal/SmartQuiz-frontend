import React from 'react'
import ArrowBack from '../../icons/arrow-back.svg'

const Backbutton=({clickHandler})=>{
    return(
        <div className="back-btn" onClick={clickHandler}> 
            <img src={ArrowBack}/>
        </div>
           
    );
}

export default Backbutton;