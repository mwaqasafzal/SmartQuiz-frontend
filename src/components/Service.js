import React from 'react'

export const Service=props=>{
    return(
        <div className="service">
            <div className="image">
                <img src={props.image}/>    
            </div>
            <h3>{props.title}</h3>
            <div className="desc">{props.children}</div>
        </div>
    );
}