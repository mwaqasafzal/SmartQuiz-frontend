import React from 'react'
import {connect} from 'react-redux'


const filterQuestionTypes = ({selectedType,questionTypes,changeQuestionType})=>{

    return(
        <div className="filter-question-type">
            <select 
                onChange={e=>changeQuestionType(e.target.value)}
                defaultValue={selectedType}>
                {questionTypes.map(type=>(
                    <option 
                        key={type}
                        value={type}>{type.toUpperCase()}</option>
                ))}
            </select>
        </div>
    );
}





export default filterQuestionTypes;