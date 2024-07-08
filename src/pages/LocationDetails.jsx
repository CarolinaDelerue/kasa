// src/components/LocationDetails.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import locations from '../data/locations.json'
import Tag from '../components/Tag'
import '../sass/component/_locationDetails.scss'
import Avatar from '../components/Avatar'
import Carousel from '../components/Carousel'
import Dropdown from '../components/Dropdown'

const LocationDetails = () => {
    const { id } = useParams()
    console.log('Location ID from URL:', id)

    const location = locations.find((location) => location.id === id)
    console.log('Matched Location:', location)

    if (!location) {
        return <h2>Location not found</h2>
    }

    return (
        <div className="container-locationDetails">
            <Carousel images={location.pictures} />
            <div className="container-details">
                <div className="container-details-left">
                    <h1>{location.title}</h1>
                    <p>{location.location}</p>
                    <div className="cardLocation__tags">
                        {location.tags.map((tag, index) => (
                            <Tag key={index} text={tag} />
                        ))}
                    </div>
                </div>
                <div className="container-details-right">
                    <p>{location.host.name}</p>
                    <Avatar imageUrl={location.host.picture} altText={location.host.name} />
                </div>
            </div>
            <div className="container-dropdown">
                <>
                    <Dropdown title="Description" content={location.description} />
                </>
                <>
                    <Dropdown title="Equipement" content={location.equipments} />
                </>
            </div>
        </div>
    )
}

export default LocationDetails
