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
            {images.length > 1 && (
                <button className="carousel__button carousel__button--prev" onClick={handlePrevClick}>
                    &lt;
                </button>
            )}
            <div className="carousel__image-container">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel__image" />
            </div>
            {images.length > 1 && (
                <button className="carousel__button carousel__button--next" onClick={handleNextClick}>
                    &gt;
                </button>
            )}
            {images.length > 1 && (
                <div className="carousel__counter">
                    {currentIndex + 1}/{images.length}
                </div>
            )}
        </div>
    )
}

export default Carousel
