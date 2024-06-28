import React from 'react'
import '../sass/component/_card.scss'

const Card = ({ imageUrl, text, height }) => {
    return (
        <div className="card" style={{ height: height }}>
            <img src={imageUrl} alt="sea" className="card__image" />
            <div className="card__text">{text}</div>
        </div>
    )
}

export default Card
