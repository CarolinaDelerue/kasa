import React from 'react'
import Card from '../components/Card'
import CardLocation from '../components/CardLocation'
import locations from '../data/locations.json'
import '../sass/component/_home.scss'

const Home = () => {
    return (
        <div className="container-home">
            <div>
                <Card
                    imageUrl="/sea.png"
                    text="Chez vous, partout et ailleurs"
                />
            </div>

            <div className="container-cardLocation">
                {locations.map(location => (
                    <CardLocation
                        key={location.id}
                        location={location}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home
