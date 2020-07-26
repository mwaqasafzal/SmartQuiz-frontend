import React from 'react'
import {connect} from 'react-redux'
import {errDelt} from '../../actions/shared'

const Error=({type,message,dispatch})=>{
    const display= type || message?'flex':'none';
    return(
        <div style={{display}} className="error-box">
            <div className="message">
            <p>{type}: {message}</p>
                <button 
                    onClick={()=>dispatch(errDelt())}
                >OK</button>
            </div>
        </div>
    );
}
const mapStateToProps=({error})=>{

    if(!error)
        return;
    return {
        type:error.type || "",
        message:error.message || ""
    }

};

export default connect(mapStateToProps)(Error);