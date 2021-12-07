import React from 'react';

import { 
    Col,
    Card
 } from "react-bootstrap";
const EducationCard = ({data}) => {
    return ( 
        <Col lg="6">
            <div className="pb-5 text-center">

                <p className="lead">
                <strong>{data.title}</strong>
                    <br/>
                    <i>{data.degree}</i>
                    <br/>
                    <p>{data.institution}</p>
                    {data.date}
                </p>
                
            </div>
        </Col>
     );
}
 
export default EducationCard;