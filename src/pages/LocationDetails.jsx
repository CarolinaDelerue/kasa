// src/components/LocationDetails.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import locations from '../data/locations.json'
import Tag from '../components/Tag'
import '../sass/component/_locationDetails.scss'
import Avatar from '../components/Avatar'
import Carousel from '../components/Carousel'
import Dropdown from '../components/Dropdown'
import StarRating from '../components/StarRating'
import NotFound from '../components/NotFound'

const LocationDetails = () => {
    const { id } = useParams()
    console.log('Location ID from URL:', id)

    const location = locations.find((location) => location.id === id)
    console.log('Matched Location:', location)

    if (!location) {
        return <NotFound />
    }

    return (
        <div className="container-locationDetails">
            <Carousel images={location.pictures} />

            <div className="container-infos">
                <div className="container-heading-tags">
                    <div className="container-heading">
                        <h1>{location.title}</h1>
                        <p>{location.location}</p>
                    </div>
                    <div className="cardLocation-tags">
                        {location.tags.map((tag, index) => (
                            <Tag key={index} text={tag} />
                        ))}
                    </div>
                </div>


                <div className="container-avatar-stars">
                    <div className="container-avatar">
                        <p className="host">{location.host.name.split(' ')[0]}<br />{location.host.name.split(' ')[1]}</p>
                        <Avatar imageUrl={location.host.picture} altText={location.host.name} />
                    </div>
                    <StarRating location={location} />
                </div>
            </div>

            <div className="container-dropdown">
                <Dropdown title="Description" content={location.description} />
                <Dropdown title="Équipement" content={location.equipments} />
            </div>
        </div>
    )
}

export default LocationDetails
