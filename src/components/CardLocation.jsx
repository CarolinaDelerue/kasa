import React from 'react'
import '../sass/component/_cardLocation.scss'

const CardLocation = ({ location }) => {
    return (
        <div className="cardLocation">
            <div
                className="cardLocation__image"
                style={{ backgroundImage: `url(${location.cover})` }}
            >
                <h2 className="cardLocation__title">{location.title}</h2>
            </div>
        </div>
    )
}

export default CardLocation
