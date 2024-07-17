// src/components/NotFound.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/component/_notFound.scss' // Assurez-vous de créer un fichier SCSS pour les styles de la page 404

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default NotFound
