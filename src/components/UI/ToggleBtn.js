import React from 'react'

const ToggleBtn=({toggle})=>(
    <div className="toggle-btn" onClick={toggle}>
        <div className="pipe"></div>
        <div className="pipe"></div>
        <div className="pipe"></div>    
    </div>
);

export default ToggleBtn;