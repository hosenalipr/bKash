import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BkashServices = () => {
    return (
        <section className="bkashServices py-5">
            <Container>
                <h2 classname="text-center">bKash Services</h2>
                <Row className='my-3'>
                    <Col md={4} className="my-2">
                        <div className="card align-items-center text-center h-100 m-2">
                            <img className='w-100' src="https://www.bkash.com/uploaded_contents/blogs/thumb_images/thumbnail%20(1)_1672838394997.webp" alt="" />
                            <h5 className="lh-sm mb-0 mb-0 mb-md-half">Artisans of Ayesha Abed Foundation will get wages through bKash</h5>
                        </div>
                    </Col>
                    <Col md={4} className="my-2">
                        <div className="card align-items-center text-center h-100 m-2">
                            <img className='w-100' src="https://www.bkash.com/uploaded_contents/blogs/thumb_images/BIUSC%20(400X300)_1669827417631.webp" alt="" />
                            <h5 className="lh-sm mb-0 mb-0 mb-md-half">Bangabandhu Inter University Sports prize disbursed through bKash</h5>
                        </div>
                    </Col>
                    <Col md={4} className="my-2">
                        <div className="card align-items-center text-center h-100 m-2">
                            <img className='w-100' src="https://www.bkash.com/uploaded_contents/blogs/thumb_images/53_1669627643331.webp" alt="" />
                            <h5 className="lh-sm mb-0 mb-0 mb-md-half">bKash will disburse wages to workers under govt EGPP project</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BkashServices
