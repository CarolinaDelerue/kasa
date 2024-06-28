import React from 'react'
import { useParams } from 'react-router-dom'
import locations from '../data/locations.json'
import Card from '../components/Card'

const LocationDetails = () => {
    const { id } = useParams()
    console.log('Location ID from URL:', id)

    const location = locations.find(location => location.id === id)
    console.log('Matched Location:', location)

    if (!location) {
        return <h2>Location not found</h2>
    }

    return (
        <div className="locationDetails">
            <Card
                imageUrl={location.cover}
                text="Chez vous, partout et ailleurs"
                height="415px"
            />
            <h1>{location.title}</h1>
            <p>{location.location}</p>
            <p>{location.tags}</p>
        </div>
    )
}

export default LocationDetails
