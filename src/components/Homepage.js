import React from 'react'
import '../styles/home.css'
import Slider from './Slider'

function Homepage({ apiKey, baseUrl }) {
    return (
        <div className="homepage-container">
            <Slider apiKey={apiKey} baseUrl={baseUrl} />
        </div>


    )
}

export default Homepage