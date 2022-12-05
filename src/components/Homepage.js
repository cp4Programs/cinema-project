import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/home.css'
import Slider from './Slider'
import MovieCard from './MovieCard'
import '../styles/movie.css'

function Homepage({ apiKey, baseUrl }) {
    const [popularMovies, setPopularMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [page, setPage] = useState(1)
    // const handlePage = (number) => {
    //     setPage(number)
    // }

    useEffect(() => {
        axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&page=${page}`)
            .then(res => {
                console.log(res.data.results)
                setPopularMovies(res.data.results)
            })
            .catch(err => console.log(err))

    }, [page])

    useEffect(() => {
        axios.get(`${baseUrl}/movie/top_rated?api_key=${apiKey}&page=1`)
            .then(res => {
                console.log(res.data.results)(
                    setTopRatedMovies(res.data.results.slice(0, 10)))
            })
            .catch(err => console.log(err))
    }, [])



    return (
        <div className="homepage-container">
            <Slider apiKey={apiKey} baseUrl={baseUrl} />
            <div className="movies-wrapper">
                <div className="popular-container">
                    <h3>Popular Movies</h3>
                    <div className="popular-cards-wrapper">
                        {
                            popularMovies?.map(movie => {
                                return <MovieCard height={"300px"} imageUrl={movie.poster_path} cardStyle={"popular-card"} data={movie} radius={"16px"} />
                            })
                        }
                    </div>
                    <div className="page-numbers">
                        <p>Select Page</p>
                        {
                            pageNumbers.map(item => {
                                return <p onClick={() => setPage(item)} >{item}</p>
                            })
                        }
                    </div>
                </div>
                <div className="top-rated-container">
                    <h3>Top Rated Movies</h3>
                    <div className='top-rated-cards-wrapper'>
                        {
                            topRatedMovies?.map(movie => {
                                return <MovieCard height={"100px"} imageUrl={movie.backdrop_path} cardStyle={"top-rated-card"} data={movie} radius={"8px"} />
                            })
                        }
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Homepage