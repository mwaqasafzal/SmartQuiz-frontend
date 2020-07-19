import React from 'react'
import {Card} from 'react-bootstrap'
const StatCard=({title,text,clickHandler})=>{
    return (
        <Card className="stat-card" onClick={clickHandler}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                   {text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}


export default StatCard;