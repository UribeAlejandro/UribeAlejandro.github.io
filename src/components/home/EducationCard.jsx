import React from 'react';

import {
    Col,
    Card
} from "react-bootstrap";
const EducationCard = ({ data }) => {
    return (
        <Col lg="6">
            <div className="pb-5 text-center">
                <p className="lead">
                    <strong>{data.title}</strong>
                    <br />
                    {data.degree}
                    <br />
                    <a href={data.url}>{data.institution}</a>
                    <br />
                    {data.date}
                </p>
            </div>
        </Col>
    );
}

export default EducationCard;