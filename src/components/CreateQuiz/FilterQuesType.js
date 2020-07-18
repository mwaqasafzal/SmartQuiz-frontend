import React from 'react'

const filterQuestionTypes = ({selectedType,questionTypes,changeQuestionType})=>{

    return(
        <div className="filter-question-type">
            <select 
                className="filter"
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