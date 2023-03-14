import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Media.css"

const Media = () => {
    return (
        <section className="media mx-0 py-5 ">
            <Container>
                <h2 classname="text-center">Madia</h2>
                <Row className='my-3'>
                    <Col md={4} className="my-2">
                        <div className="card align-items-center text-center h-100 m-2">
                            <img className='w-100' src="https://www.bkash.com/uploaded_contents/blogs/thumb_images/Dainik%20Bangla%20-%207.9.22%20-%20400X300_1669824170413.webp" alt="" />
                            <h5 className="lh-sm mb-0 mb-0 mb-md-half">MFS: the trusted companion of Bangladesh's inclusive prosperity</h5>
                        </div>
                    </Col>
                    <Col md={4} className="my-2">
                        <div className="card align-items-center text-center h-100 m-2">
                            <img className='w-100' src="https://www.bkash.com/uploaded_contents/blogs/thumb_images/Financial_Express,10-Nov-22,%20400X300_1669652071120.webp" alt="" />
                            <h5 className="lh-sm mb-0 mb-0 mb-md-half">Financial inclusion: bKash takes another leap</h5>
                        </div>
                    </Col>
                    <Col md={4} className="my-2">
                        <div className="card align-items-center text-center h-100 m-2">
                            <img className='w-100' src="https://www.bkash.com/uploaded_contents/blogs/thumb_images/Prothom_Alo,05-Nov-21%20-%20400X300_1669650921517.webp" alt="" />
                            <h5 className="lh-sm mb-0 mb-0 mb-md-half">bKash CEO's interview on 10 years of bKash</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Media
