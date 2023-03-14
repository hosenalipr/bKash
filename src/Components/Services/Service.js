import React from 'react'
import Col from 'react-bootstrap/Col';
import "./Service.css";

const Service = ({ item }) => {
    return (
        < Col lg={3}>
            <div className="m-3 card shadow-sm h-100 text-center ">
                <div className="image-area mt-3" >
                    <img src={item.img} alt="service image" />
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <button>Learn More</button>
                </div>
            </div>
        </Col >
    )
}

export default Service
