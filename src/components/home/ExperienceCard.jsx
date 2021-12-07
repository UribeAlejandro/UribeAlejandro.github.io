import React from 'react';

import { 
    Col,
    Card
 } from "react-bootstrap";
const ExperienceCard = ({data}) => {
    return ( 
        <Col lg="6">
            <div className="pb-5 text-center">

                <p className="lead">
                <strong>{data.role}</strong>
                    <br/>
                    {data.companyname}
                    <br/>
                    {data.date}
                </p>
                
            </div>
        </Col>
     );
}
 
export default ExperienceCard;