import React from 'react';
import './TopPage.css';

const TopPage = () => {
    return (
        <div className='top-page'>
            <div className='description'>
                <h1>Best Toys In The Town</h1>
                <h2>Because others Can't Beat Us</h2>
                <h5 className='paragraph'>Get a toy for your kids from us and make this their favourite place. Best toys in the town with huge variety to choose from. Get it on! </h5>
            </div>
            <div className='image'>
                <img src="car.jpg" alt="" />
            </div>
        </div>
    );
};

export default TopPage;