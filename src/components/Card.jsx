// /src/components/Card.jsx
import React from 'react'
import '../sass/component/_card.scss'

const Card = ({ imageUrl, text }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt="sea" className="card__image" />
            <div className="card__text">{text}</div>
        </div>
    )
}

export default Card
