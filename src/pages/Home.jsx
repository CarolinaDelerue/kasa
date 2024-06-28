import React from 'react'
import Card from '../components/Card'
import CardLocation from '../components/CardLocation'
import locations from '../data/locations.json'
import '../sass/component/_home.scss' // Assurez-vous que ce fichier est correctement importé

const Home = () => {
    return (
        <div className="container-home">
            <div>
                <Card
                    imageUrl="/sea.png"
                    text="Chez vous, partout et ailleurs"
                    height="223px"
                />
            </div>

            <div className="container-cardLocation">
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
