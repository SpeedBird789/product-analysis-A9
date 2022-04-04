import React, { useEffect, useState } from 'react';
import loadReviews from '../../CustomHook/LoadReviews';
import CustomLink from '../CustomLink/CustomLink';
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';
import TopPage from '../TopPage/TopPage';
import './Home.css';

const Home = () => {

    const [reviews, setReviews] = loadReviews();
    
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