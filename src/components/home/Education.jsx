import React from 'react';
import EducationCard from "./EducationCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Education = ({education}) => {
    return (
    <div id="education">
        <section className="section">
            <Container>
                <Jumbotron fluid className="bg-white">
                    <h2 className="display-4 mb-5 text-center">
                        {education.heading}
                    </h2>
                    <Row>
                        {
                            education.data.map(data => {
                                return <EducationCard key={data.institution} data={data} />
                            })
                        }
                    </Row>
                </Jumbotron>
            </Container>
        </section>
    </div>
    );
}
 
export default Education;