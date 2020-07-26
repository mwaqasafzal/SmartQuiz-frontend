import React from 'react'
import {connect} from 'react-redux'
import {errDelt} from '../../actions/shared'

const Error=({error,dispatch})=>{
    const display= error?'flex':'none';
    return(
        <div style={{display}} className="error-box">
            <div className="message">
            <p>{error}</p>
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
        error
    }

};

export default connect(mapStateToProps)(Error);