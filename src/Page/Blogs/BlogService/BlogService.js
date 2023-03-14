import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./BlogService.css"

const BlogService = () => {
    return (
        <section className="blogService py-3">
            <Container>
                <Row className='my-5'>
                    <Col md={8} className="my-2">
                        <div className="card featured-horizontal flex-column flex-md-row align-items-center text-center h-100 m-2">
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
                            <img className='w-100' src="https://www.bkash.com/uploaded_contents/blogs/thumb_images/Thumbnail_1676802630268.webp" alt="" />
                            <h5 className="lh-sm mb-0 mb-0 mb-md-half">Grameenphone introduces bKash as the preferred payment partner</h5>
                        </div>
                    </Col>
                    <Col md={4} className="my-2">
                        <div className="card align-items-center text-center h-100 m-2">
                            <img className='w-100' src="https://www.bkash.com/uploaded_contents/blogs/thumb_images/CSR%20Award%20(400X300)_1669828440210.webp" alt="" />
                            <h5 className="card-title fw-medium lh-sm line-clamp-3 mb-0 mb-md-half">bKash wins ‘Best CSR in Education’ award</h5>
                        </div>
                    </Col>
                    <Col md={4} className="my-2">
                        <div className="card align-items-center text-center h-100 m-2">
                            <img className='w-100' src="https://www.bkash.com/uploaded_contents/blogs/thumb_images/86_1669644717300.webp" alt="" />
                            <h5 className="lh-sm mb-0 mb-0 mb-md-half">bKash handed over graphic novel ‘Mujib’ to 110 schools in Ctg</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BlogService
