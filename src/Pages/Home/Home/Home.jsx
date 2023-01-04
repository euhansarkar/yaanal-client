import React from 'react';
import Banner from '../Banner/Banner';
import PopularProducts from '../PopularProducts/PopularProducts';
import FeaturedFoods from '../FeaturedFoods/FeaturedFoods';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularProducts></PopularProducts>
            <FeaturedFoods></FeaturedFoods>
        </div>
    );
};

export default Home;