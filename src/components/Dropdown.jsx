// src/components/Dropdown.jsx
import React, { useState } from 'react'
import '../sass/component/_dropdown.scss'

const Dropdown = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="dropdown">
            <button
                className={`dropdown__button ${isOpen ? 'dropdown__button--open' : ''}`}
                onClick={toggleDropdown}
            >
                {title}
                <span className="dropdown__arrow"></span>
            </button>
            {isOpen && (
                <div className="dropdown__content">
                    {Array.isArray(content) ? (
                        <ul>
                            {content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{content}</p>
                    )}
                </div>
            )}
        </div>
    )
}

export default Dropdown
