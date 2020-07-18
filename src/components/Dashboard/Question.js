import React from 'react'

const Question = ({question,type,options,answer,questionNo})=>{
    let content;
    console.log(type);
    if(type==="mcq")
        content=(
            <div className="question">
                <p>{questionNo}. {question}</p>
                <ol>
                    {options.map((option,ind)=><li key={ind}>{option}</li>)}
                </ol>
                {/* basically answer carries option no in string */}
                <p>Correct Answer:<b>{options[(answer*1)-1]}</b></p>
            </div>
        );
    else if(type==="blank")
        content=(
            <div className="question">
                    <p>{questionNo}. {question}</p>
                <p>Correct Answer:<b>{answer}</b></p>
            </div>
        );

    return content;

}

export default Question;