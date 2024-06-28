import React from 'react'
import { useParams } from 'react-router-dom'
import locations from '../data/locations.json'
import Card from '../components/Card'
import Tag from '../components/Tag'
import '../sass/component/_locationDetails.scss'
import Avatar from '../components/Avatar'


const LocationDetails = () => {
    const { id } = useParams()
    console.log('Location ID from URL:', id)

    const location = locations.find(location => location.id === id)
    console.log('Matched Location:', location)

    if (!location) {
        return <h2>Location not found</h2>
    }

    return (
        <div className="container-locationDetails">
            <Card
                imageUrl={location.cover}
                height="415px"
            />
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
        </div >
    )
}

export default LocationDetails
