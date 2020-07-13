import React from 'react'

export const Service=props=>{
    return(
        <div className="service m-3">
            <div className="image">
                <img src={props.image} alt="quiz-pic"/>    
            </div>
            <h3>{props.title}</h3>
            <div className="desc">{props.children}</div>
        </div>
    );
}