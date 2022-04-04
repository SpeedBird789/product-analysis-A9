import React from 'react';
import './Review.css';

const Review = (props) => {
    const {name, review, rating, id} = props.review;
    return (
        <div className='review'>
            <h2>Customer: {name} </h2>
            <h4> {review} </h4>
            <h4> {rating} </h4>
        </div>
    );
};

export default Review;