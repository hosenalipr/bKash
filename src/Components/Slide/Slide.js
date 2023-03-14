import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slide = () => {
    const [banners, setBanner] = useState([]);
    useEffect(() => {
        fetch("Slider.json")
            .then(res => res.json())
            .then(data => setBanner(data))
    }, []);

    return (
        <div className='banner'>
            <Carousel>
                {banners.map((sliderImage) => (<Carousel.Item key={sliderImage.id}>
                    <img
                        className="d-block w-100"
                        src={sliderImage.img}
                        alt="First slide" />
                </Carousel.Item>))}
            </Carousel>
        </div >
    )
}

export default Slide
