import React from 'react'
import '../sass/component/_starRating.scss'

const StarRating = ({ location }) => {
    return (
        <div className="star-rating">
            {[...Array(5)].map((_, index) => (
                <span key={index} className={index < location.rating ? "star filled" : "star"}>★</span>
            ))}
        </div>
    )
}

export default StarRating
