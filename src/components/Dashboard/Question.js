import React from 'react'

const Question = ({question,questionType,options,answer,questionNo})=>{
    let content;
    if(questionType==="mcq")
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
    else if(questionType==="blank")
        content=(
            <div className="question">
                    <p>{questionNo}. {question}</p>
                <p>Correct Answer:<b>{answer}</b></p>
            </div>
        );

    return content;

}

export default Question;