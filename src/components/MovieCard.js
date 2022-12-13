import React, { useState } from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function MovieCard({ data, cardStyle, imageUrl, height, radius }) {
    const imageBaseUrl = process.env.REACT_APP_IMAGE_BASE_URL
    const [movieRating, setMovieRating] = useState(data?.vote_average / 2)

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
        <div>
            <Link to={`/movie/details/${data?.id}`} className={cardStyle} />
            <div style={imageStyle}>
                <div className="movie-info-top">
                    <Rating movieRating={movieRating} />
                </div>
                <div className="movie-info-bottom">
                    <p>{data?.title}</p>
                    <p>Rating:</p>

                </div>
            </div>
            {
                cardStyle === "top-rated-card" ? <p>{data?.title}</p> : null
            }
        </div >
    )
}

export default MovieCard