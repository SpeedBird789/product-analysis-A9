import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import TopPage from '../TopPage/TopPage';
import './Home.css';

const Home = () => {

    const [reviews, setReviews] = useState([]);
    useEffect( () => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data));
    }, [])
    
    return (
        <div>
            <TopPage></TopPage>
            <h1 className='customer-reviews'>Customer Reviews(3)</h1>
           
            {
               reviews.slice(0,3).map(review => <Review key={review.id} review={review}></Review>)
            }
          
            <button className='home-btn'>
                See All Reviews
            </button>
        </div>
    );
};

export default Home;