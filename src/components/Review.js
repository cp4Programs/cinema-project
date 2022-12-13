import React, { useContext, useState } from 'react'
import '../styles/review.css'
import { ThemeContext } from '../contexts/ThemeContext'
import pikachuAvatar from '../assets/pikachuAvatar.jpeg'

function Review({ review }) {
    const { darkMode, setDarkMode } = useContext(ThemeContext)
    const imageBase = process.env.REACT_APP_IMAGE_BASE_URL
    const [imageError, setImageError] = useState(false)
    const [seeMore, setSeeMore] = useState(false)

    return (
        <div className="review">
            <div className="avatar-container">
                <img className="avatar" src={imageError ? pikachuAvatar : `${imageBase}/${review?.author_details.avatar_path}`} onError={() => setImageError(true)} />
                <p>{review?.author}</p>
            </div>
            {
                !seeMore
                    ? <p>{review?.content?.slice(0, 300)}... <span className="read-more" onClick={() => setSeeMore(true)}>read more</span></p>
                    : <p>{review?.content}  <span className="read-less" onClick={() => setSeeMore(false)}>read less</span></p>
            }


        </div>
    )
}

export default Review