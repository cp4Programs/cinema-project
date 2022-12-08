import React from 'react'
import StarRatings from 'react-star-ratings'

function Rating({ movieRating }) {
    return (
        <StarRatings
            rating={movieRating / 2}
            starRatedColor="red"
            numberOfStars={5}
            name='rating'
            starEmptyColor="grey"
            starDimension="15px"
            starSpacing="2px"
        />
    )
}

export default Rating