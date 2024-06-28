// /src/components/TagRounded.jsx
import React from 'react'
import '../sass/component/_tag.scss'

const Tag = ({ text }) => {
    return (
        <div className="tag">
            {text}
        </div>
    )
}

export default Tag
