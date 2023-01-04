import React from 'react';
import Banner from '../Banner/Banner';
import PopularProducts from '../PopularProducts/PopularProducts';
import FeaturedFoods from '../FeaturedFoods/FeaturedFoods';
import PopularFoods from '../PopularFoods/PopularFoods';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularProducts></PopularProducts>
            <FeaturedFoods></FeaturedFoods>
            <PopularFoods></PopularFoods>
        </div>
    );
};

export default Home;