import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/component/_cardLocation.scss'

const CardLocation = ({ location }) => {
    return (
        <div className="cardLocation">
            <Link to={`/location/${location.id}`} className="cardLocation__link">
                <div
                    className="cardLocation__image"
                    style={{ backgroundImage: `url(${location.cover})` }}
                >
                    <h2 className="cardLocation__title">{location.title}</h2>
                </div>
            </Link>
        </div>
    )
}

export default CardLocation
