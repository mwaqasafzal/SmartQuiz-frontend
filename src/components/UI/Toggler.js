import React from 'react'

export const Toggler=({toggleNav})=>{
    return(
        <div className="toggler" onClick={toggleNav}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    );
}