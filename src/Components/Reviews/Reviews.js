import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect( () => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data));
    }, [])

    return (
        <div>
           <h2>What Our Customers Say</h2> 
           {/* <h3>Number of reviews: {reviews.length}</h3> */}
           {
               reviews.map(review => <Review key={review.id} review={review}></Review>)
           }
        </div>
    );
};

export default Reviews;