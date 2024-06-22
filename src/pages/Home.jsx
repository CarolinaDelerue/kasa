import React from 'react'
import Card from '../components/Card'
import CardLocation from '../components/CardLocation'
import locations from '../data/locations.json' // Chemin mis à jour

const Home = () => {
    return (
        <div>
            <div>
                <Card
                    imageUrl="/sea.png"
                    text="Chez vous, partout et ailleurs"
                />
            </div>
            <div>
                {locations.map(location => (
                    <CardLocation
                        key={location.id}
                        location={location} // Passez l'objet location complet
                    />
                ))}
            </div>
        </div>
    )
}

export default Home
