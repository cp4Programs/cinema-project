import React from 'react'

function MovieCard({ data, cardStyle, imageUrl, height, radius }) {
    const imageBaseUrl = process.env.REACT_APP_IMAGE_BASE_URL

    const imageStyle = {
        backgroundImage: `url("${imageBaseUrl}/${imageUrl}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: height,
        width: '200px',
        borderRadius: radius
    }

    return (
        <div className={cardStyle}>
            <div style={imageStyle}>
                <div className="movie-info-top">
                    rating
                </div>
                <div className="movie-info-bottom">
                    <p>{data?.title}</p>
                    <p>Rating:</p>

                </div>
            </div>
            {
                cardStyle === "top-rated-card" ? <p>{data?.title}</p> : null
            }
        </div>
    )
}

export default MovieCard