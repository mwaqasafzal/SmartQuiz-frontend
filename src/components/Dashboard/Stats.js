import React from 'react'
import {connect} from 'react-redux'

 const Stats= ({quizezCreatedCount,quizezTakenCount})=>{
  
    return(
        <div className="stats">
            <table>
                <tbody>
                    <tr>
                        <td>Quizez Taken</td>
                        <td>{quizezTakenCount}</td>
                    </tr>
                    <tr>
                        <td>Quizez Created</td>
                        <td>{quizezCreatedCount}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = state=>({
    quizezCreatedCount:state.quizezCreated.length,
    quizezTakenCount:state.quizezTaken.length
})
export default connect(mapStateToProps)(Stats);