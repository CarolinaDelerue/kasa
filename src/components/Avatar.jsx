// /src/components/Avatar.jsx
import React from 'react'
import '../sass/component/_avatar.scss'

const Avatar = ({ imageUrl, altText = "Avatar" }) => {
    return (
        <div className="avatar">
            <img src={imageUrl} alt={altText} className="avatar__image" />
        </div>
    )
}

export default Avatar
