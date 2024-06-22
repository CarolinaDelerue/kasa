import React from 'react'
import '../sass/component/_cardLocation.scss'

const CardLocation = ({ location }) => {
    return (
        <div className="card">
            <div
                className="card-image"
                style={{ backgroundImage: `url(${location.cover})` }}
            >
                <h2 className="card-title">{location.title}</h2>
            </div>
            <div className="card-content">
                <p className="card-description">{location.description}</p>
                <div className="card-host">
                    <img src={location.host.picture} alt={location.host.name} className="host-image" />
                    <span className="host-name">{location.host.name}</span>
                </div>
                <div className="card-rating">Rating: {location.rating} / 5</div>
                <div className="card-location">{location.location}</div>
                <ul className="card-equipments">
                    {location.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
                <div className="card-tags">
                    {location.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardLocation
