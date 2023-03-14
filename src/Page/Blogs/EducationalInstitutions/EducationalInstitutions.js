import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import './EducationalInstitutions.css'

const EducationalInstitutions = () => {
    return (
        <section className="educationalInstitutions ">
            <Container>
                <Row className='align-items-center p-5'>
                    <Col>
                        <h2>Educational Institutions</h2>
                        <p>bKash provides an array of innovative solutions to facilitate the collection of education-related fees as well as the disbursement of grants, scholarships, etc. to the students and beneficiaries. Also, get access to these features: 24/7 remote financial transactions, fee collection, checkout, real-time reporting portal, and disbursement solution</p>
                    </Col>
                    <Col>
                        <img src="https://www.bkash.com/uploaded_contents/businesses/thumb_images/05-education-institute_1666262925655.webp" alt="online-image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default EducationalInstitutions
