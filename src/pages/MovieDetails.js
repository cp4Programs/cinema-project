import React, { useContext, useEffect, useState } from 'react'
import '../styles/movie.css'
import { ThemeContext } from '../contexts/ThemeContext'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'

function MovieDetails({ baseUrl, apiKey }) {
    const { darkMode, setDarkMode } = useContext(ThemeContext)
    const [movie, setMovie] = useState({})
    const { movieid } = useParams()
    const [videoLink, setVideoLink] = useState('')
    const imageBase = process.env.REACT_APP_IMAGE_BASE_URL
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get(`${baseUrl}/movie/${movieid}?api_key=${apiKey}`)
            .then(res => {
                setMovie(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))

        axios.get(`${baseUrl}/movie/${movieid}/videos?api_key=${apiKey}`)
            .then(res => {
                const youtubeLink = res.data.results.filter(item => item.site === "YouTube" && item.type === "Trailer")
                setVideoLink(youtubeLink[0].key)
            })
            .catch(err => console.log(err))

        axios.get(`${baseUrl}/movie/${movieid}/reviews?api_key=${apiKey}`)
            .then(res => {
                setReviews(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])



    return (
        <div className={darkMode ? "movie-details-container" : "movie-details-container details-light"}>
            {
                videoLink
                    ? <div className="trailer-container">
                        <ReactPlayer className="trailer-player"
                            url={`https://www.youtube.com/watch?v=${videoLink}`}
                            width="100%"
                            height="100%" />
                    </div>
                    : <div className-="trailer-container-blank"
                        style={{ backgroungImage: `url(" ${imageBase}/${movie?.backdrop_path}")` }}>
                        <p>No Trailer Available</p>
                    </div>
            }
            <div className="info-container">
                <img src={`${imageBase}/${movie?.poster_path}`} className="details-poster" />

                <div className="movie-info">
                    <h2>{movie?.tagline}</h2>
                    <h4>{movie?.overview}</h4>
                    <h4>Status: <span>{movie?.status}</span></h4>
                    <h4>Runtime: <span>{movie?.runtime}</span>min.</h4>
                    <h4>Budget: <span>{movie?.budget}</span></h4>

                </div>
            </div>
            <div className="review-container">
                <p className="reviews-title">Reviews</p>
                {
                    reviews?.map(item => {
                        return <p>{item.content}</p>
                    })
                }
            </div>

        </div>
    )
}

export default MovieDetails