import React, { useEffect, useState } from 'react';
import loadReviews from '../../CustomHook/LoadReviews';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {

    const [reviews, setReviews] = loadReviews();

    return (
        <div>
           <h1 className='reviews-heading'>What Our Customers Say</h1> 
           {/* <h3>Number of reviews: {reviews.length}</h3> */}
           {
               reviews.map(review => <Review key={review.id} review={review}></Review>)
           }
        </div>
    );
};

export default Reviews;