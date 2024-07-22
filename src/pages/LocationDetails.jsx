import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import locations from '../data/locations.json'
import Tag from '../components/Tag'
import '../sass/component/_locationDetails.scss'
import Avatar from '../components/Avatar'
import Carousel from '../components/Carousel'
import Dropdown from '../components/Dropdown'
import StarRating from '../components/StarRating'

const LocationDetails = () => {
    const [location, setLocation] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const foundLocation = locations.find((location) => location.id === id)
        if (!foundLocation) {
            navigate('/404')
        } else {
            setLocation(foundLocation)
        }
    }, [id, navigate])

    if (!Object.keys(location).length) return <>Loading...</>

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
