import React from 'react'
import Loader from './Loader'
import {connect} from 'react-redux'

const FullScLoader=({loading})=>{
    const display = loading?"flex":"none";
    
    return (
        <div style={{display}} className="custom-loader"> 
            <Loader/>
        </div>
    );
}
const mapStateToProps=({loading})=>({
    loading
});
export default connect(mapStateToProps)(FullScLoader);