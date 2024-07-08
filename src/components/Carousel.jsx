// src/components/Carousel.jsx
import React, { useState } from 'react'
import '../sass/component/_carousel.scss'

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }

    return (
        <div className="carousel">
            <button className="carousel__button carousel__button--prev" onClick={handlePrevClick}>
                &lt;
            </button>
            <div className="carousel__image-container">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel__image" />
            </div>
            <button className="carousel__button carousel__button--next" onClick={handleNextClick}>
                &gt;
            </button>
        </div>
    )
}

export default Carousel
