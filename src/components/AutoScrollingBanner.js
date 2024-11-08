// AutoScrollingBanner.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';  // สไตล์แยกต่างหาก

const AutoScrollingBanner = () => {
    return (
        <Carousel interval={3000} controls={false} indicators={false} fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/564x/09/ce/7e/09ce7eed103875a554f1b4ad65cfbec9.jpg"
                    alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/564x/d9/8f/99/d98f99c2ed78365cfb156d1124f7633e.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/564x/f9/f5/b2/f9f5b2c2b3c3e67bce10fd5586b6d16d.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/564x/fc/45/8d/fc458d97e94e7d4c006aad9f8610fb51.jpg"
                    alt="four slide"
                />
            </Carousel.Item>

        </Carousel>
    );
};

export default AutoScrollingBanner;
