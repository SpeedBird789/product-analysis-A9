import React from 'react';
import './TopPage.css';

const TopPage = () => {
    return (
        <div className='top-page'>
            <div className='description'>
                <h1>BEST TOYS In The Town</h1>
                <h2>Because others Can't Beat Us</h2>
                <h4 className='paragraph'>Get some toys for your kids from us and make this their favourite place. Best toys in the town with huge variety to choose from. Come today and get your hands playing with 'em! </h4>
            </div>
            <div className='image'>
                <img src="car.jpg" alt="" />
            </div>
        </div>
    );
};

export default TopPage;